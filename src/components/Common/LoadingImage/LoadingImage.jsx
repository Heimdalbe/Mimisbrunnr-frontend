import { useEffect, useRef, useState } from 'react';
import Loader from '../AsyncData/Loader';
import './LoadingImage.css';

export default function LoadingImage({ src, alt = '', width, height, className = '', style, loading = 'lazy' }) {
  const image = useRef(null);
  const [result, setResult] = useState(null);
  const state = result?.src === src ? result.state : 'loading';

  useEffect(() => {
    if (image.current.complete) {
      setResult({ src, state: image.current.naturalWidth ? 'loaded' : 'error' });
    }
  }, [src]);

  return <div className={`image-frame ${className}`} data-state={state} aria-busy={state === 'loading'}
    style={{ aspectRatio: width && height ? `${width} / ${height}` : undefined, ...style }}>
    <img ref={image} key={src} className="image-content" src={src || undefined} alt={alt}
      width={width} height={height} loading={loading} decoding="async" aria-hidden={state === 'error'}
      onLoad={() => setResult({ src, state: 'loaded' })}
      onError={() => setResult({ src, state: 'error' })} />
    {state === 'loading' && <div className="image-placeholder"><Loader /></div>}
    {state === 'error' && <div className="image-placeholder image-error" role="img"
      aria-label={`${alt ? `${alt}: ` : ''}afbeelding niet beschikbaar`}>Afbeelding niet beschikbaar</div>}
  </div>;
}
