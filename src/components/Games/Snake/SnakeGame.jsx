import { useEffect, useId, useRef, useState } from 'react';
import useSWR from 'swr';
import { Link } from 'react-router-dom';
import { axios, getAll } from '../../../api';
import { useAuth } from '../../../contexts/AuthContext';
import { createGame, directions, step, turn } from './snake';
import head from './head.svg';
import './SnakeGame.css';

export default function SnakeGame({ onClose }) {
  const [game, setGame] = useState(createGame);
  const [saving, setSaving] = useState('');
  const board = useRef(null);
  const { isAuthenticated } = useAuth();
  const id = useId();
  const { data: scores, error, mutate, isLoading } = useSWR(
    `/games/snake/leaderboard?width=${game.width}&height=${game.height}`, getAll,
  );
  const active = game.status === 'running' || game.status === 'paused';
  const finished = game.status === 'over' || game.status === 'won';
  const maximum = game.width * game.height - 3;

  useEffect(() => {
    if (game.status !== 'running') return;
    const timer = setInterval(() => setGame((g) => step(g)), 140);
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
    setGame((g) => turn(g, direction));
    focusBoard();
  };
  const pause = () => {
    setGame((g) => ({ ...g, status: g.status === 'running' ? 'paused' : 'running' }));
    focusBoard();
  };

  return <section className="snake-game" aria-labelledby="snake-title">
    <header className="snake-heading">
      <div><span className="snake-eyebrow">HEIMDAL ARCADE</span><h2 id="snake-title">Jormungandr Snake</h2></div>
      <button className="snake-close" onClick={onClose} aria-label="Spel sluiten">×</button>
    </header>
    <form className="snake-settings" onSubmit={(event) => {
      event.preventDefault();
      const values = new FormData(event.currentTarget);
      setGame(createGame(Number(values.get('width')), Number(values.get('height'))));
      setSaving('');
    }}>
      <fieldset disabled={active}>
        <legend>Speelveld</legend>
        <label>Breedte
          <input name="width" type="number" min="8" max="40" step="1" defaultValue="20" required />
        </label>
        <span aria-hidden="true">×</span>
        <label>Hoogte <input name="height" type="number" min="8" max="40" step="1" defaultValue="16" required /></label>
        <button type="submit">Veld instellen</button>
      </fieldset>
    </form>
    <div className="snake-scorebar">
      <span>Score <strong>{game.score}</strong><small> / {maximum}</small></span>
      <span>{game.width} × {game.height}</span>
      <button onClick={pause} disabled={!active}>{game.status === 'paused' ? 'Verder' : 'Pauze'}</button>
    </div>
    <div className="snake-board" style={{ maxWidth: `${40 * game.width / game.height}dvh` }}
      ref={board} tabIndex="0" aria-label="Snake-speelveld"
      aria-describedby={`${id}-help`} onKeyDown={(event) => {
        if (directions[event.key]) {
          event.preventDefault();
          changeDirection(directions[event.key]);
        } else if (event.code === 'Space' && active) {
          event.preventDefault();
          pause();
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
        <polyline points={game.snake.map(([x, y]) => `${x + .5},${y + .5}`).join(' ')}
          fill="none" stroke="#018743" strokeWidth=".75" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points={game.snake.map(([x, y]) => `${x + .5},${y + .5}`).join(' ')}
          fill="none" stroke="#4bc140" strokeWidth=".32" strokeDasharray=".8 .8" strokeLinejoin="round" />
        <g transform={`translate(${game.snake[0][0] + .5} ${game.snake[0][1] + .5})
          rotate(${Math.atan2(game.direction[1], game.direction[0]) * 180 / Math.PI})`}>
          <image href={head} x="-.65" y="-.68" width="1.5" height="1.36" />
        </g>
      </svg>
      {game.status !== 'running' && <div className="snake-overlay">
        <img src={head} alt="" width="88" height="70" />
        <h3>{game.status === 'ready' ? 'Klaar voor de jacht?' : game.status === 'paused' ? 'Even pauze'
          : game.status === 'won' ? 'Hele veld gevuld!' : 'Game over'}</h3>
        <p>{finished ? `${game.score} van ${maximum} punten` : 'Eet, groei en ontwijk je eigen staart.'}</p>
        <button onClick={game.status === 'paused' ? pause : start}>
          {game.status === 'paused' ? 'Verder spelen' : finished ? 'Opnieuw spelen' : 'Start spel'}
        </button>
      </div>}
    </div>
    <div className="snake-controls" aria-label="Richting kiezen">
      {Object.entries(directions).map(([key, direction], i) => <button key={key}
        aria-label={['Omhoog', 'Rechts', 'Omlaag', 'Links'][i]} onClick={() => changeDirection(direction)}>
        {['↑', '→', '↓', '←'][i]}
      </button>)}
    </div>
    <p id={`${id}-help`} className="snake-help">Pijltjestoetsen of de knoppen om te sturen · Spatie om te pauzeren.</p>
    <section className="snake-leaderboard" aria-labelledby="snake-leaderboard-title">
      <div className="snake-leaderboard-heading">
        <h3 id="snake-leaderboard-title">Leaderboard</h3><span>{game.width} × {game.height} · top 10</span>
      </div>
      <p className="snake-save-status" role="status">
        {!isAuthenticated ? <>Speel als gast, of
          {' '}<Link to="/login" onClick={onClose}>log in</Link> om je score te bewaren.
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
