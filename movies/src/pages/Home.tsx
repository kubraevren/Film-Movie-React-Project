import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearMovie, clearTv, filmAra, tvAra } from "../slice/HomeSlice";
import type { AppDispatch, RootState } from "../store";
import "../css/Home.css";
function Home() {
  const [tv, setTv] = useState("");
  const [movie, setMovie] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const { tvItems, movieItems } = useSelector((state: RootState) => state.home);

  const handleTvSearch = () => {
    if (tv.trim()) dispatch(clearMovie()); dispatch(tvAra(tv));

  }
  const handleMovieSearch = () => {
    if (movie.trim()) dispatch(clearTv()); dispatch(filmAra(movie));
  }
  return (
    <div>
  <div className="input-box">
        <div>
        <h4> Aramak istediğiniz diziyi girin:</h4>
        <input type="text"
        className="input"
          id="diziInput"
          onChange={(e) => setTv(e.target.value)}
          value={tv}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleTvSearch();
            }
          }}
        ></input>
        <button onClick={handleTvSearch} className="btn">Gönder</button>
      </div>
      <div>
        <h4> Aramak istediğiniz filmi girin:</h4>
        <input type="text"
        className="input"
          id="filmInput"
          onChange={(e) => setMovie(e.target.value)}
          value={movie}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleMovieSearch();
            }
          }}
        />
        <button onClick={handleMovieSearch} className="btn">Gönder</button>
      </div>
  </div>

      <div className="film-container">
        {tvItems.map((tv) => (
          <div key={tv.id} className="film-card">
            <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt={tv.name} />
            <h3>{tv.name}</h3>

          </div>
        ))
        }
      </div>

      <div className="film-container">
        {movieItems.map((movie) => (
          <div key={movie.id} className="film-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home