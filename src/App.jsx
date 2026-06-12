import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ModalManager from './components/modals/ModalManager';

import Home from './pages/Home';
import CampusPage from './pages/CampusPage';
import EventsPage from './pages/EventsPage';
import Preloader from './components/Preloader';

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate loading time for the premium entrance animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (modalName) => {
    setActiveModal(modalName);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <div className="bg-mfm-cream text-mfm-ink min-h-screen font-sans antialiased selection:bg-mfm-purple selection:text-white">
        <Navbar openModal={openModal} />
        
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home openModal={openModal} />} />
            <Route path="/campus/:id" element={<CampusPage openModal={openModal} />} />
            <Route path="/events" element={<EventsPage />} />
          </Routes>
        </AnimatePresence>

        <ModalManager activeModal={activeModal} closeModal={closeModal} />
      </div>
    </>
  );
}

export default App;
