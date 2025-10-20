import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Films from '../pages/Films';
import Dizi from '../pages/Dizi';
import Detay from '../pages/Details';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ProtectedRoute from '../components/ProtectedRoute';

function RouterConfig() {
  return (
    <Routes>
      <Route path="/giris" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home/>} />
      <Route path="/film" element={<ProtectedRoute>
        <Films />
      </ProtectedRoute>} />
      <Route path="/dizi" element={<ProtectedRoute>
        <Dizi />
      </ProtectedRoute>} />
      <Route path="/film/:id" element={<ProtectedRoute>
        <Detay type="film" />
      </ProtectedRoute>} />
      <Route path="/tv/:id" element={<ProtectedRoute>
        <Detay type="tv" />
      </ProtectedRoute>} />


    </Routes>
  );
}

export default RouterConfig;
