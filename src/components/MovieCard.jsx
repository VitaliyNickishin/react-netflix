import { FavoriteButton } from "./FavoriteButton";
import { Modal } from "./ui/Modal";
import { memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";

export const MovieCard = memo(({ movie }) => {
  // console.log("render card", movie.id);
  const [isOpenModalFilmInfo, setIsOpenModalFilmInfo] = useState(false);

  const openModalFilmInfo = useCallback(() => {
    setIsOpenModalFilmInfo(true);
  }, []);

  return (
    <div className="relative w-\[200px\] rounded-2xl overflow-hidden bg-neutral-900 shadow-lg hover:scale-101 transition-transform will-change-transform duration-300">
      {isOpenModalFilmInfo && (
        <Modal
          onClose={() => {
            setIsOpenModalFilmInfo(false);
          }}
        >
          <div className="flex gap-4 flex-col sm:flex-row">
            <img
              src={movie.poster_path}
              alt={movie.original_title}
              width={197}
              loading="lazy"
              className="h-auto rounded-2xl m-auto sm:m-0"
            />
            <div className="flex justify-between flex-col">
              <p>{movie.overview}</p>
              <div className="mt-2">
                <p>Popularity: {movie.popularity}</p>
                <p>⭐ {movie.vote_average}</p>
                <p>Release date: {movie.release_date}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <img
        src={movie.backdrop_path}
        alt={movie.original_title}
        width={197}
        loading="lazy"
        className="w-full h-auto object-cover"
      />
      <div className="flex justify-between gap-1 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2 text-sm text-white font-semibold">
        <span>{movie.original_title}</span>
        <span className="shrink-0">IMDb: {movie.vote_average}</span>
      </div>
      <div className="absolute top-2 right-2 z-10">
        <FavoriteButton />
      </div>
      <button
        onClick={openModalFilmInfo}
        className="absolute top-2 left-2 z-10"
      >
        <span>🎬</span>
      </button>
      <Link
        to={`/movie/${movie.movie_id}`}
        state={{ movie }}
        className="btn absolute top-1/2 left-1/2 -translate-1/2"
      >
        🔗
      </Link>
    </div>
  );
});
