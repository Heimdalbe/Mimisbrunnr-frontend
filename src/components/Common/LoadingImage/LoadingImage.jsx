import { useEffect, useRef, useState } from 'react';
import Loader from '../AsyncData/Loader';
import './LoadingImage.css';

export default function LoadingImage({
  src, fallbackSrc, alt = '', width, height, className = '', style, loading = 'lazy',
}) {
  const image = useRef(null);
  const [result, setResult] = useState(null);
  const [failedSource, setFailedSource] = useState(null);
  const imageSrc = failedSource === src && fallbackSrc ? fallbackSrc : src;
  const state = result?.src === imageSrc ? result.state : 'loading';

  const canUseFallback = fallbackSrc && imageSrc === src && fallbackSrc !== src;

  useEffect(() => {
    if (!image.current.complete) return;
    if (!image.current.naturalWidth && canUseFallback) {
      setFailedSource(src);
    } else {
      setResult({ src: imageSrc, state: image.current.naturalWidth ? 'loaded' : 'error' });
    }
  }, [imageSrc, canUseFallback, src]);

  return <div className={`image-frame ${className}`} data-state={state} aria-busy={state === 'loading'}
    style={{ aspectRatio: width && height ? `${width} / ${height}` : undefined, ...style }}>
    <img ref={image} key={imageSrc} className="image-content" src={imageSrc || undefined} alt={alt}
      width={width} height={height} loading={loading} decoding="async" aria-hidden={state === 'error'}
      onLoad={() => setResult({ src: imageSrc, state: 'loaded' })}
      onError={() => {
        if (canUseFallback) setFailedSource(src);
        else setResult({ src: imageSrc, state: 'error' });
      }} />
    {state === 'loading' && <div className="image-placeholder"><Loader /></div>}
    {state === 'error' && <div className="image-placeholder image-error" role="img"
      aria-label={`${alt ? `${alt}: ` : ''}afbeelding niet beschikbaar`}>Afbeelding niet beschikbaar</div>}
  </div>;
}
