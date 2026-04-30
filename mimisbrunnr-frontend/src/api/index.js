import axiosRoot from 'axios';

export const axios = axiosRoot.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
});

export async function getAll(url) {
  const { data } = await axios.get(url);

  return data.value;
}

export async function save(url, { arg: { id, ...data } }) {
  await axios({
    method: id ? 'PUT' : 'POST',
    url: `${url}/${id ?? ''}`,
    data,
  });
}

export const post = async (url, { arg }) => {
  const { data } = await axios.post(url, arg);

  return data;
};

export const put = async (url, { arg }) => {
  const { data } = await axios.put(url, arg);

  return data;
};


export const deleteById = async (url, { arg: id }) => {
  await axios.delete(`${url}/${id}`); 
};