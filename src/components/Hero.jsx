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
          <img 
            src="/images/joel-hero.jpg" 
            alt="Joel Boton — Maître Tisserand de Kanvô"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top'
            }}
            onError={(e) => {
              e.target.src = "https://res.cloudinary.com/dzxesa3wi/image/upload/v1789957721/WhatsApp_Image_2026-09-20_at_23.42.28_mxj7rm.jpg";
            }}
          />
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(11, 9, 14, 0.95) 0%, rgba(11, 9, 14, 0.4) 40%, rgba(146, 56, 245, 0.15) 100%)',
              pointerEvents: 'none'
            }}
          />

          <div className="badge-new">
            <div className="badge-pill">
              Atelier Kandévié <span className="badge-tag" style={{ marginLeft: '6px' }}>PORTO-NOVO</span>
            </div>
          </div>

          <div className="overline">
            <div className="tag">Maître Artisan Textile</div>
            <h4>Joel Boton au métier à tisser</h4>
            <div className="yr">Tissage d'exception • 100% Coton peigné béninois</div>
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
