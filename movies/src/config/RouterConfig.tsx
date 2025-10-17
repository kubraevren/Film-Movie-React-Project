import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Films from '../pages/Films';
import Dizi from '../pages/Dizi';
import Detay from '../pages/Details';
import Login from '../pages/Login';
import { useState } from 'react';
import Register from '../pages/Register';

function RouterConfig() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/film" element={<Films />} />
      <Route path="/dizi" element={<Dizi />} />
      <Route path="/film/:id" element={<Detay type="film" />} />
      <Route path="/tv/:id" element={<Detay type="tv" />} />
      <Route path="/giris" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />

      <Route path="/cikis" element={<Home />} /> {/* logout sonrası yönlendirme */}
    </Routes>
  );
}

export default RouterConfig;
