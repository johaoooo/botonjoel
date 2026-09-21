import React from 'react';
import { MapPin, MessageCircle, Mail, Phone, Heart } from 'lucide-react';
import Logo from './Logo';
import { artisanData } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const directWhatsAppUrl = `https://wa.me/${artisanData.whatsappNumber}?text=${encodeURIComponent(
    "Bonjour Joel, je vous contacte depuis votre portfolio."
  )}`;

  return (
    <footer className="wrap" style={{ padding: '60px 0 40px', borderTop: '1px solid var(--border)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px', width: '100%', marginBottom: '40px' }}>
        <div>
          <div style={{ marginBottom: '16px' }}>
            <Logo size="footer" />
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6, maxWidth: '320px', margin: '0 0 16px' }}>
            Maître Tisserand de Kanvô à Porto-Novo, Bénin. Préservation et création textile d'exception faites main.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--violet-2)', fontSize: '13px' }}>
            <MapPin size={15} />
            <span>Quartier Kandévié, Porto-Novo, Bénin</span>
          </div>
        </div>

        <div>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '12px', color: 'var(--violet-2)', textTransform: 'uppercase', marginBottom: '16px' }}>
            Navigation Rapide
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--muted)' }}>
            <a href="#work" style={{ transition: 'color 0.2s' }}>Catalogue des créations</a>
            <a href="#formations" style={{ transition: 'color 0.2s' }}>Formations en tissage</a>
            <a href="#process" style={{ transition: 'color 0.2s' }}>Savoir-faire artisanal</a>
            <a href="#about" style={{ transition: 'color 0.2s' }}>À propos de Joel</a>
            <a href="#pricing" style={{ transition: 'color 0.2s' }}>Tarifs et formules</a>
            <a href="#faq" style={{ transition: 'color 0.2s' }}>Foire aux questions (FAQ)</a>
            <a href="#contact" style={{ transition: 'color 0.2s' }}>Prendre contact</a>
          </div>
        </div>

        <div>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '12px', color: 'var(--violet-2)', textTransform: 'uppercase', marginBottom: '16px' }}>
            Contact Rapide
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'var(--muted)' }}>
            <a href={directWhatsAppUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <MessageCircle size={16} color="var(--violet-2)" />
              <span>WhatsApp : {artisanData.phone}</span>
            </a>
            <a href={`mailto:${artisanData.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={16} color="var(--violet-2)" />
              <span>Email : {artisanData.email}</span>
            </a>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={16} color="var(--violet-2)" />
              <span>Atelier : Ouvert sur rendez-vous</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: '100%', borderTop: '1px solid var(--border)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
        <div className="foot-small" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <span>© {currentYear} Joel Boton — Tissage de Kanvô. Conçu avec</span>
          <Heart size={13} fill="var(--violet)" color="var(--violet)" />
          <span>pour le patrimoine béninois.</span>
        </div>

        <div className="foot-links">
          <a href="#top">Haut de page ↑</a>
        </div>
      </div>
    </footer>
  );
}
