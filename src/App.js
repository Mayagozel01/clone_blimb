import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recom from './pages/Recommendations';

function App(){
  return(
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recom" element={<Recom />} />
    </Routes>
  </BrowserRouter>
  )
}
export default App;