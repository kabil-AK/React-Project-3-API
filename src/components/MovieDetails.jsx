import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const API_KEY = "18608def"; 
const BASE_URL = "http://www.omdbapi.com/";

const fetchMovieDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
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

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
const  navigate = useNavigate();
  useEffect(() => {
    const loadMovie = async () => {
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      }
    };

    loadMovie();
  }, [id]);

  if (error) return <div className="error text-gray-200">{error}</div>;
  if (!movie) return (
    <div className="text-2xl font-bold flex justify-center items-center h-screen gap-3">
      Loading 
    
      
      <AiOutlineLoading3Quarters />
    </div>
  );

  return (
    <div className="movie-details p-44 bg-gradient-to-r from-yellow-500 to-green-500 josefin-sans- flex justify-around items-center h-screen  gap-10 ">
      <div>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="h-screen w-screen  object-contain p-3 "
        />
      </div>
      <div className="">
        <h2 className="text-2xl font-bold mt-4">
          {movie.Title} ({movie.Year})
        </h2>

        <p>
          <strong>Genre:</strong>
          <span className="text-white">{movie.Genre}.</span>
        </p>

        <p>
          <strong>Plot:</strong>{" "}
          <span className="text-white ">{movie.Plot}.</span>
        </p>

        <p>
          <strong>Director:</strong>{" "}
          <span className="text-white ">{movie.Director}.</span>
        </p>

        <p>
          <strong>Writer:</strong>{" "}
          <span className="text-white ">{movie.Writer}.</span>
        </p>

        <p>
          <strong>Awards:</strong>{" "}
          <span className="text-white ">{movie.Awards}.</span>
        </p>

        <p>
          <strong>Actors:</strong>{" "}
          <span className="text-white ">{movie.Actors}.</span>
        </p>

        <p>
          <strong>Rating:</strong>{" "}
          <span className="text-white ">{movie.imdbRating}/10</span>
        </p>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="bg-red-500 text-white p-2 px-5 rounded-md mt-4 absolute top-1 right-3"
        type="button"
      >
        Close
      </button>
    </div>
  );
};

export default MovieDetails;
