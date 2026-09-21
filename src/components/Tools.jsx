import React from 'react';

const toolsDetails = [
  {
    icon: "🪵",
    title: "Métier à tisser à pédales",
    desc: "Structure traditionnelle en bois où la coordination des pieds et des mains donne vie aux bandes de Kanvô.",
    badge: "Outil principal"
  },
  {
    icon: "🌱",
    title: "Coton peigné du Bénin",
    desc: "Fibres 100% naturelles, douces et résistantes, issues de la filière locale béninoise de première qualité.",
    badge: "Matière première"
  },
  {
    icon: "🪡",
    title: "Navettes en bois dur",
    desc: "Glissant d'un geste précis d'une rive à l'autre pour déposer le fil de trame entre les fils de chaîne.",
    badge: "Maniement fin"
  },
  {
    icon: "📏",
    title: "Peigne de tisserand",
    desc: "Tasse chaque passage de fil pour garantir la régularité, la tenue et la longévité incomparable du tissu.",
    badge: "Précision"
  },
  {
    icon: "🎨",
    title: "Nuances Améthystes & Nobles",
    desc: "Pigments et fils teints aux reflets profonds, conférant au tissu son éclat royal et distinctif.",
    badge: "Teinture & Éclat"
  },
  {
    icon: "⚙️",
    title: "Lisses & Ourdissoir",
    desc: "Organisent la chaîne fil par fil et déterminent les séquences des motifs géométriques traditionnels.",
    badge: "Architecture textile"
  }
];

export default function Tools() {
  return (
    <section className="wrap" style={{ paddingTop: '10px' }}>
      <div className="eyebrow">Matières & Équipements</div>
      <h2 style={{ fontSize: 'clamp(32px, 5.5vw, 54px)', marginBottom: '36px' }}>
        L'OUTILLAGE DU <span className="violet-text">MAÎTRE TISSERAND</span>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        {toolsDetails.map((tool, idx) => (
          <div
            key={idx}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              transition: 'border-color 0.2s ease'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '28px' }}>{tool.icon}</span>
              <span style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '11px',
                color: 'var(--violet-2)',
                background: 'rgba(146, 56, 245, 0.12)',
                padding: '3px 8px',
                borderRadius: '5px'
              }}>
                {tool.badge}
              </span>
            </div>

            <h3 style={{ fontSize: '18px', margin: 0, color: 'var(--text)', textTransform: 'none', fontWeight: 600 }}>
              {tool.title}
            </h3>

            <p style={{ color: 'var(--muted)', fontSize: '13.5px', margin: 0, lineHeight: 1.5 }}>
              {tool.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
