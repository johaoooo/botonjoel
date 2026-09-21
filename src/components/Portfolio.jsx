import React, { useState } from 'react';
import { filterCategories, portfolioItems, artisanData } from '../data/portfolioData';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.cat === activeFilter);

  const openWhatsAppForItem = (item) => {
    const text = `Bonjour Joel, je suis intéressé(e) par votre création « ${item.title} » (${item.subtitle}) vue sur votre portfolio. Pouvez-vous m'en dire plus sur la disponibilité et les modalités ?`;
    window.open(`https://wa.me/${artisanData.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="work" className="wrap">
      <div className="port-head">
        <div className="eyebrow">Catalogue de Créations</div>
        <h2 className="port-title">
          MES <span className="violet-text">PIÈCES DE KANVÔ</span>
        </h2>

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

            <div className="eyebrow" style={{ marginBottom: '8px' }}>Détails de la création</div>
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
