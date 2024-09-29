const FilterDropdown = ({ onFilter }) => {
  const handleFilterChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className="flex items-center justify-center">
      <select
        onChange={handleFilterChange}
        className="border p-2 text-1xl bg-black  text-white  rounded-lg  hover:bg-gray-700"
      >
        <option value="">All</option>
        <option value="movie">Movies</option>
        <option value="series">Series</option>
        <option value="episode">Episodes</option>
      </select>
    </div>
  );
};

export default FilterDropdown;
