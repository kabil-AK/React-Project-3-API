import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md shadow-lg josefin-sans-">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="h-48 w-full object-cover"
      />
      <h3 className="text-lg font-bold mt-2">{movie.Title}</h3>
      <p>{movie.Year}</p>

      <br />
      <Link to={`/movie/${movie.imdbID}`} className="text-red-500 mt-2  ">
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;
