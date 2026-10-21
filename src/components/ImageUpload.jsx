import { useState } from 'react';
import { uploadImage } from '../utils/uploadImage';

const MAX_SIZE = 10 * 1024 * 1024; // 10 MB

export default function ImageUpload({ value, onChange, folder }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  async function handleFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > MAX_SIZE) {
      setError('Maximaal 10 MB');
      return;
    }
    setError('');
    setUploading(true);
    try {
      onChange(await uploadImage(file, folder));
    } catch {
      setError('Upload mislukt');
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <input type="file" accept="image/jpeg,image/png,image/webp" onChange={handleFile} disabled={uploading} />
      {uploading && <p>Bezig met uploaden...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {value && (
        <>
          <a
            href={value}
            target="_blank"
            rel="noreferrer"
            style={{ display: 'block', fontSize: '0.8rem', wordBreak: 'break-all' }}
          >
            {value}
          </a>
          <img src={value} alt="" style={{ maxWidth: 200, display: 'block' }} />
        </>
      )}
    </div>
  );
}
