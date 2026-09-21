import React from 'react';
import { GraduationCap, Clock, Users, CheckCircle2, MessageCircle } from 'lucide-react';
import { trainingOptions, artisanData } from '../data/portfolioData';

export default function Training() {
  const openTrainingWhatsApp = (trainingTitle) => {
    const text = `Bonjour Joel, je souhaite m'inscrire ou avoir des informations sur votre formation « ${trainingTitle} » à l'atelier de Kandévié.`;
    window.open(`https://wa.me/${artisanData.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="formations" className="wrap">
      <div className="eyebrow">Transmission & Enseignement</div>
      <h2 style={{ fontSize: 'clamp(32px, 5.5vw, 54px)', marginBottom: '20px' }}>
        FORMATIONS EN <span className="violet-text">TISSAGE DE KANVÔ</span>
      </h2>
      <p style={{ color: 'var(--muted)', maxWidth: '680px', fontSize: '16.5px', marginBottom: '56px', lineHeight: 1.7 }}>
        Le métier de tisserand est un trésor vivant qui se transmet de main en main. Joel Boton ouvre les portes 
        de son atelier à Porto-Novo pour enseigner la rigueur, les gestes et la beauté du Kanvô.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '36px' }}>
        {trainingOptions.map((item, idx) => (
          <div
            key={idx}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '18px',
              padding: '42px 36px',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.25s ease',
              position: 'relative',
              boxShadow: '0 12px 32px rgba(0,0,0,0.3)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span className="p-tag" style={{
                background: 'rgba(146, 56, 245, 0.15)',
                color: 'var(--violet-2)',
                border: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                fontSize: '12px'
              }}>
                <Clock size={13} />
                <span>{item.duration}</span>
              </span>

              <span style={{ fontSize: '12.5px', fontFamily: 'Space Mono, monospace', color: 'var(--muted)', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <Users size={13} />
                <span>{item.audience}</span>
              </span>
            </div>

            <h3 style={{ fontSize: '24px', margin: '0 0 14px', color: 'var(--text)' }}>
              {item.title}
            </h3>

            <p style={{ color: 'var(--muted)', fontSize: '15px', marginBottom: '28px', flexGrow: 1, lineHeight: 1.6 }}>
              {item.desc}
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px' }}>
              {item.points.map((pt, pIdx) => (
                <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14.5px', marginBottom: '12px', color: 'var(--text)', lineHeight: 1.5 }}>
                  <CheckCircle2 size={16} color="var(--violet-2)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <button
              className="btn-solid"
              style={{ width: '100%', justifyContent: 'center', padding: '14px 20px', fontSize: '14.5px' }}
              onClick={() => openTrainingWhatsApp(item.title)}
            >
              <MessageCircle size={16} />
              <span>Réserver sa place en formation</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
