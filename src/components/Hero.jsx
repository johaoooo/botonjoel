import React from 'react';
import { artisanData } from '../data/portfolioData';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${artisanData.whatsappNumber}?text=${encodeURIComponent(
    "Bonjour Joel, je souhaite commander une pièce en Kanvô ou avoir des renseignements."
  )}`;

  return (
    <div className="wrap hero" id="top">
      <div>
        <div className="eyebrow">Maître Artisan Textile Béninois</div>
        <h1 className="hero-name disp">
          JOEL<br />
          <span className="l2">BOTON</span>
        </h1>
        <div className="hero-role">
          <span>Tissage de Kanvô</span>
          <span>◆</span>
          <span>Porto-Novo</span>
          <span>◆</span>
          <span>Formateur</span>
        </div>
        <p>
          Bandes tissées d'exception. Fibres de coton noble. Motifs ancestraux du Bénin. 
          Je transforme la matière brute en <b>pièces uniques et durables</b>, conçues au métier traditionnel.
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn-solid">
            Voir mes créations →
          </a>
          <a href="#formations" className="btn-line">
            Formations de tissage
          </a>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-line"
            style={{ borderColor: 'var(--violet)' }}
          >
            Commander 💬
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="h-card">
          <div className="kanvo-pattern-bg"></div>
          
          {/* Decorative Kanvo Weave SVG Graphic */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.85 }}>
            <svg width="220" height="260" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Vertical warp threads */}
              {[...Array(12)].map((_, i) => (
                <line key={`warp-${i}`} x1={20 + i * 14} y1="10" x2={20 + i * 14} y2="230" stroke="rgba(197, 152, 255, 0.25)" strokeWidth="1.5" />
              ))}
              {/* Horizontal weft woven bands */}
              <rect x="25" y="30" width="150" height="24" rx="4" fill="rgba(146, 56, 245, 0.45)" stroke="var(--violet-2)" strokeWidth="1.2" />
              <rect x="25" y="66" width="150" height="18" rx="3" fill="rgba(38, 25, 52, 0.7)" stroke="rgba(245, 243, 240, 0.2)" strokeWidth="1" />
              <rect x="25" y="96" width="150" height="34" rx="4" fill="rgba(146, 56, 245, 0.6)" stroke="var(--violet)" strokeWidth="1.5" />
              {/* Geometrical Kanvo Diamond Motifs */}
              <polygon points="100,100 115,113 100,126 85,113" fill="#F5F3F0" opacity="0.9" />
              <polygon points="60,103 70,113 60,123 50,113" fill="var(--violet-2)" opacity="0.8" />
              <polygon points="140,103 150,113 140,123 130,113" fill="var(--violet-2)" opacity="0.8" />
              
              <rect x="25" y="142" width="150" height="18" rx="3" fill="rgba(38, 25, 52, 0.7)" stroke="rgba(245, 243, 240, 0.2)" strokeWidth="1" />
              <rect x="25" y="172" width="150" height="28" rx="4" fill="rgba(146, 56, 245, 0.4)" stroke="var(--violet-2)" strokeWidth="1.2" />
            </svg>
          </div>

          <div className="badge-new">
            <div className="badge-pill">
              Kanvô Royal <span className="badge-tag" style={{ marginLeft: '6px' }}>PIÈCE UNIQUE</span>
            </div>
          </div>

          <div className="overline">
            <div className="tag">Collection 2025 — Atelier Kandévié</div>
            <h4>Pagne « Dignité d'Améthyste »</h4>
            <div className="yr">100% Coton peigné béninois • Tissé main</div>
          </div>
          <div className="bar"></div>
        </div>

        <div className="floating-count">
          🧵 {artisanData.creationsCount} pièces d'exception tissées
        </div>
      </div>
    </div>
  );
}
