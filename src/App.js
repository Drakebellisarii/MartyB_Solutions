import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Network from './components/sections/Network';
import Process from './components/sections/Process';
import ClientShowcase from './components/sections/ClientShowcase';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Network />
      <Process />
      <ClientShowcase />
      <Contact />
    </Layout>
  );
}

export default App;