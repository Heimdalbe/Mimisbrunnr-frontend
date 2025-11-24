import './ImageGrid.css';

const ImageGrid = ({ images }) => {

  const randomSpan = () => {
    const r = Math.random();

    if (r < 0.15) {
      return {
        gridColumnEnd: `span 2`,
        gridRowEnd: `span 2`,
      };
    }

    if (r < 0.6) {
      return {
        gridColumnEnd: `span 2`,
        gridRowEnd: `span 1`,
      };
    }

    return {
      gridColumnEnd: `span 1`,
      gridRowEnd: `span 1`,
    };
  };

  return (
    <div className="image-grid">
      {images.map((src, i) => (
        <div key={i} className="image-grid-item" style={randomSpan()}>
          <img src={src} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
