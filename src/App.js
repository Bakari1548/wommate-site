import './App.css';
import Header from './components/header'
import Hero from './components/hero'
import Partenaires from './components/partenaires';
import Apropos from './components/apropos'
import Services from './components/services'

function App() {
  return (
    <>
    <Header />
    <main className='w-full'>
      <Hero />
      <Partenaires />
      <Apropos />
      <Services />
    </main>
    </>

  );
}

export default App;
