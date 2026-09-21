import React from 'react';
import { artisanData } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="wrap">
      <div className="logo" style={{ fontSize: '18px' }}>
        JOEL BOTON
      </div>

      <div className="foot-small">
        © {currentYear} {artisanData.name} — Maître Tisserand de Kanvô • {artisanData.city}
      </div>

      <div className="foot-links">
        <a href="#work">Créations</a>
        <a href="#formations">Formations</a>
        <a href="#about">À propos</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
}
