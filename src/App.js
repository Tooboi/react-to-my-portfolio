import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="container-fluid">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
