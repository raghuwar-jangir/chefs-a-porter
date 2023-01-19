import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import React, { lazy, Suspense } from 'react';
import ChefAbout from './components/ChefAbout';


const HomePage = lazy(() => import('./components/HomePage'))
const SupperClub = lazy(() => import('./components/SupperClub'))
const PriveePage = lazy(() => import('./components/PriveePage'))

const AboutCardComponet = lazy(() => import('./components/AboutCardComponet'))
const SupperClubChaefPage = lazy(() => import('./components/SupperClubChaefPage'))
const SupperClubDetailsPage = lazy(() => import('./components/SupperClubDetailsPage'))
const OurChefsPage = lazy(() => import('./components/OurChefsPage'))


function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<h2> LAZY Lodding...</h2>}>
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route index element={<HomePage />} />
              <Route exact path="privee" element={<PriveePage />} />
              <Route exact path="super-club" element={<SupperClub />} />
              <Route exact path="our-chef" element={<OurChefsPage />} />
              <Route exact path="about-us" element={<AboutCardComponet />} />
              <Route exact path="super-club2" element={<SupperClubChaefPage />} />
              <Route exact path="super-club3" element={<SupperClubDetailsPage />} />
            </Route>

            <Route path='/chef-about' element={<ChefAbout />} />

            {/* //! some nameing issue relates code panding-----> */}

          </Routes>
        </Suspense>
      </Router>
    </div >
  );
}

export default App;
