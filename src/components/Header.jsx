import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import Logo from './Logo';
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
          <a href="#top" style={{ display: 'inline-flex', alignItems: 'center' }} title="Accueil — Joel Boton">
            <Logo showText={false} size="navbar" />
          </a>

          <div className="nav-links">
            <a href="#work">Créations</a>
            <a href="#formations">Formations</a>
            <a href="#process">Savoir-faire</a>
            <a href="#about">À propos</a>
            <a href="#pricing">Tarifs</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-right">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-solid btn-whatsapp-header"
              title="Discuter directement sur WhatsApp"
            >
              <MessageCircle size={17} />
              <span className="btn-whatsapp-text">WhatsApp Direct</span>
            </a>
            <button 
              className="menu-btn" 
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <Menu size={22} />
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
          pointerEvents: mobileMenuOpen ? 'all' : 'none',
          padding: '24px 20px',
          overflowY: 'auto'
        }}
      >
        <button 
          className="close-btn" 
          onClick={closeMenu}
          aria-label="Fermer le menu"
        >
          <X size={26} />
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%', maxWidth: '320px', margin: 'auto 0' }}>
          <div style={{ marginBottom: '8px' }}>
            <Logo showText={true} size="large" />
          </div>
          <div style={{ width: '40px', height: '2px', background: 'var(--border)', marginBottom: '8px' }}></div>

          <a href="#top" onClick={closeMenu} className="mob-link">Accueil</a>
          <a href="#work" onClick={closeMenu} className="mob-link">Créations</a>
          <a href="#formations" onClick={closeMenu} className="mob-link">Formations</a>
          <a href="#process" onClick={closeMenu} className="mob-link">Savoir-faire</a>
          <a href="#about" onClick={closeMenu} className="mob-link">À propos</a>
          <a href="#pricing" onClick={closeMenu} className="mob-link">Tarifs</a>
          <a href="#faq" onClick={closeMenu} className="mob-link">FAQ</a>
          <a href="#contact" onClick={closeMenu} className="mob-link">Contact</a>
          
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-solid"
            style={{ width: '100%', justifyContent: 'center', marginTop: '16px', padding: '14px 20px', fontSize: '15px' }}
          >
            <MessageCircle size={18} />
            <span>Échanger sur WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
