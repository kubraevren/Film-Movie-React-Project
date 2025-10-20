import { NavLink, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';
import { signOut, type Auth } from 'firebase/auth';
import { auth } from '../Firebase';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';

function Navbar() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth); // Kullanıcı oturumu dinleniyor

  const logout = async () => {
    toast.success("Çıkış yapılıyor.");
    setTimeout(() => {
      signOut(auth);
      navigate("/register");
    }, 2500);


  }
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-item">Ana Sayfa</NavLink>

      {user && (
        <>
          <NavLink to="/film" className="nav-item">Filmler</NavLink>
          <NavLink to="/dizi" className="nav-item">Diziler</NavLink>
        </>
      )}
      {!user && (
        <>
          <NavLink to="/register" className="nav-item">Kayıt Ol</NavLink>
          <NavLink to="/giris" className="nav-item">Giriş Yap</NavLink>
        </>
      )}
      {/* Kullanıcı giriş yaptıysa çıkış butonunu göster */}
      {user && (
        <NavLink to="/cikis" onClick={logout} className="nav-item">Çıkış Yap</NavLink>
      )}


    </nav>
  );
}

export default Navbar;
