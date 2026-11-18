import { useState, useEffect } from 'react';
import LightBox from '../Lightbox/Lightbox';
import LoadingImage from '../LoadingImage/LoadingImage';
import './ImageGrid.css';

function getLayoutGroups(n) {
  const LAYOUTS = [7, 5, 3, 2, 1];
  const result = [];
  let remaining = n;
  let lastUsed = null;

  while (remaining > 0) {
    let candidates = LAYOUTS.filter((l) => l <= remaining && l != lastUsed);

    let layout = candidates.find((l) => remaining - l == 0);

    if (!layout)
      layout = candidates.find((l) => l <= remaining);

    result.push(layout);
    remaining -= layout;
    lastUsed = layout;
  }

  if (result.length > 2)
    result.splice(1, 0, result.pop());

  return result;
}

const ImageGrid = ({ images = [] }) => {

  const [activeIndex, setActiveIndex] = useState(null);
  const openLightbox = (index) => setActiveIndex(index);

  useEffect(() => {
    if (activeIndex === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [activeIndex]);

  const layouts = getLayoutGroups(images?.length ?? 0);
  const diffs = [];
  var prev = 0;
  var index = 0;

  for (let i = 0; i < layouts.length; i++) {
    let imgs = [];

    images.slice(prev, prev + layouts[i]).forEach((img, j) => {
      let k = index;
      imgs.push(
        <div key={j} onClick={() => openLightbox(k)} className='img-wrapper' style={{ gridArea: '_' + j }} >
          <LoadingImage src={img.url} alt={img.description} />
        </div>,
      );
      index += 1;
    });

    prev += layouts[i];

    diffs.push(
      <div key={i} className={'layout-' + layouts[i]}>
        {imgs}
      </div>,
    );
  }

  return (
    <>
      <div className="grid">
        {diffs}
      </div>

      {activeIndex !== null && (<LightBox images={images} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />)}
    </>
  );
};

export default ImageGrid;
