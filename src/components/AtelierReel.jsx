import React, { useState } from 'react';
import { artisanData } from '../data/portfolioData';

export default function AtelierReel() {
  const [activeTab, setActiveTab] = useState('geste');

  const whatsappUrl = `https://wa.me/${artisanData.whatsappNumber}?text=${encodeURIComponent(
    "Bonjour Joel, je souhaite visiter votre atelier à Kandévié (Porto-Novo) ou échanger sur vos pagnes."
  )}`;

  return (
    <section className="wrap reel">
      <div>
        <div className="eyebrow">Au cœur du geste artisanal</div>
        <h2>
          L'ATELIER<br />
          <span className="violet-text">DE KANDÉVIÉ</span>
        </h2>
        <p>
          À Porto-Novo, dans le quartier historique de Kandévié, le temps s'arrête au rythme 
          métronomique du métier. Chaque pièce de Kanvô est le fruit de plusieurs journées 
          de concentration, de passion et de dévouement.
        </p>
        
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '24px' }}>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-solid">
            Prendre rendez-vous à l'atelier 💬
          </a>
          <a href="#formations" className="btn-line">
            Voir les formations
          </a>
        </div>
      </div>

      <div 
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
          <img 
            src="/images/joel-hero.jpg" 
            alt="L'Atelier de tissage de Joel Boton à Porto-Novo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 20%'
            }}
            onError={(e) => {
              e.target.src = "https://res.cloudinary.com/dzxesa3wi/image/upload/v1789957721/WhatsApp_Image_2026-09-20_at_23.42.28_mxj7rm.jpg";
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(11, 9, 14, 0.95) 0%, rgba(11, 9, 14, 0.3) 50%, rgba(146, 56, 245, 0.2) 100%)'
          }} />
          
          <div style={{ position: 'absolute', top: '16px', left: '18px' }}>
            <span className="badge-pill" style={{ background: 'rgba(11,9,14,0.85)' }}>
              📍 Kandévié, Porto-Novo
            </span>
          </div>

          <div style={{ position: 'absolute', bottom: '16px', left: '20px', right: '20px' }}>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: 'var(--violet-2)', textTransform: 'uppercase', marginBottom: '4px' }}>
              Immersion Artisanale
            </div>
            <h4 style={{ margin: 0, fontSize: '20px', color: 'var(--text)' }}>
              Le sanctuaire du Kanvô fait main
            </h4>
          </div>
        </div>

        <div style={{ padding: '24px', background: 'var(--bg-soft)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', textAlign: 'center' }}>
            <div style={{ background: 'var(--bg-card)', padding: '12px 8px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, color: 'var(--violet)', fontSize: '18px' }}>100%</div>
              <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', marginTop: '2px' }}>Fait main</div>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '12px 8px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, color: 'var(--violet)', fontSize: '18px' }}>3 à 7 j</div>
              <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', marginTop: '2px' }}>Par pagne</div>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '12px 8px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, color: 'var(--violet)', fontSize: '18px' }}>Bio</div>
              <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', marginTop: '2px' }}>Coton Bénin</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
