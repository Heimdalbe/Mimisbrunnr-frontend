import { useState, useEffect } from 'react';
import LightBox from '../Lightbox/Lightbox';
import './ImageGrid.css'

function getLayoutGroups(n) {
  const LAYOUTS = [7, 5, 3, 2, 1]
  const result = [];
  let remaining = n;
  let lastUsed = null;

  while (remaining > 0) {
    let candidates = LAYOUTS.filter(l => l <= remaining && l != lastUsed);

    let layout = candidates.find(l => remaining - l == 0)

    if (!layout)
      layout = candidates.find(l => l <= remaining);

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

  const urls = images.map(i => i.url)

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [activeIndex]);

  const layouts = getLayoutGroups(images?.length ?? 0);
  const diffs = [];
  var prev = 0;

  for (let i = 0; i < layouts.length; i++) {
    let imgs = [];

    images.slice(prev, prev + layouts[i]).forEach((img, j) => imgs.push(
      <div key={j} onClick={() => openLightbox(i + j)} className='img-wrapper' style={{ gridArea: '_' + j }} >
        <img src={img.url} alt={img.description} loading="lazy" />
      </div>
    ));

    prev += layouts[i];

    diffs.push(
      <div key={i} className={"layout-" + layouts[i]}>
        {imgs}
      </div>
    );
  }


  return (
    <>
      <div className="grid">
        {diffs}
      </div>

      {activeIndex !== null && (<LightBox images={urls} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />)}
    </>
  );
};

export default ImageGrid;
