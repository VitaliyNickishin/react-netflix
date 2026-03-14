import { useState } from "react";
import MoviesList from "./components/MoviesList";
import { useMovies } from "./hooks/useMovies";
import { Spinner } from "./components/Spinner";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { movies, isLoading, error } = useMovies();

  const filteredMovies = movies.filter((movie) =>
    movie.original_title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-5">
      <header className="mb-10 flex items-center justify-between">
        <img src="/logo.svg" alt="Netflix" className="h-8 w-auto" />
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Search..."
          className="border border-white/15 px-2 py-1 rounded outline-0"
        />
      </header>
      <main>
        {isLoading && <Spinner />}
        {error && <p>Error: {error}</p>}
        {!isLoading && !error && <MoviesList movies={filteredMovies} />}
      </main>
    </div>
  );
}

export default App;
