import React from 'react';
import { Check, Star, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { pricingPlans, artisanData } from '../data/portfolioData';

export default function Pricing() {
  const openWhatsAppForPlan = (plan) => {
    const text = `Bonjour Joel, je souhaite réserver la formule « ${plan.name} » (${plan.price} ${plan.currency}) vue sur votre site. Pouvons-nous échanger sur les détails ?`;
    window.open(`https://wa.me/${artisanData.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="pricing" className="section-alt">
      <div className="wrap">
        <div className="eyebrow">Investissement & Tarifs</div>
        <h2 className="price-title">
          LES FORMULES <span className="violet-text">ATELIER</span>
        </h2>
        <p className="price-sub" style={{ marginBottom: '56px', fontSize: '16px' }}>
          Transparence et respect du travail artisanal. Tous les prix sont indiqués en Francs CFA (FCFA).
        </p>

        <div className="price-grid" style={{ gap: '32px' }}>
          {pricingPlans.map((plan, idx) => (
            <div key={idx} className={`price-card ${plan.featured ? 'feat' : ''}`} style={{ padding: '44px 34px' }}>
              {plan.featured && (
                <div className="featured-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Star size={13} fill="#fff" />
                  <span>{plan.tag}</span>
                </div>
              )}

              <h3 style={{ fontSize: '22px', marginBottom: '14px' }}>{plan.name}</h3>

              <div className="price-amt" style={{ marginBottom: '6px' }}>
                {plan.price}
                {plan.currency && <span className="cur" style={{ marginLeft: '6px' }}>{plan.currency}</span>}
              </div>

              <div className="price-meta" style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '12px 0 16px' }}>
                <Clock size={13} color="var(--violet-2)" />
                <span>{plan.time}</span>
              </div>

              <div className="price-desc" style={{ marginBottom: '28px', lineHeight: 1.5 }}>
                {plan.desc}
              </div>

              <ul className="price-feats" style={{ padding: '24px 0', margin: '0 0 32px' }}>
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '14px', lineHeight: 1.5 }}>
                    <Check size={16} color="var(--violet)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`price-cta ${plan.featured ? 'solid' : 'line'}`}
                onClick={() => openWhatsAppForPlan(plan)}
                style={{ padding: '14px 20px', fontSize: '14.5px' }}
              >
                <span>Choisir cette formule</span>
                <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
