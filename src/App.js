import './App.css';
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Partenaires from './components/partenaires/partenaires'
import Apropos from './components/apropos/apropos'
import Services from './components/services/services'
import Formations from './components/formations/formations'
import About from './components/about/about'
import Contact from './components/contact/contact';
import Geolocalisation from './components/geolocalisation';
import Footer from './components/footer/footer';
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
