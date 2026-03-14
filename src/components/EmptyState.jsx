export const EmptyState = () => {
  return (
    <div className="text-center py-10 text-gray-400">
      <p className="text-xl">🎬 No movies found</p>
      <p className="text-sm mt-2">Try another search</p>
      {/* @todo btn clear search */}
    </div>
  );
};
