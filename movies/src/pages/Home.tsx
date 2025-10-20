import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearMovie, clearTv, filmAra, tvAra } from "../slice/HomeSlice";
import type { AppDispatch, RootState } from "../store";
import "../css/Home.css";
import Card from "../components/Card";
import { Link } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import { toast } from "react-toastify";

function Home() {
  const [user, setUser] = useState('');
  useEffect(() => {
    onAuthStateChanged(auth, (userCredential: any) => {
      if (userCredential) {
    
        

        setUser(userCredential.email);

      }
    })
  }, [])
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
      <p> Merhaba {user}!</p>
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
          <Link key={tv.id} to={`/tv/${tv.id}`}>
            <Card
              id={tv.id}
              title={tv.name}
              poster_path={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
              overview={tv.overview}
              popularity={tv.popularity}
              release_date={tv.first_air_date}
              original_language={tv.name}
              genre_ids={tv.genre_ids}
            />
          </Link>
        ))}
      </div>

      <div className="film-container">
        {movieItems.map((film) => (
          <Link key={film.id} to={`/film/${film.id}`}>
            <Card
              id={film.id}
              title={film.title}
              poster_path={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              overview={film.overview}
              popularity={film.popularity}
              release_date={film.release_date}
              original_language={film.original_language}
              genre_ids={film.genre_ids}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home