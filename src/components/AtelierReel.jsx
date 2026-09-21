import React from 'react';
import { MapPin, Clock, Award, ShieldCheck, MessageCircle, Calendar } from 'lucide-react';
import { artisanData } from '../data/portfolioData';

export default function AtelierReel() {
  const whatsappUrl = `https://wa.me/${artisanData.whatsappNumber}?text=${encodeURIComponent(
    "Bonjour Joel, je souhaite visiter votre atelier à Kandévié (Porto-Novo) ou échanger sur vos pagnes."
  )}`;

  return (
    <section className="section-alt">
      <div className="wrap reel">
        <div>
          <div className="eyebrow">Au cœur du geste artisanal</div>
          <h2 style={{ marginBottom: '24px' }}>
            L'ATELIER<br />
            <span className="violet-text">DE KANDÉVIÉ</span>
          </h2>
          <p style={{ lineHeight: 1.7, marginBottom: '32px' }}>
            À Porto-Novo, dans le quartier historique de Kandévié, le temps s'arrête au rythme 
            métronomique du métier. Chaque pièce de Kanvô est le fruit de plusieurs journées 
            de concentration, de passion et de dévouement.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-solid">
              <MessageCircle size={16} />
              <span>Prendre rendez-vous à l'atelier</span>
            </a>
            <a href="#formations" className="btn-line">
              <Calendar size={16} />
              <span>Voir les formations</span>
            </a>
          </div>
        </div>

        <div 
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '18px',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 40px -15px rgba(0,0,0,0.6)'
          }}
        >
          <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
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
            
            <div style={{ position: 'absolute', top: '18px', left: '18px' }}>
              <span className="badge-pill" style={{ background: 'rgba(11,9,14,0.88)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={13} color="var(--violet-2)" />
                <span>Kandévié, Porto-Novo</span>
              </span>
            </div>

            <div style={{ position: 'absolute', bottom: '20px', left: '22px', right: '22px' }}>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: 'var(--violet-2)', textTransform: 'uppercase', marginBottom: '4px' }}>
                Immersion Artisanale
              </div>
              <h4 style={{ margin: 0, fontSize: '21px', color: 'var(--text)', fontWeight: 700 }}>
                Le sanctuaire du Kanvô fait main
              </h4>
            </div>
          </div>

          <div style={{ padding: '28px', background: 'var(--bg-soft)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', textAlign: 'center' }}>
              <div style={{ background: 'var(--bg-card)', padding: '16px 10px', borderRadius: '10px', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6px', color: 'var(--violet-2)' }}>
                  <Award size={20} />
                </div>
                <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, color: 'var(--violet)', fontSize: '20px' }}>100%</div>
                <div style={{ fontSize: '11.5px', color: 'var(--muted)', textTransform: 'uppercase', marginTop: '4px' }}>Fait main</div>
              </div>

              <div style={{ background: 'var(--bg-card)', padding: '16px 10px', borderRadius: '10px', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6px', color: 'var(--violet-2)' }}>
                  <Clock size={20} />
                </div>
                <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, color: 'var(--violet)', fontSize: '20px' }}>3 à 7 j</div>
                <div style={{ fontSize: '11.5px', color: 'var(--muted)', textTransform: 'uppercase', marginTop: '4px' }}>Par pagne</div>
              </div>

              <div style={{ background: 'var(--bg-card)', padding: '16px 10px', borderRadius: '10px', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6px', color: 'var(--violet-2)' }}>
                  <ShieldCheck size={20} />
                </div>
                <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, color: 'var(--violet)', fontSize: '20px' }}>Pur</div>
                <div style={{ fontSize: '11.5px', color: 'var(--muted)', textTransform: 'uppercase', marginTop: '4px' }}>Coton Bénin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
