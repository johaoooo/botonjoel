import React from 'react';
import { artisanData } from '../data/portfolioData';

export default function About() {
  const whatsappUrl = `https://wa.me/${artisanData.whatsappNumber}?text=${encodeURIComponent(
    "Bonjour Joel, j'aimerais échanger avec vous sur une commande spéciale de Kanvô."
  )}`;

  return (
    <section id="about" className="wrap about">
      <div className="about-img">
        <div className="kanvo-pattern-bg"></div>
        <div className="mk">JB</div>
        <div className="sub">JOEL BOTON • PORTO-NOVO</div>
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
