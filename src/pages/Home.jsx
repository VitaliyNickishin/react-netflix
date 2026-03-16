import { useState, useMemo } from "react";
import { useMovies } from "../hooks/useMovies";
import { useDebounce } from "../hooks/useDebounce";
import { MoviesList } from "../components/MoviesList";
import { SearchInput } from "../components/SearchInput";
import { Spinner } from "../components/Spinner";
import { useTheme } from "../hooks/useTheme";

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

  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className="mb-10 flex items-center justify-between">
        <img src="/logo.svg" alt="Netflix" className="h-8" />

        <div className="flex gap-1">
          <SearchInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div
            className="cursor-pointer sm:w-26 text-sm px-1 sm:px-3 py-1 rounded border text-white bg-black dark:bg-transparent border-black/20 dark:border-white/10 hover:bg-white hover:text-black transition"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <>
                <span>☀️</span>
                <span className="hidden sm:inline"> Light</span>
              </>
            ) : (
              <>
                <span>🌙</span>
                <span className="hidden sm:inline"> Dark</span>
              </>
            )}
          </div>
        </div>
      </header>
      <main>
        {isLoading && <Spinner />}
        {error && <p>Error:{error}</p>}

        {!isLoading && !error && <MoviesList movies={filteredMovies} />}
      </main>
    </>
  );
};
