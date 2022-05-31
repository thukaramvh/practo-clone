import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
    </Routes>
  );
}

export default App;
