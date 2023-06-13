import axios from 'axios';

const API_KEY = '35894589-4c2095b258176c0c5d326f57a';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(searchWord, page) {
 const respons = await axios.get(
    `${BASE_URL}?q=${searchWord}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return respons.data
}

