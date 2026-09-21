import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { artisanData } from '../data/portfolioData';

export default function FloatingWhatsApp() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${artisanData.whatsappNumber}?text=${encodeURIComponent(
    "Bonjour Joel, je vous contacte depuis votre portfolio."
  )}`;

  return (
    <div style={{ position: 'fixed', bottom: '28px', right: '28px', zIndex: 70, display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end' }}>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Retour en haut"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            color: 'var(--text)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--violet)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
        >
          <ArrowUp size={18} />
        </button>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Discuter directement avec Joel sur WhatsApp"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          color: '#fff',
          padding: '12px 18px',
          borderRadius: '100px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.35)',
          fontSize: '13.5px',
          fontWeight: 600,
          textDecoration: 'none',
          transition: 'all 0.25s ease'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        <MessageCircle size={18} fill="#fff" color="#fff" />
        <span>Discuter avec Joel</span>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff', display: 'inline-block', opacity: 0.9 }}></span>
      </a>
    </div>
  );
}
