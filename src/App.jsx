import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GetQuote from './pages/GetQuote';
import LiveChat from './pages/LiveChat';

function App() {
  return (
    <Router>
      <div className="font-sans text-darkNavy overflow-x-hidden bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<GetQuote />} />
          <Route path="/chat" element={<LiveChat />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
