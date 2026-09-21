import React, { useState } from 'react';
import { processSteps } from '../data/portfolioData';

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="process" className="wrap">
      <div className="eyebrow">Savoir-faire artisanal</div>
      <h2 style={{ fontSize: 'clamp(32px, 5.5vw, 54px)' }}>
        LE PROCESSUS DU <span className="violet-text">KANVÔ</span>
      </h2>

      <div className="proc-grid">
        {processSteps.map((step, idx) => (
          <div
            key={step.num}
            className={`proc-card ${activeStep === idx ? 'on' : ''}`}
            onMouseEnter={() => setActiveStep(idx)}
          >
            <div className="proc-num">{step.num}</div>
            <div className="proc-line"></div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
