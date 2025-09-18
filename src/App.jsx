import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/common/header";
import Home from './pages/Home';
import Aboute from './pages/Aboute';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import GridMotion from './pages/Animation';

function App() {

  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboute' element={<Aboute />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
