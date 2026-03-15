import { useState, useMemo } from "react";
import { useMovies } from "../hooks/useMovies";
import { useDebounce } from "../hooks/useDebounce";
import { MoviesList } from "../components/MoviesList";
import { SearchInput } from "../components/SearchInput";
import { Spinner } from "../components/Spinner";

export const Home = () => {
  const { movies, isLoading, error } = useMovies();
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useDebounce(searchTerm);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.original_title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase()),
    );
  }, [movies, debouncedSearch]);

  return (
    <>
      <header className="mb-10 flex items-center justify-between">
        <img src="/logo.svg" alt="Netflix" className="h-8" />

        <SearchInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      <main>
        {isLoading && <Spinner />}
        {error && <p>Error:{error}</p>}

        {!isLoading && !error && <MoviesList movies={filteredMovies} />}
      </main>
    </>
  );
};
