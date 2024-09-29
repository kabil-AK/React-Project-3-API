import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    
  );
};

export default App;
