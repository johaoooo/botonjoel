import React from 'react';
import { pricingPlans, artisanData } from '../data/portfolioData';

export default function Pricing() {
  const openWhatsAppForPlan = (plan) => {
    const text = `Bonjour Joel, je souhaite réserver la formule « ${plan.name} » (${plan.price} ${plan.currency}) vue sur votre site. Pouvons-nous échanger sur les détails ?`;
    window.open(`https://wa.me/${artisanData.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="pricing" className="wrap">
      <div className="eyebrow">Investissement & Tarifs</div>
      <h2 className="price-title">
        LES FORMULES <span className="violet-text">ATELIER</span>
      </h2>
      <p className="price-sub">
        Transparence et respect du travail artisanal. Tous les prix sont indiqués en Francs CFA (FCFA).
      </p>

      <div className="price-grid">
        {pricingPlans.map((plan, idx) => (
          <div key={idx} className={`price-card ${plan.featured ? 'feat' : ''}`}>
            {plan.featured && (
              <div className="featured-tag">{plan.tag}</div>
            )}

            <h3>{plan.name}</h3>

            <div className="price-amt">
              {plan.price}
              {plan.currency && <span className="cur">{plan.currency}</span>}
            </div>

            <div className="price-meta">{plan.time}</div>
            <div className="price-desc">{plan.desc}</div>

            <ul className="price-feats">
              {plan.features.map((feat, fIdx) => (
                <li key={fIdx}>{feat}</li>
              ))}
            </ul>

            <button
              className={`price-cta ${plan.featured ? 'solid' : 'line'}`}
              onClick={() => openWhatsAppForPlan(plan)}
            >
              Choisir cette formule →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
