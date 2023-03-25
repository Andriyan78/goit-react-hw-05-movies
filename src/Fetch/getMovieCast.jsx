async function getMovieCast(movieId) {
  const key = '2fcb6a5f5ebbb13b312482f3f13e0e10';
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const filter = `?api_key=${key}&language=en-US`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data.cast;
}

export default getMovieCast;