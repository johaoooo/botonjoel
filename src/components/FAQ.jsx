import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { artisanData } from '../data/portfolioData';

const faqs = [
  {
    q: "Combien de temps faut-il pour tisser un pagne Kanvô sur-mesure ?",
    a: "Le délai varie généralement entre 3 et 7 jours selon la complexité des motifs géométriques et la largeur de la pièce. Pour les parures complètes de mariage coutumier (couple), nous recommandons de passer commande 2 à 3 semaines à l'avance."
  },
  {
    q: "Comment entretenir et laver son pagne tissé en coton peigné ?",
    a: "Le Kanvô 100% coton peigné est conçu pour durer des décennies. Nous conseillons un lavage doux à la main à l'eau froide ou tiède avec un savon doux (savon de Marseille ou liquide neutre). Séchage à plat ou sur cintre à l'ombre. Repassage sur l'envers à température coton."
  },
  {
    q: "Puis-je choisir mes propres motifs royaux et palettes de couleurs ?",
    a: "Absolument ! Joel Boton conçoit des pièces personnalisées. Vous pouvez choisir vos harmonies (améthyste, indigo, or, ivoire) ainsi que les symboles traditionnels de la royauté et de la culture béninoise."
  },
  {
    q: "Livrez-vous en dehors de Porto-Novo et à l'étranger ?",
    a: "Oui. Nous assurons la livraison partout au Bénin (Cotonou, Calavi, Parakou, etc.) par transporteur express, ainsi que des expéditions soignées vers l'Afrique de l'Ouest, l'Europe et l'international via DHL ou transport sécurisé."
  },
  {
    q: "Comment se déroulent les formations au métier de tisserand ?",
    a: "Les formations se déroulent au sein de l'atelier de Kandévié à Porto-Novo. Chaque apprenant dispose de son propre métier à tisser traditionnel et de tous les fils nécessaires. L'apprentissage est individuel et personnalisé selon votre rythme."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  const whatsappUrl = `https://wa.me/${artisanData.whatsappNumber}?text=${encodeURIComponent(
    "Bonjour Joel, j'ai une question spécifique à vous poser concernant vos créations en Kanvô."
  )}`;

  return (
    <section id="faq" className="wrap">
      <div className="eyebrow">
        <HelpCircle size={14} />
        <span>Questions Fréquentes</span>
      </div>
      <h2 style={{ fontSize: 'clamp(32px, 5.5vw, 54px)', marginBottom: '20px' }}>
        TOUT CE QU'IL FAUT <span className="violet-text">SAVOIR</span>
      </h2>
      <p style={{ color: 'var(--muted)', maxWidth: '640px', fontSize: '16px', marginBottom: '48px', lineHeight: 1.6 }}>
        Transparence, conseils d'entretien et modalités de commande pour une expérience sereine.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '860px' }}>
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                border: isOpen ? '1px solid var(--violet)' : '1px solid var(--border)',
                borderRadius: '14px',
                overflow: 'hidden',
                transition: 'all 0.25s ease'
              }}
            >
              <button
                onClick={() => toggle(idx)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  padding: '24px 28px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                  color: 'var(--text)',
                  fontSize: '17px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                <span>{faq.q}</span>
                <span
                  style={{
                    color: isOpen ? 'var(--violet-2)' : 'var(--muted)',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ChevronDown size={20} />
                </span>
              </button>

              {isOpen && (
                <div style={{ padding: '0 28px 24px', color: 'var(--muted)', fontSize: '15px', lineHeight: 1.7, borderTop: '1px solid rgba(146, 56, 245, 0.15)', paddingTop: '16px' }}>
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
        <span style={{ color: 'var(--muted)', fontSize: '14.5px' }}>
          Vous avez une question particulière non listée ?
        </span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-line"
          style={{ fontSize: '13px', padding: '9px 18px' }}
        >
          <MessageCircle size={15} color="var(--violet-2)" />
          <span>Poser ma question à Joel</span>
        </a>
      </div>
    </section>
  );
}
