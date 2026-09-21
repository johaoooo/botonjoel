import React, { useState } from 'react';
import { filterCategories, portfolioItems, artisanData } from '../data/portfolioData';

// SVG patterns representing different Kanvo weaves
const KanvoFabricGraphic = ({ color = '#9238F5', accent = '#C598FF', variant = 1 }) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden', background: '#120D1A', borderRadius: '10px 10px 0 0' }}>
      <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`weave-${variant}`} width="40" height="40" patternUnits="userSpaceOnUse">
            {/* Warp threads background */}
            <rect width="40" height="40" fill="#140F1D" />
            <line x1="10" y1="0" x2="10" y2="40" stroke="rgba(197, 152, 255, 0.15)" strokeWidth="1" />
            <line x1="20" y1="0" x2="20" y2="40" stroke="rgba(197, 152, 255, 0.15)" strokeWidth="1" />
            <line x1="30" y1="0" x2="30" y2="40" stroke="rgba(197, 152, 255, 0.15)" strokeWidth="1" />
            
            {/* Distinctive Kanvo geometric woven motif */}
            {variant % 3 === 0 && (
              <>
                <polygon points="20,5 35,20 20,35 5,20" fill={color} fillOpacity="0.45" stroke={accent} strokeWidth="1" />
                <circle cx="20" cy="20" r="3" fill="#F5F3F0" />
              </>
            )}
            {variant % 3 === 1 && (
              <>
                <rect x="5" y="8" width="30" height="6" fill={color} fillOpacity="0.6" rx="2" />
                <rect x="10" y="24" width="20" height="8" fill={accent} fillOpacity="0.5" rx="2" />
                <polygon points="5,20 12,20 8,16" fill="#F5F3F0" />
                <polygon points="35,20 28,20 32,16" fill="#F5F3F0" />
              </>
            )}
            {variant % 3 === 2 && (
              <>
                <path d="M 0 20 Q 20 0 40 20 Q 20 40 0 20" fill="none" stroke={color} strokeWidth="1.8" />
                <circle cx="20" cy="20" r="4" fill={accent} />
              </>
            )}
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill={`url(#weave-${variant})`} />
        
        {/* Soft vignette overlay */}
        <radialGradient id={`glow-${variant}`} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0B090E" stopOpacity="0.8" />
        </radialGradient>
        <rect width="100%" height="100%" fill={`url(#glow-${variant})`} />
      </svg>
      
      {/* Decorative strip border */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${color}, ${accent}, transparent)` }}></div>
    </div>
  );
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.cat === activeFilter);

  const openWhatsAppForItem = (item) => {
    const text = `Bonjour Joel, je suis très intéressé(e) par votre création « ${item.title} » (${item.price}) vue sur votre portfolio. Pouvez-vous me donner les détails de commande ?`;
    window.open(`https://wa.me/${artisanData.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="work" className="wrap">
      <div className="port-head">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div className="eyebrow">Catalogue & Galerie Textile</div>
            <h2 className="port-title">
              MES <span className="violet-text">CRÉATIONS EN KANVÔ</span>
            </h2>
          </div>

          {/* View Mode Toggle */}
          <div style={{ display: 'flex', gap: '6px', background: 'var(--bg-card)', border: '1px solid var(--border)', padding: '4px', borderRadius: '8px' }}>
            <button
              onClick={() => setViewMode('grid')}
              style={{
                background: viewMode === 'grid' ? 'var(--violet)' : 'transparent',
                color: viewMode === 'grid' ? '#fff' : 'var(--muted)',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600
              }}
            >
              ⊞ Grille
            </button>
            <button
              onClick={() => setViewMode('list')}
              style={{
                background: viewMode === 'list' ? 'var(--violet)' : 'transparent',
                color: viewMode === 'list' ? '#fff' : 'var(--muted)',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600
              }}
            >
              ☰ Liste
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="filters">
          {filterCategories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* GRID VIEW (VISUAL CARDS) */}
      {viewMode === 'grid' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
          marginTop: '24px'
        }}>
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              style={{
                background: 'var(--bg-card)',
                border: item.highlight ? '1px solid var(--violet)' : '1px solid var(--border)',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s ease',
                position: 'relative',
                boxShadow: item.highlight ? '0 10px 30px -10px var(--violet-glow)' : 'none'
              }}
            >
              <KanvoFabricGraphic variant={idx + 1} />

              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: 'var(--violet-2)', textTransform: 'uppercase' }}>
                    {item.year} • Kanvô Fait Main
                  </span>
                  <span style={{
                    fontFamily: 'Archivo, sans-serif',
                    fontWeight: 900,
                    fontSize: '15px',
                    color: 'var(--violet-2)',
                    background: 'rgba(146, 56, 245, 0.12)',
                    padding: '3px 8px',
                    borderRadius: '5px'
                  }}>
                    {item.price}
                  </span>
                </div>

                <h3 style={{ fontSize: '18px', margin: '0 0 6px', color: 'var(--text)', textTransform: 'none', fontWeight: 600 }}>
                  {item.title}
                </h3>

                <p style={{ color: 'var(--muted)', fontSize: '13.5px', margin: '0 0 16px', flexGrow: 1, lineHeight: 1.5 }}>
                  {item.subtitle}
                </p>

                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '18px' }}>
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="p-tag" style={{ fontSize: '10.5px', padding: '3px 8px' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    className="btn-solid"
                    style={{ flexGrow: 1, fontSize: '13px', padding: '10px 14px', justifyContent: 'center' }}
                    onClick={() => openWhatsAppForItem(item)}
                  >
                    Commander 💬
                  </button>
                  <button
                    className="btn-line"
                    style={{ padding: '10px 14px', fontSize: '13px' }}
                    onClick={() => setSelectedItem(item)}
                    title="Voir les détails"
                  >
                    Détails
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* LIST VIEW (COMPACT) */}
      {viewMode === 'list' && (
        <div className="p-list">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className={`p-row ${item.highlight ? 'hl' : ''}`}
              onClick={() => setSelectedItem(item)}
              title="Cliquez pour voir les détails et commander"
            >
              <div className="p-num">{item.id}</div>
              
              <div className="p-titles">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>

              <div className="p-tags">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="p-tag">{tag}</span>
                ))}
                <span className="p-tag" style={{ borderColor: 'var(--violet)', color: 'var(--violet-2)', fontWeight: 600 }}>
                  {item.price}
                </span>
              </div>

              <div className="p-year">{item.year}</div>

              <div className="p-arrow">→</div>
            </div>
          ))}
        </div>
      )}

      {/* Item Detail Modal */}
      {selectedItem && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 80,
            background: 'rgba(11, 9, 14, 0.88)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setSelectedItem(null)}
        >
          <div 
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--violet)',
              borderRadius: '16px',
              maxWidth: '520px',
              width: '100%',
              padding: '36px',
              position: 'relative',
              boxShadow: '0 25px 50px -12px rgba(146, 56, 245, 0.35)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{
                position: 'absolute',
                top: '16px',
                right: '18px',
                background: 'none',
                border: 'none',
                color: 'var(--text)',
                fontSize: '24px',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedItem(null)}
            >
              ×
            </button>

            <div className="eyebrow" style={{ marginBottom: '8px' }}>Fiche Création Kanvô</div>
            <h3 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--text)' }}>
              {selectedItem.title}
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '15px', marginBottom: '20px' }}>
              {selectedItem.subtitle}
            </p>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {selectedItem.tags.map((tag, idx) => (
                <span key={idx} className="p-tag">{tag}</span>
              ))}
              <span className="p-tag" style={{ background: 'var(--violet)', color: '#fff', border: 'none' }}>
                {selectedItem.price}
              </span>
            </div>

            <div style={{ background: 'rgba(146, 56, 245, 0.08)', borderRadius: '8px', padding: '14px', marginBottom: '24px', border: '1px dashed var(--border)' }}>
              <div style={{ fontSize: '12px', fontFamily: 'Space Mono, monospace', color: 'var(--violet-2)', marginBottom: '4px' }}>
                SPÉCIFICATIONS ARTISANALES
              </div>
              <div style={{ fontSize: '13.5px', color: 'var(--text)' }}>
                Tissé au métier traditionnel à Porto-Novo • Coton 100% béninois • Pièce confectionnée sur commande sous 3 à 7 jours.
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button 
                className="btn-solid"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => openWhatsAppForItem(selectedItem)}
              >
                Commander cette pièce sur WhatsApp 💬
              </button>
              <button 
                className="btn-line"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => setSelectedItem(null)}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
