import { useEffect, useState } from "react";

export const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    console.log("added to favorite");
  }, [isFavorite]);

  return (
    <button
      className="p-0 bg-transparent"
      onClick={() => setIsFavorite(!isFavorite)}
    >
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
};
