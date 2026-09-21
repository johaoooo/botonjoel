import React, { useState } from 'react';
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
      <h2 className="test-title">
        ILS PORTENT ET SOUTIENNENT <span className="violet-text">LE KANVÔ</span>
      </h2>

      <div className="test-card">
        <div className="stars">★★★★★</div>
        <p className="q">« {current.quote} »</p>

        <div className="test-who">
          <div className="avatar">{current.avatar}</div>
          <div>
            <div className="test-name">{current.name}</div>
            <div className="test-role">{current.role}</div>
          </div>
        </div>
      </div>

      <div className="test-nav">
        <button className="test-arrow" onClick={prev} aria-label="Témoignage précédent">
          ←
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
          →
        </button>
      </div>
    </section>
  );
}
