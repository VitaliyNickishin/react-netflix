export const fetchMovies = async () => {
  const response = await fetch("https://jsonfakery.com/movies/paginated");

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.json();

  console.log("data:", data);

  return data.data;
};
