import React from 'react';
import { SlidersHorizontal, Sparkles, Compass, Grid3X3, Palette, GitBranch } from 'lucide-react';

const toolsDetails = [
  {
    icon: <SlidersHorizontal size={24} />,
    title: "Métier à tisser à pédales",
    desc: "Structure traditionnelle en bois où la coordination des pieds et des mains donne vie aux bandes de Kanvô.",
    badge: "Outil principal"
  },
  {
    icon: <Sparkles size={24} />,
    title: "Coton peigné du Bénin",
    desc: "Fibres 100% naturelles, douces et résistantes, issues de la filière locale béninoise de première qualité.",
    badge: "Matière première"
  },
  {
    icon: <Compass size={24} />,
    title: "Navettes en bois dur",
    desc: "Glissant d'un geste précis d'une rive à l'autre pour déposer le fil de trame entre les fils de chaîne.",
    badge: "Maniement fin"
  },
  {
    icon: <Grid3X3 size={24} />,
    title: "Peigne de tisserand",
    desc: "Tasse chaque passage de fil pour garantir la régularité, la tenue et la longévité incomparable du tissu.",
    badge: "Précision"
  },
  {
    icon: <Palette size={24} />,
    title: "Nuances Améthystes & Nobles",
    desc: "Pigments et fils teints aux reflets profonds, conférant au tissu son éclat royal et distinctif.",
    badge: "Teinture & Éclat"
  },
  {
    icon: <GitBranch size={24} />,
    title: "Lisses & Ourdissoir",
    desc: "Organisent la chaîne fil par fil et déterminent les séquences des motifs géométriques traditionnels.",
    badge: "Architecture textile"
  }
];

export default function Tools() {
  return (
    <section className="section-alt">
      <div className="wrap">
        <div className="eyebrow">Matières & Équipements</div>
        <h2 style={{ fontSize: 'clamp(32px, 5.5vw, 54px)', marginBottom: '48px' }}>
          L'OUTILLAGE DU <span className="violet-text">MAÎTRE TISSERAND</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '28px'
        }}>
          {toolsDetails.map((tool, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '30px 26px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                transition: 'border-color 0.2s ease',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(146, 56, 245, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--violet-2)'
                }}>
                  {tool.icon}
                </div>
                <span style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '11px',
                  color: 'var(--violet-2)',
                  background: 'rgba(146, 56, 245, 0.12)',
                  padding: '4px 10px',
                  borderRadius: '6px'
                }}>
                  {tool.badge}
                </span>
              </div>

              <h3 style={{ fontSize: '19px', margin: 0, color: 'var(--text)', textTransform: 'none', fontWeight: 600 }}>
                {tool.title}
              </h3>

              <p style={{ color: 'var(--muted)', fontSize: '14px', margin: 0, lineHeight: 1.6 }}>
                {tool.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
