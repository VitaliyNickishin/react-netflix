import { EmptyState } from "./EmptyState";
import { MovieCard } from "./MovieCard";

const MoviesList = ({ movies }) => {
  if (!movies.length) {
    return <EmptyState />;
  }
  return (
    <div>
      <h1 className="mb-3">Movies List</h1>
      <ul className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <li key={movie.movie_id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
