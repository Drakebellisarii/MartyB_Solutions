import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Network from './components/sections/Network';
import Process from './components/sections/Process';
import ClientShowcase from './components/sections/ClientShowcase';
import Testimonials from './components/sections/Testimonials';
import ContactPage from './pages/ContactPage';

function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Network />
      <Process />
      <ClientShowcase />
      <Testimonials />
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
