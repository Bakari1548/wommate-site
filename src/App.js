import './App.css';
import Header from './components/header'
import Hero from './components/hero'
import Partenaires from './components/partenaires'
import Apropos from './components/apropos'
import Services from './components/services'
import Formations from './components/formations'
import About from './components/about'
import Contact from './components/contact';
import Geolocalisation from './components/geolocalisation';
import Footer from './components/footer';
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos'
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
    <Header />
    <main className='w-full'>
      <Hero />
      <Partenaires />
      <Apropos />
      <Services />
      <Formations />
      <About />
      <Contact />
      <Geolocalisation />
      <Footer />
    </main>
    </>

  );
}

export default App;
