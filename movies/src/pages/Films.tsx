import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFilms } from '../slice/FilmSlice';
import type { RootState, AppDispatch } from '../store';
import '../css/Films.css';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

function Films() {
  const dispatch = useDispatch<AppDispatch>();
  const { items = [] } = useSelector((state: RootState) => state.film);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  const getPosterUrl = (path: string | undefined) =>
    path ? `https://image.tmdb.org/t/p/w500${path}` : '';

  return (
    <>
      <h3 className="baslik">Popüler Filmler</h3>
      <div className="film-container">
        {items.map((film) => (
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
    </>
  );
}

export default Films;
