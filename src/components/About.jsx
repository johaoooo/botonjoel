import React from 'react';
import { artisanData } from '../data/portfolioData';

export default function About() {
  const whatsappUrl = `https://wa.me/${artisanData.whatsappNumber}?text=${encodeURIComponent(
    "Bonjour Joel, j'aimerais échanger avec vous sur une commande spéciale de Kanvô."
  )}`;

  return (
    <section id="about" className="wrap about">
      <div className="about-img" style={{ position: 'relative', overflow: 'hidden' }}>
        <img 
          src="/images/joel-hero.jpg" 
          alt="Joel Boton au métier à tisser"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'contrast(1.05) brightness(0.95)'
          }}
          onError={(e) => {
            e.target.src = "https://res.cloudinary.com/dzxesa3wi/image/upload/v1789957721/WhatsApp_Image_2026-09-20_at_23.42.28_mxj7rm.jpg";
          }}
        />
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(11, 9, 14, 0.95) 0%, rgba(11, 9, 14, 0.2) 60%)'
          }}
        />
        <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', zIndex: 2 }}>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: 'var(--violet-2)', textTransform: 'uppercase', marginBottom: '4px' }}>
            Porto-Novo, Bénin
          </div>
          <div style={{ fontFamily: 'Archivo, sans-serif', fontSize: '24px', fontWeight: 900 }}>
            JOEL BOTON
          </div>
          <div style={{ fontSize: '13px', color: 'var(--muted)' }}>
            8 ans d'excellence textile à Kandévié
          </div>
        </div>
      </div>

      <div>
        <div className="eyebrow">L'Artisan Tisserand</div>
        <h2>
          GARDIEN & CRÉATEUR<br />
          <span className="violet-text">DU KANVÔ BÉNINOIS</span>
        </h2>

        <div className="about-body">
          {artisanData.bioParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        <div className="chips">
          <span className="chip">Kanvô Royal</span>
          <span className="chip">Fait main à Porto-Novo</span>
          <span className="chip">Coton peigné</span>
          <span className="chip">Améthyste & Nuances nobles</span>
          <span className="chip">Formateur certifié</span>
          <span className="chip">Commandes sur-mesure</span>
        </div>

        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-solid"
        >
          Commander une création sur-mesure →
        </a>

        <div className="quote-card">
          <p>« {artisanData.tagline} »</p>
          <div className="who">— {artisanData.name}, Maître Tisserand</div>
        </div>
      </div>
    </section>
  );
}
