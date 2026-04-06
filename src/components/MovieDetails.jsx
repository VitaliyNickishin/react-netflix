import { useParams, useLocation } from "react-router-dom";

export const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log("location:", location);

  const movieFromState = location.state?.movie;

  const movieDetails = movieFromState;

  if (!movieDetails) return <p>Movie not found</p>;

  return (
    <div className="p-3 sm:p-5">
      <div>Card of film #{id} </div>
      <div className="flex gap-4 flex-col sm:flex-row">
        <img
          src={movieDetails.poster_path}
          alt={movieDetails.original_title}
          width={197}
          loading="lazy"
          className="h-auto rounded-2xl m-auto sm:m-0"
        />
        <div className="flex justify-between flex-col">
          <p>{movieDetails.overview}</p>
          <div className="mt-2">
            <p>Popularity: {movieDetails.popularity}</p>
            <p>⭐ {movieDetails.vote_average}</p>
            <p>Release date: {movieDetails.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
