import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchTv } from "../slice/TvSlice";
import type { AppDispatch } from "../store";
import type { RootState } from "../store";
import "../css/Dizi.css";
import { Link } from "react-router-dom";
import Card from "../components/Card";

function Dizi() {

  const { items = [] } = useSelector((state: RootState) => state.tv);


  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchTv());
  }, [dispatch]);

  return (
    <div>
      <h3 className='baslik'>Popüler Diziler</h3>
      <div className="film-container">
        {items.map((tv) => (
          <Link key={tv.id} to={`/tv/${tv.id}`}>
            <Card
              id={tv.id}
              title={tv.overview}
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


    </div>
  )
}

export default Dizi