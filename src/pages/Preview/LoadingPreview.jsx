import { useState } from 'react';
import Loader from '../../components/Common/AsyncData/Loader';
import icon from '../../components/Common/AsyncData/jormungandr-loader.png';
import '../../index.css';
import './LoadingPreview.css';

export default function LoadingPreview() {
  const [paused, setPaused] = useState(false);
  const [size, setSize] = useState(160);
  const [guides, setGuides] = useState(false);

  return <main className="loader-preview" style={{ '--loader-size': `${size}px`,
    '--preview-play-state': paused ? 'paused' : 'running' }}>
    <h1>Jormungandr-loader</h1>
    <p>Het draaipunt ligt in het midden van de lichaamsring.</p>
    <div className="preview-controls">
      <button onClick={() => setPaused(!paused)}>{paused ? 'Verder draaien' : 'Pauzeren'}</button>
      <label>Grootte: {size}px
        <input type="range" min="48" max="240" step="8" value={size}
          onChange={(event) => setSize(Number(event.target.value))} />
      </label>
      <label><input type="checkbox" checked={guides}
        onChange={(event) => setGuides(event.target.checked)} /> Toon het middelpunt</label>
      <a href={icon} download="jormungandr-loader.png">PNG downloaden</a>
    </div>
    <div className="preview-samples">
      {['light', 'dark'].map((theme) => <section key={theme} className={`preview-card ${theme}`}>
        <h2>{theme === 'light' ? 'Lichte achtergrond' : 'Donkere achtergrond'}</h2>
        <div className="preview-swatch">
          <div className="preview-spin" data-guides={guides}><Loader /></div>
        </div>
      </section>)}
      <section className="preview-card light">
        <h2>PNG — stilstaand</h2>
        <div className="preview-swatch"><img className="preview-static" src={icon}
          width="256" height="256" alt="Jormungandr met zijn staartpunt bij zijn mond en zijn tong naar buiten" /></div>
      </section>
    </div>
    <p>Bij verminderde beweging blijft de loader stil staan.</p>
    <a href="/">Terug naar de website</a>
  </main>;
}

