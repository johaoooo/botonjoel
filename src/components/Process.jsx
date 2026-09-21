import React, { useState } from 'react';
import { MessageSquareText, Sliders, Layers, CheckCircle2 } from 'lucide-react';
import { processSteps } from '../data/portfolioData';

const stepIcons = [
  <MessageSquareText size={22} />,
  <Sliders size={22} />,
  <Layers size={22} />,
  <CheckCircle2 size={22} />
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="process" className="wrap">
      <div className="eyebrow">Savoir-faire artisanal</div>
      <h2 style={{ fontSize: 'clamp(32px, 5.5vw, 54px)', marginBottom: '44px' }}>
        LE PROCESSUS DU <span className="violet-text">KANVÔ</span>
      </h2>

      <div className="proc-grid" style={{ borderRadius: '14px', overflow: 'hidden' }}>
        {processSteps.map((step, idx) => (
          <div
            key={step.num}
            className={`proc-card ${activeStep === idx ? 'on' : ''}`}
            onMouseEnter={() => setActiveStep(idx)}
            style={{ padding: '36px 28px', cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <span className="proc-num">{step.num}</span>
              <span style={{ color: activeStep === idx ? 'var(--violet-2)' : 'var(--muted-2)' }}>
                {stepIcons[idx]}
              </span>
            </div>

            <div className="proc-line" style={{ margin: '12px 0 16px' }}></div>
            <h3 style={{ fontSize: '19px', marginBottom: '12px' }}>{step.title}</h3>
            <p style={{ lineHeight: 1.6 }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
