import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';
import { useState } from 'react';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => setIsLoggedIn(false);
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-item">Ana Sayfa</NavLink>
      <NavLink to="/film" className="nav-item">Filmler</NavLink>
      <NavLink to="/dizi" className="nav-item">Diziler</NavLink>
            <NavLink to="/register" className="nav-item">Kayıt ol</NavLink>

        {!isLoggedIn ? 
        <NavLink to="/giris">Giriş Yap</NavLink> :
        <NavLink to="/cikis" onClick={handleLogout}>Çıkış Yap</NavLink>
      }
    </nav>
  );
}

export default Navbar;
