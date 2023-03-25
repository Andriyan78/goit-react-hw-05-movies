async function getSearchMovies(query, page = 1) {
  const TOKEN = '2fcb6a5f5ebbb13b312482f3f13e0e10';
  const url = `https://api.themoviedb.org/3/search/movie`;
  const filter = `?api_key=${TOKEN}&query=${query}&language=en-US&page=${page}&include_adult=false`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();
  return data.results;
}

export default getSearchMovies;