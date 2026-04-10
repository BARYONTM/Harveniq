import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './index.css';

// Components
import Layout from './components/Layout';
// Theme Context handled in main.jsx

// Pages
import PortalHome from './pages/PortalHome';
import Home from './pages/Home';
import CncMachining from './pages/CncMachining';
import Solutions from './pages/Solutions';
import Process from './pages/Process';
import Quote from './pages/Quote';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Legal from './pages/Legal';
import ComingSoon from './pages/ComingSoon';
import SoftwareHome from './pages/software/SoftwareHome';
import SystemsHome from './pages/systems/SystemsHome';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* Umbrella Brand Master Portal (Kök Sayfa) */}
          <Route path="/" element={<PortalHome />} />
          
          {/* Harveniq CNC */}
          <Route path="/cnc" element={<Home />} />
          <Route path="/cnc-isleme" element={<Navigate to="/cnc" replace />} />
          
          {/* Software Modülü */}
          <Route path="/software" element={<SoftwareHome />} />
          
          {/* Systems Modülü */}
          <Route path="/systems" element={<SystemsHome />} />

          {/* Diğer Ortak ve Kök Sayfalar */}
          <Route path="/endustriyel-cozumler" element={<Solutions />} />
          <Route path="/proses" element={<Process />} />
          <Route path="/teklif-al" element={<Quote />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/hakkimizda" element={<AboutUs />} />
          <Route path="/projeler" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* Legal Pages */}
          <Route path="/kvkk" element={<Legal type="kvkk" />} />
          <Route path="/cerez" element={<Legal type="cerez" />} />
          <Route path="/kullanim-sartlari" element={<Legal type="kullanim" />} />
          
          {/* 404 Fallback */}
          <Route path="*" element={
            <div className="container text-center" style={{paddingTop: "200px", paddingBottom: "100px"}}>
              <h1 style={{fontSize: "4rem", color: "var(--accent-primary)", marginBottom: "24px"}}>404</h1>
              <h2 className="mb-8">Sayfa Bulunamadı</h2>
              <p className="text-secondary mb-8">Aradığınız sayfaya ulaşılamıyor veya kaldırılmış olabilir.</p>
              <a href="/" className="btn btn-primary">Ana Sayfaya Dön</a>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
