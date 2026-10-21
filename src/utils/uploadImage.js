import { axios } from '../api';

export async function uploadImage(file, folder) {
  const { data } = await axios.post('/uploads/presign', {
    contentType: file.type,
    folder,
  });

  const res = await fetch(data.uploadUrl, {
    method: 'PUT',
    headers: { 'Content-Type': file.type },
    body: file,
  });
  if (!res.ok) throw new Error('Upload failed');

  return data.publicUrl;
}
