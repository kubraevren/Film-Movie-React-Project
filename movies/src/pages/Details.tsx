import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import type { Film, Dizi } from "../types/Types";
import "../css/Detay.css";

type Props = {
  type: "film" | "tv";
};

function Detay({ type }: Props) {
  const { id } = useParams<{ id: string }>();

  // Redux state'ten verileri çek
  const { tvItems, movieItems } = useSelector((state: RootState) => state.home);
  const { items: popularFilms = [] } = useSelector((state: RootState) => state.film);
  const { items: popularTv = [] } = useSelector((state: RootState) => state.tv);

  const allFilms: Film[] = [...movieItems, ...popularFilms];
  const allTv: Dizi[] = [...tvItems, ...popularTv];

  const selected = (type === "film"
    ? allFilms.find((f) => f.id.toString() === id)
    : allTv.find((t) => t.id.toString() === id)
  ) as Film | Dizi | undefined;

  if (!selected) return <div className="detay-loading">Yükleniyor...</div>;

  // Başlık ve tarih bilgisi
  const title = "title" in selected ? selected.title : selected.name;
  const date = "release_date" in selected ? selected.release_date : selected.first_air_date;

  // Arka plan resmi: backend veya TMDB kontrolü
  const bgImage = selected.poster_path?.startsWith("/images")
    ? `https://image.tmdb.org/t/p/w500${selected.poster_path}`
    : `https://image.tmdb.org/t/p/original${selected.poster_path}`;

  // Poster resmi: backend veya TMDB kontrolü
  const posterImage = selected.poster_path?.startsWith("/images")
    ?`https://image.tmdb.org/t/p/w500${selected.poster_path}`
    : `https://image.tmdb.org/t/p/w500${selected.poster_path}`;

  return (
    <div className="detay-root" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="detay-overlay"></div>

      <div className="detay-container">
        <div className="detay-poster-wrap">
          <img src={posterImage} alt={title} className="detay-poster" />
          <span className="detay-badge" style={{ marginTop: "80px" }}>
            {type === "film" ? "🎬 Film" : "📺 Dizi"}
          </span>
        </div>

        <div className="detay-info">
          <h1 className="detay-title">{title}</h1>
          <p className="detay-overview">{selected.overview}</p>

          <div className="detay-meta">
            <p>
              <strong>Popülerlik:</strong> {selected.popularity}
            </p>
            <p>
              <strong>Vizyon:</strong> {date}
            </p>
            <p>
              <strong>Tür ID'leri:</strong> {selected.genre_ids.join(", ") || "Bilinmiyor"}
            </p>
          </div>

          <div className="detay-actions">
            <button className="btn primary">İzle</button>
            <button className="btn ghost">Listeye Ekle</button>
          </div>
        </div>
      </div>

      <div className="detay-gradient-bottom"></div>
    </div>
  );
}

export default Detay;
