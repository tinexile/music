
import './App.css';
import Entertainment from './Components/Entertainment';
import Giftcard from './Components/Giftcard';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Note from './Components/Note';
import Songstream from './Components/Songstream';

function App() {
  return (
   <>
   <Navbar />
   <Hero />
   <Songstream />
   <Note />
   <Entertainment />
   <Giftcard />
   </>
  );
}

export default App;
