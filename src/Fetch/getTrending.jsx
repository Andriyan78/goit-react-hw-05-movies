import axios from 'axios';

const TOKEN = '2fcb6a5f5ebbb13b312482f3f13e0e10';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

async function getTrending(page) {
  const response = await axios('/trending/movie/day', {
    params: {
      api_key: TOKEN,
      page,
    },
  });

  const trendsMovie = response.data.results.map(
    ({ id, title, poster_path, vote_average }) => {
      return { id, title, poster_path, vote_average };
    }
  );
  return trendsMovie;
}

export default getTrending;