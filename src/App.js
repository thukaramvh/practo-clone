import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Medicine from './pages/Medicine';
function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<Home />} />
      <Route path="/medicine" element={<Medicine />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
