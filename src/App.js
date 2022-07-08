import Nav from "./Components/Nav";
import Home from './Components/Home';
import Compose from "./Components/Compose";
import About from './Components/About';
import Footer from "./Components/Footer";
import { Routes, Route } from 'react-router-dom';

function App() {



  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compose" element={<Compose />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
