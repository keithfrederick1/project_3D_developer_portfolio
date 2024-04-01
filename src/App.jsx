import { BrowserRouter } from "react-router-dom";
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Earth from '../public/Earth.jsx'
import './App.css'

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
    {/* <Canvas>
      <ambientLight />
      <OrbitControls />
      <Suspense fallback={null}>
          <Earth/>
      </Suspense>
    </Canvas> */}
      <div className='relative z-0 bg-primary'>
        <div className=' bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
