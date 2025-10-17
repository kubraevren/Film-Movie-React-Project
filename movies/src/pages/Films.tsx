import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFilms } from '../slice/FilmSlice';
import type { RootState, AppDispatch } from '../store';
import '../css/Films.css'
import { Link } from 'react-router-dom';
function Films() {
  const dispatch = useDispatch<AppDispatch>();
  const { items = [] } = useSelector((state: RootState) => state.film);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  return (
  <>
  <h3 className='baslik'>Popüler Filmler</h3>
    <div className="film-container">
  {items.map((film) => (
    <Link key={film.id} to={`/film/${film.id}`} className="film-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
        alt={film.title}
      />
      <h3>{film.title}</h3>
    </Link>
  ))}
</div>
</>
  );
}

export default Films;
