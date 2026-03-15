import { useState, useEffect } from "react";
import { fetchMovies } from "../api/moviesApi";

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadMovies();
  }, []);

  return { movies, isLoading, error };
};
