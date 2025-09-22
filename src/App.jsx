import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/common/header";
import Home from './pages/Home';
import Aboute from './pages/Aboute';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { Vortex } from './bganimation/animation';

function App() {

  return (
    
     <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={100}
        baseHue={120}
        className="h-screen ">
    <BrowserRouter>
       
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboute' element={<Aboute />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
      </Vortex>
  );
}

export default App;
