'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
// Removed unused imports

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-black/90 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-24 px-4 relative">
        {/* Logo grande */}
        <div className="flex items-center cursor-pointer select-none">
          <img src="/images/scritta.webp" alt="Ravasónicos" className="h-36 w-auto" />
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#hero" className="hover:text-primary transition-colors">News</a>
          <a href="#tour" className="hover:text-primary transition-colors">Tour</a>
          <a href="#music" className="hover:text-primary transition-colors">Musica</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contatti</a>
        </div>
        {/* Hamburger mobile */}
        <button
          className="md:hidden flex items-center justify-center h-12 w-12 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Apri menu"
        >
          {isOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
        </button>
        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 border-t border-primary/30 z-40 flex flex-col items-center py-4 space-y-4 md:hidden">
            <a href="#hero" className="text-white hover:text-primary text-lg" onClick={() => setIsOpen(false)}>News</a>
            <a href="#tour" className="text-white hover:text-primary text-lg" onClick={() => setIsOpen(false)}>Tour</a>
            <a href="#music" className="text-white hover:text-primary text-lg" onClick={() => setIsOpen(false)}>Musica</a>
            <a href="#contact" className="text-white hover:text-primary text-lg" onClick={() => setIsOpen(false)}>Contatti</a>
          </div>
        )}
      </nav>
    </header>
  );
}
