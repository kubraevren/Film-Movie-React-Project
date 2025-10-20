import type { Film } from '../types/Types';


function FilmCard({ id, title, poster_path,overview,popularity,release_date,original_language,genre_ids}:Film) {
  return (
    <div className="film-card" key={id}>
      <img
        src={poster_path}
        alt={title}
      />
      <h3>{title}</h3>
    </div>
  );
}

export default FilmCard;
