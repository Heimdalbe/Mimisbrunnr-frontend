import './ImageGrid.css';

const ImageGrid = ({ images, rows }) => {

  const randomSpan = () => {
    const colSpan = Math.ceil(Math.random() * 3);
    const rowSpan = Math.ceil(Math.random() * rows);

    return {
      gridColumnEnd: `span ${colSpan}`,
      gridRowEnd: `span ${rowSpan}`,
    };
  };

  return (
    <div
      className="image-grid"
      style={{
        gridTemplateRows: `repeat(${rows}, 150px)`
      }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="image-grid-item"
          style={randomSpan()}
        >
          <img src={src} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
