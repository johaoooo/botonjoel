import React from 'react';
import { trainingOptions, artisanData } from '../data/portfolioData';

export default function Training() {
  const openTrainingWhatsApp = (trainingTitle) => {
    const text = `Bonjour Joel, je souhaite m'inscrire ou avoir des informations sur votre formation « ${trainingTitle} » à l'atelier de Kandévié.`;
    window.open(`https://wa.me/${artisanData.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="formations" className="wrap">
      <div className="eyebrow">Transmission & Enseignement</div>
      <h2 style={{ fontSize: 'clamp(32px, 5.5vw, 54px)', marginBottom: '16px' }}>
        FORMATIONS EN <span className="violet-text">TISSAGE DE KANVÔ</span>
      </h2>
      <p style={{ color: 'var(--muted)', maxWidth: '640px', fontSize: '16px', marginBottom: '40px' }}>
        Le métier de tisserand est un trésor qui ne doit pas s'éteindre. Joel Boton ouvre les portes 
        de son atelier à Porto-Novo pour transmettre la rigueur, les gestes et la beauté du Kanvô.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
        {trainingOptions.map((item, idx) => (
          <div
            key={idx}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '36px 30px',
              display: 'flex',
              flexDirection: 'column',
              transition: 'border-color 0.2s ease',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span className="p-tag" style={{ background: 'rgba(146, 56, 245, 0.15)', color: 'var(--violet-2)', border: 'none' }}>
                {item.duration}
              </span>
              <span style={{ fontSize: '12px', fontFamily: 'Space Mono, monospace', color: 'var(--muted)' }}>
                {item.audience}
              </span>
            </div>

            <h3 style={{ fontSize: '22px', margin: '0 0 12px', color: 'var(--text)' }}>
              {item.title}
            </h3>

            <p style={{ color: 'var(--muted)', fontSize: '14.5px', marginBottom: '22px', flexGrow: 1 }}>
              {item.desc}
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px' }}>
              {item.points.map((pt, pIdx) => (
                <li key={pIdx} style={{ display: 'flex', gap: '10px', fontSize: '14px', marginBottom: '10px', color: 'var(--text)' }}>
                  <span style={{ color: 'var(--violet)' }}>✦</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <button
              className="btn-solid"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => openTrainingWhatsApp(item.title)}
            >
              Réserver sa place en formation 💬
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
