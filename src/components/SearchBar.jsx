import { useState } from "react";
import { BiSolidSearchAlt2 } from "react-icons/bi";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="flex justify-center items-center p-4 px-2  ">
      <form onSubmit={handleSearch} className="flex m-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          className="px-44 text-2xl  p-2 border border-gray-300 rounded-l-lg hover:bg-gray-50"
        />
        <button
          type="submit"
          className="bg-blue-900 hover:bg-blue-600 text-white p-2 px-5 rounded-r-lg  flex items-center gap-2 "
        >
          <BiSolidSearchAlt2 />
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
