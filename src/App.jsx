import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import BackToTopButton from './components/BackToTopButton.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Team from './pages/Team.jsx';
import Recognitions from './pages/Recognitions.jsx';
import Clients from './pages/Clients.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import PageLoader from './components/PageLoader.jsx';
import PartnerProfile from './pages/PartnerProfile.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <PageLoader />
      <div className="min-h-screen flex flex-col bg-[color:var(--base)] text-neutral-800">
        <Navbar />
        <ScrollToTop />
        <BackToTopButton />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<Services />} />
            <Route path="/services" element={<Navigate to="/expertise" replace />} />
            <Route path="/team" element={<Team />} />
            <Route path="/recognitions" element={<Recognitions />} />
            <Route path="/events-achievements" element={<Navigate to="/recognitions" replace />} />
            <Route path="/partners/:slug" element={<PartnerProfile />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;