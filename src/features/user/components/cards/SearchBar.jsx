const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex items-center border rounded-lg px-3 py-2 bg-orange-50 w-full md:w-1/2">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar producto..."
        className="bg-transparent outline-none flex-1"
      />
      <i className="lucide lucide-search text-gray-500"></i>
    </div>
  );
};

export default SearchBar;
