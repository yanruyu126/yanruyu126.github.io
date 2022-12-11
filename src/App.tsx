import React, { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main';
import InConstruction from './pages/InConstruction';
import './static/css/main.scss'; // All of our styles

const Index = lazy(() => import('./pages/Index'));
const Projects = lazy(() => import('./pages/Projects'));
const Misc = lazy(() => import('./pages/Misc'));


const { PUBLIC_URL } = process.env;

function App() {
  return (
    <HashRouter basename={ PUBLIC_URL }>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/misc" element={<Misc/>} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
