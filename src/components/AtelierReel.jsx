import React, { useState } from 'react';
import { artisanData } from '../data/portfolioData';

export default function AtelierReel() {
  const [isPlaying, setIsPlaying] = useState(false);

  const whatsappUrl = `https://wa.me/${artisanData.whatsappNumber}?text=${encodeURIComponent(
    "Bonjour Joel, je souhaite visiter votre atelier à Kandévié (Porto-Novo) ou commander un pagne."
  )}`;

  return (
    <section className="wrap reel">
      <div>
        <div className="eyebrow">Au cœur du geste</div>
        <h2>
          L'ATELIER<br />
          <span className="violet-text">DE KANDÉVIÉ</span>
        </h2>
        <p>
          Une immersion au cœur de Porto-Novo : le claquement régulier de la navette, 
          la tension des fils de coton et la naissance patiente de chaque motif géométrique.
        </p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-solid">
          Visiter l'atelier ou commander →
        </a>
      </div>

      <div className="reel-video" onClick={() => setIsPlaying(!isPlaying)} style={{ cursor: 'pointer' }}>
        <div className="reel-tag">— Kandévié, Porto-Novo</div>

        {isPlaying ? (
          <div style={{ textAlign: 'center', padding: '24px', zIndex: 2 }}>
            <div style={{ fontSize: '42px', marginBottom: '12px' }}>🧵 🧶</div>
            <h4 style={{ margin: '0 0 8px', color: 'var(--text)' }}>Le rythme du métier à tisser</h4>
            <p style={{ color: 'var(--muted)', fontSize: '14px', maxWidth: '340px', margin: '0 auto 16px' }}>
              Chaque centimètre de Kanvô requiert des centaines de mouvements précis et synchronisés.
            </p>
            <button className="btn-line" style={{ fontSize: '12px', padding: '6px 14px' }}>
              Rejouer l'animation
            </button>
          </div>
        ) : (
          <div className="play-btn" title="Cliquer pour découvrir le son et le geste du métier">
            <svg width="22" height="24" viewBox="0 0 20 22" fill="none">
              <path d="M2 1.5v19l17-9.5-17-9.5Z" fill="white" />
            </svg>
          </div>
        )}

        <div className="reel-label">PORTRAIT ARTISAN 2025</div>
      </div>
    </section>
  );
}
