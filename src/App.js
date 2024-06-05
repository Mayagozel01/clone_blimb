import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recom from './pages/Recommendations';

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recom" element={<Recom />} />
    </Routes>
  </BrowserRouter>
  )
}
export default App;