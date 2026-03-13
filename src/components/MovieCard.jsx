import { FavoriteButton } from "./FavoriteButton";

//var with spred
// export const MovieCard = ({ backdrop_path, original_title, vote_average }) => {
//   return (
//     <div className="relative w-\[200px\] rounded-2xl overflow-hidden bg-neutral-900 shadow-lg hover:scale-101 transition-transform will-change-transform duration-300">
//       <img
//         src={backdrop_path}
//         alt={original_title}
//         width={197}
//         className="w-full h-auto object-cover"
//       />
//       <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2 text-sm text-white font-semibold">
//         IMDb rating: {vote_average}
//       </div>
//       <div className="absolute top-2 right-2 z-10">
//         <FavoriteButton />
//       </div>
//     </div>
//   );
// };

export const MovieCard = ({ movie }) => {
  return (
    <div className="relative w-\[200px\] rounded-2xl overflow-hidden bg-neutral-900 shadow-lg hover:scale-101 transition-transform will-change-transform duration-300">
      <img
        src={movie.backdrop_path}
        alt={movie.original_title}
        width={197}
        className="w-full h-auto object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2 text-sm text-white font-semibold">
        IMDb rating: {movie.vote_average}
      </div>
      <div className="absolute top-2 right-2 z-10">
        <FavoriteButton />
      </div>
    </div>
  );
};
