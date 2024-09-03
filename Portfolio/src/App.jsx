import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const Home = lazy(() => import('./Pages/Home'));

const Skills = lazy(() => import('./Pages/Skills'));
const Contact = lazy(() => import('./Pages/Contact'));
const Education = lazy(() => import('./Pages/Education'));
const Projects = lazy(() => import('./Pages/Projects'));

function App() {
  return (
    <div className='w-full h-full font-gilroy'>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contacts' element={<Contact />} />
          <Route path='/education' element={<Education />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
