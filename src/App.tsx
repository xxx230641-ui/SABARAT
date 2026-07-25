import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import Splash from './components/Splash';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import JoinUs from './pages/JoinUs';
import FollowUs from './pages/FollowUs';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/follow" element={<FollowUs />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  // When splash is done, ensure scrolling is at top
  useEffect(() => {
    if (!showSplash) {
      window.scrollTo(0, 0);
    }
  }, [showSplash]);

  return (
    <AppProvider>
      <div className="relative min-h-screen text-slate-900 dark:text-white font-sans overflow-x-hidden">
        {showSplash ? (
          <Splash onComplete={() => setShowSplash(false)} />
        ) : (
          <Router>
            <Background3D />
            <div className="relative z-10 flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow flex flex-col relative z-20">
                <AnimatedRoutes />
              </main>
              <Footer />
            </div>
          </Router>
        )}
      </div>
    </AppProvider>
  );
}
