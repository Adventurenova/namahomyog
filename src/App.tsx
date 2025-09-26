import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import SessionFlow from './components/SessionFlow';
import Offerings from './components/Offerings';
import Lifestyle from './components/Lifestyle';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Header />
      <Hero />
      <About />
      <Classes />
      <SessionFlow />
      <Offerings />
      <Lifestyle />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;