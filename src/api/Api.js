import axios from 'axios';

const API_KEY = `19525562-89f63200b6ea6b4c77491aa6b`;

const fetchImages = (query, page = 1) => {
  try {
    return axios.get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    );
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchImages;
