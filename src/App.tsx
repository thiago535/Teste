import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VehicleGrid } from './components/VehicleGrid';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <VehicleGrid />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;