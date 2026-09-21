import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { artisanData } from '../data/portfolioData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  const whatsappUrl = `https://wa.me/${artisanData.whatsappNumber}?text=${encodeURIComponent(
    "Bonjour Joel Boton, j'ai vu votre portfolio et j'aimerais échanger avec vous au sujet de vos pagnes Kanvô."
  )}`;

  return (
    <>
      <header>
        <nav className="wrap">
          <a href="#top" className="logo">
            JOEL BOTON
          </a>

          <div className="nav-links">
            <a href="#work">Créations</a>
            <a href="#formations">Formations</a>
            <a href="#process">Savoir-faire</a>
            <a href="#about">À propos</a>
            <a href="#pricing">Tarifs</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-right">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-solid"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Direct</span>
            </a>
            <button 
              className="menu-btn" 
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div 
        id="mobileMenu" 
        style={{ 
          opacity: mobileMenuOpen ? 1 : 0, 
          visibility: mobileMenuOpen ? 'visible' : 'hidden',
          pointerEvents: mobileMenuOpen ? 'all' : 'none'
        }}
      >
        <button 
          className="close-btn" 
          onClick={closeMenu}
          aria-label="Fermer le menu"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <X size={28} />
        </button>
        <a href="#top" onClick={closeMenu}>Accueil</a>
        <a href="#work" onClick={closeMenu}>Créations</a>
        <a href="#formations" onClick={closeMenu}>Formations</a>
        <a href="#process" onClick={closeMenu}>Savoir-faire</a>
        <a href="#about" onClick={closeMenu}>À propos</a>
        <a href="#pricing" onClick={closeMenu}>Tarifs</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-solid"
          style={{ marginTop: '20px' }}
        >
          <MessageCircle size={18} />
          <span>Contacter sur WhatsApp</span>
        </a>
      </div>
    </>
  );
}
