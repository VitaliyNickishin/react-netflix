import { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonfakery.com/movies/paginated");

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        console.log("data:", data);

        setMovies(data.data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading movies...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="mb-3">Movies List</h1>
      <ul className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.isArray(movies) &&
          movies.map((movie) => (
            <li key={movie.movie_id}>
              {/* <MovieCard {...movie} /> */}
              <MovieCard movie={movie} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MoviesList;
