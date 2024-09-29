import { useState, useEffect } from "react";
import MovieCard from ".//MovieCard";
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropDown";
import { TbActivityHeartbeat } from "react-icons/tb";


const API_KEY = "18608def"; 
const BASE_URL = " http://www.omdbapi.com/";

const fetchMovies = async (query, page = 1, type = "") => {
  try {
    const response = await fetch(
      `${BASE_URL}?s=${query}&page=${page}&type=${type}&apikey=${API_KEY}`
    );
    const data = await response.json();
    if (data.Response === "True") {
      return data;
    } else {
      throw new Error(data.Error);
    }
  } catch (error) {
    throw new Error("No result found:(");
  }
};

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMovies(query, page, filter);
        setMovies((prevMovies) => [...prevMovies, ...data.Search]);
      } catch (err) {
        setError(err.message);
      }
    };

    if (query) {
      loadMovies();
    }
  }, [query, page, filter]);

  const handleSearch = (query) => {
    setQuery(query);
    setPage(1);
    setMovies([]);
  };

  const handleFilterChange = (type) => {
    setFilter(type);
    setPage(1);
    setMovies([]);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="bg-gradient-to-r from-yellow-500 to-green-400  josefin-sans- max-h-fit min-h-screen ">
      <h1 className="flex justify-center items-center p-10 text-5xl font-bold py-20 ">
        <TbActivityHeartbeat /> MOVIES.IN
      </h1>
      <div className="flex justify-center items-center ">
        <SearchBar onSearch={handleSearch} />
        <FilterDropdown onFilter={handleFilterChange} />
      </div>
      {error && <div className=" text-gray-200">{error}</div>}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      <div className="flex  justify-center items-center  ">
        {movies.length > 0 && (
          <button
            onClick={loadMore}
            className="bg-black text-white py-2 px-4 mt-10 rounded-lg border-collapse hover:bg-gray-700  flex items-center gap-3 transition duration-150 ease-in-out ..."
          >
            Load More
          </button>
        )}
      </div>
      <div className="text-right">
        {movies.length > 0 && (
          <p className="text-black font-bold  ">
            Watch MOVIES.IN ❤️ Just relax 're stress...
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
