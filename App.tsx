
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Cake, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { CONTACT_INFO } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-bakery-brown text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Cake className="h-8 w-8 text-orange-500" />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold uppercase tracking-tighter">Delhi Bakery</span>
                <span className="text-xs text-orange-500 font-medium">& CAKE SHOP</span>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Freshly baked joy since years. Your favorite local destination for cakes, pastries, and traditional bakery items in Ahmedabad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-stone-400">
              <li><a href="#/" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#/about" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#/contact" className="hover:text-orange-500 transition-colors">Contact & Location</a></li>
              <li><a href="#/contact" className="hover:text-orange-500 transition-colors">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-stone-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-orange-500 transition-colors">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-start">
                <Cake className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                <span>Custom Cake Consultations Available</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6">Opening Hours</h3>
            <ul className="space-y-4 text-sm text-stone-400">
              <li className="flex justify-between">
                <span>Everyday:</span>
                <span className="text-orange-500">{CONTACT_INFO.hours}</span>
              </li>
              <li className="pt-4 border-t border-stone-800 mt-4 italic">
                Fresh stock arrives every morning by 6:30 AM.
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 text-center text-stone-500 text-sm">
          <p>© {new Date().getFullYear()} Delhi Bakery & Cake Shop. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-50">Designed for Freshness & Quality.</p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
};

export default App;
