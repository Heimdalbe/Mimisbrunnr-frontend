import { useEffect, useId, useRef, useState } from 'react';
import useSWR from 'swr';
import { Link, useLocation } from 'react-router-dom';
import PrimaryButton from '../../Common/PrimaryButton/PrimaryButton';
import { axios, getAll } from '../../../api';
import { useAuth } from '../../../contexts/AuthContext';
import { createGame, directions, snakeTick, step, turn } from './snake';
import SnakeDragon from './SnakeDragon';
import './SnakeGame.css';

export default function SnakeGame() {
  const { state } = useLocation();
  const [game, setGame] = useState(createGame);
  const [saving, setSaving] = useState('');
  const board = useRef(null);
  const { isAuthenticated } = useAuth();
  const id = useId();
  const { data: scores, error, mutate, isLoading } = useSWR(
    `/games/snake/leaderboard?width=${game.width}&height=${game.height}`, getAll,
  );
  const running = game.status === 'running';
  const paused = game.status === 'paused';
  const active = running || paused;
  const finished = game.status === 'over' || game.status === 'won';
  const maximum = game.width * game.height - 3;
  const action = running ? 'Pauze' : paused ? 'Verder spelen' : finished ? 'Opnieuw spelen' : 'Start spel';

  useEffect(() => {
    if (game.status !== 'running') return;
    const timer = setInterval(() => setGame((g) => step(g)), snakeTick);
    return () => clearInterval(timer);
  }, [game.status]);

  useEffect(() => {
    const pause = () => setGame((g) => g.status === 'running' ? { ...g, status: 'paused' } : g);
    const hidden = () => {
      if (document.hidden) pause();
    };
    window.addEventListener('blur', pause);
    document.addEventListener('visibilitychange', hidden);
    return () => {
      window.removeEventListener('blur', pause);
      document.removeEventListener('visibilitychange', hidden);
    };
  }, []);

  useEffect(() => {
    if (!finished || !isAuthenticated || !game.score) return;
    let cancelled = false;
    setSaving('saving');
    axios.post('/games/snake/scores', { width: game.width, height: game.height, score: game.score })
      .then(() => {
        if (!cancelled) {
          setSaving('saved');
          mutate();
        }
      }).catch(() => {
        if (!cancelled) setSaving('error');
      });
    return () => {
      cancelled = true;
    };
  }, [finished, isAuthenticated, game.width, game.height, game.score, mutate]);

  const focusBoard = () => board.current?.focus({ preventScroll: true });
  const start = () => {
    setSaving('');
    setGame({ ...createGame(game.width, game.height), status: 'running' });
    focusBoard();
  };
  const changeDirection = (direction) => {
    setGame((g) => g.status === 'running' ? turn(g, direction) : g);
    focusBoard();
  };
  const pause = () => {
    setGame((g) => ({ ...g, status: g.status === 'running' ? 'paused' : 'running' }));
    focusBoard();
  };

  return <section className="snake-game" aria-labelledby="snake-title">
    <Link className="snake-back" to={state?.from ?? '/#footer'}>← Terug</Link>
    <h1 id="snake-title">Jormungandr Snake</h1>
    <div className="snake-toolbar">
      <p>Score <strong>{game.score}</strong> / {maximum}</p>
      <details className="snake-settings">
        <summary>Speelveld · {game.width} × {game.height}</summary>
        <form onSubmit={(event) => {
          event.preventDefault();
          const values = new FormData(event.currentTarget);
          setGame(createGame(Number(values.get('width')), Number(values.get('height'))));
          setSaving('');
          event.currentTarget.closest('details').open = false;
        }}>
          <fieldset disabled={active}>
            <label>Breedte
              <input name="width" type="number" min="8" max="40" step="1" defaultValue={game.width} required />
            </label>
            <label>Hoogte
              <input name="height" type="number" min="8" max="40" step="1" defaultValue={game.height} required />
            </label>
            <button type="submit" className="primary-button">Toepassen</button>
          </fieldset>
        </form>
      </details>
    </div>
    <div className="snake-board" style={{ '--board-ratio': game.width / game.height }}
      ref={board} tabIndex={0} aria-label="Snake-speelveld" aria-describedby={`${id}-help`}
      onKeyDown={(event) => {
        if (directions[event.key] && running) {
          event.preventDefault();
          changeDirection(directions[event.key]);
        } else if (event.code === 'Space') {
          event.preventDefault();
          if (!event.repeat) (active ? pause : start)();
        }
      }}>
      <svg viewBox={`0 0 ${game.width} ${game.height}`} role="img" aria-label={`Speelveld, score ${game.score}`}>
        <defs>
          <pattern id={`${id}-tiles`} width="2" height="2" patternUnits="userSpaceOnUse">
            <rect width="2" height="2" fill="#183b28" />
            <path d="M0 0h1v1H0zM1 1h1v1H1z" fill="#1d442e" />
          </pattern>
        </defs>
        <rect width={game.width} height={game.height} fill={`url(#${id}-tiles)`} />
        {game.food && <g transform={`translate(${game.food[0] + .5} ${game.food[1] + .5})`}>
          <path d="M0-.2C-.5-.5-.55.5-.15.4Q0 .34.15.4C.55.5.5-.5 0-.2" fill="#ff655b" />
          <path d="M0-.2Q-.08-.53.23-.53" fill="none" stroke="#ffdf72" strokeWidth=".09" />
        </g>}
        <SnakeDragon snake={game.snake} status={game.status} />
      </svg>
    </div>
    <div className="snake-actions">
      <div>
        {finished && <strong role="status">{game.status === 'won' ? 'Hele veld gevuld!' : 'Game over'}</strong>}
        <PrimaryButton text={action} isLight onClick={active ? pause : start} />
      </div>
      <div className="snake-controls" role="group" aria-label="Richting kiezen">
        {Object.entries(directions).map(([key, direction], i) => <button key={key}
          type="button" disabled={!running} aria-label={['Omhoog', 'Rechts', 'Omlaag', 'Links'][i]}
          onClick={() => changeDirection(direction)}>
          {['↑', '→', '↓', '←'][i]}
        </button>)}
      </div>
    </div>
    <p id={`${id}-help`} className="snake-help">Stuur met de pijltjes. Pauzeer met spatie.</p>
    <section className="snake-leaderboard" aria-labelledby="snake-leaderboard-title">
      <h2 id="snake-leaderboard-title">Ranglijst · {game.width} × {game.height}</h2>
      <p className="snake-save-status" role="status">
        {!isAuthenticated ? <>Speel als gast, of
          {' '}<Link to="/login" state={{ from: { pathname: '/snake' } }}>log in</Link> om je score te bewaren.
        </>
          : saving === 'saving' ? 'Score opslaan…' : saving === 'saved' ? 'Score opgeslagen onder je gebruikersnaam.'
            : saving === 'error' ? 'Opslaan mislukt. Je kunt het hieronder opnieuw proberen.'
              : 'Je beste score verschijnt hier onder je gebruikersnaam.'}
      </p>
      {saving === 'error' && <button onClick={async () => {
        setSaving('saving');
        try {
          await axios.post('/games/snake/scores', { width: game.width, height: game.height, score: game.score });
          setSaving('saved');
          mutate();
        } catch {
          setSaving('error');
        }
      }}>Score opnieuw opslaan</button>}
      {isLoading ? <p>Ranglijst laden…</p> : error ? <p role="alert">Ranglijst niet bereikbaar.
        {' '}<button onClick={() => mutate()}>Opnieuw laden</button></p> : scores?.length ? <table>
        <thead><tr><th scope="col">#</th><th scope="col">Gebruikersnaam</th><th scope="col">Score</th></tr></thead>
        <tbody>{scores.map((score, i) => <tr key={score.username}>
          <td>{i + 1}</td><td>{score.username}</td><td>{score.score}</td>
        </tr>)}</tbody>
      </table> : <p>Nog geen scores. Zet jij de eerste neer?</p>}
    </section>
  </section>;
}
