import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Services from './components/Services';
import WhyClients from './components/WhyClients';
import WhyWorkers from './components/WhyWorkers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Services />
      <WhyClients />
      <WhyWorkers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
