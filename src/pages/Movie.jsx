import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Error fetching movie:', error));
  }, [id]);

  if (!movie) {
    return (
      <div>
        <NavBar />
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      <div className="genres">
      {movie.genres && movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
    </div>
  );
};

export default Movie;