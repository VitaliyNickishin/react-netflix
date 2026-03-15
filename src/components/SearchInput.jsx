export const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="search"
      value={value}
      onChange={onChange}
      placeholder="Search..."
      className="border border-white/15 px-2 py-1 rounded outline-0"
    />
  );
};
