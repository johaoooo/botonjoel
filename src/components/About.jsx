import React from 'react';
import { ArrowRight, MapPin, Award, CheckCircle } from 'lucide-react';
import { artisanData } from '../data/portfolioData';

export default function About() {
  const whatsappUrl = `https://wa.me/${artisanData.whatsappNumber}?text=${encodeURIComponent(
    "Bonjour Joel, j'aimerais échanger avec vous sur une commande spéciale de Kanvô."
  )}`;

  return (
    <section id="about" className="section-alt">
      <div className="wrap about" style={{ gap: '64px' }}>
        <div className="about-img" style={{ position: 'relative', overflow: 'hidden', borderRadius: '18px', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.6)' }}>
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
              background: 'linear-gradient(to top, rgba(11, 9, 14, 0.95) 0%, rgba(11, 9, 14, 0.25) 60%)'
            }}
          />
          <div style={{ position: 'absolute', bottom: '28px', left: '28px', right: '28px', zIndex: 2 }}>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#D8B4FE', textTransform: 'uppercase', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
              <MapPin size={12} />
              <span>Porto-Novo, Bénin</span>
            </div>
            <div style={{ fontFamily: 'Archivo, sans-serif', fontSize: '26px', fontWeight: 900, marginBottom: '2px', color: '#FFFFFF' }}>
              JOEL BOTON
            </div>
            <div style={{ fontSize: '13.5px', color: '#E9D5FF' }}>
              8 ans d'excellence textile à Kandévié
            </div>
          </div>
        </div>

        <div>
          <div className="eyebrow">L'Artisan Tisserand</div>
          <h2 style={{ marginBottom: '28px' }}>
            GARDIEN & CRÉATEUR<br />
            <span className="violet-text">DU KANVÔ BÉNINOIS</span>
          </h2>

          <div className="about-body" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {artisanData.bioParagraphs.map((para, idx) => (
              <p key={idx} style={{ lineHeight: 1.7, margin: 0 }}>{para}</p>
            ))}
          </div>

          <div className="chips" style={{ margin: '32px 0 36px' }}>
            <span className="chip" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Award size={13} color="var(--violet-2)" />
              <span>Kanvô Royal</span>
            </span>
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
            style={{ padding: '14px 24px' }}
          >
            <span>Commander une création sur-mesure</span>
            <ArrowRight size={16} />
          </a>

          <div className="quote-card" style={{ marginTop: '48px', padding: '28px 30px' }}>
            <p style={{ lineHeight: 1.6, fontSize: '16px' }}>« {artisanData.tagline} »</p>
            <div className="who" style={{ marginTop: '10px' }}>— {artisanData.name}, Maître Tisserand</div>
          </div>
        </div>
      </div>
    </section>
  );
}
