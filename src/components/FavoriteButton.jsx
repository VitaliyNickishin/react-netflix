import { useState } from "react";

export const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <button
      className="p-0 bg-transparent"
      onClick={() => setIsFavorite(!isFavorite)}
    >
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
};
