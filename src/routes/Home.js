import { useEffect, useState } from 'react';
import '../scss/home.scss';
import Movie from '../components/Movie';

function Home() {
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(9);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=${rating}&sort_by=year`
      )).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  const handleChangeRating = (e) => {
    setRating(Number(e.target.value));
  }
  useEffect(() => {
    getMovies();
  }, [rating]);
  return (
    <div>
      {
        loading ?
          <h1 className="loading">Loading...</h1> :
          <div className="main-content">
            <div className="select-wrap">
              <label for="selectRating">Rating</label>
              <select
                id="selectRating"
                onChange={handleChangeRating}
                defaultValue={rating}
                className="select-rating"
              >
                <option value="5">★</option>
                <option value="6">★★</option>
                <option value="7">★★★</option>
                <option value="8">★★★★</option>
                <option value="9">★★★★★</option>
              </select>
            </div>
            <div className="movie-list">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title_long}
                  year={movie.year}
                  genres={movie.genres}
                />
              ))}
            </div>
          </div>
      }
    </div>
  );
}

export default Home;