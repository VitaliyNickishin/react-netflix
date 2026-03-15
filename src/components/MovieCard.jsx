// import { FavoriteButton } from "./FavoriteButton";
import React from "react";

export const MovieCard = React.memo(({ movie }) => {
  return (
    <div className="relative w-\[200px\] rounded-2xl overflow-hidden bg-neutral-900 shadow-lg hover:scale-101 transition-transform will-change-transform duration-300">
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
      {/* <div className="absolute top-2 right-2 z-10">
        <FavoriteButton />
      </div> */}
    </div>
  );
});
