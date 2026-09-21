import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/portfolioData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="wrap">
      <div className="eyebrow">Témoignages & Avis</div>
      <h2 className="test-title" style={{ marginBottom: '56px' }}>
        ILS PORTENT ET SOUTIENNENT <span className="violet-text">LE KANVÔ</span>
      </h2>

      <div className="test-card" style={{ padding: '60px 54px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '24px', left: '28px', opacity: 0.15, color: 'var(--violet)' }}>
          <Quote size={56} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '24px' }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} fill="var(--violet-2)" color="var(--violet-2)" />
          ))}
        </div>

        <p className="q" style={{ lineHeight: 1.7, fontSize: '19px', marginBottom: '32px' }}>
          « {current.quote} »
        </p>

        <div className="test-who">
          <div className="avatar">{current.avatar}</div>
          <div>
            <div className="test-name" style={{ fontSize: '15.5px' }}>{current.name}</div>
            <div className="test-role">{current.role}</div>
          </div>
        </div>
      </div>

      <div className="test-nav" style={{ marginTop: '36px' }}>
        <button className="test-arrow" onClick={prev} aria-label="Témoignage précédent">
          <ChevronLeft size={20} />
        </button>

        <div className="test-dots">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>

        <button className="test-arrow" onClick={next} aria-label="Témoignage suivant">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
