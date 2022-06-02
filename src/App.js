import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Medicine from './pages/Medicine';
function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<Home />} />
      <Route path="/medicine" element={<Medicine />} />
    </Routes>
  );
}

export default App;
