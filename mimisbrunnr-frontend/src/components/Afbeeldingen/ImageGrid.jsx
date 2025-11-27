import './ImageGrid.css';

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((src, i) => (
        <div key={i} className="image-grid-item">
          <img src={src} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
