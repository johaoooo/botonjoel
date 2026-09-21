import React from 'react';
import { toolsList } from '../data/portfolioData';

export default function Tools() {
  return (
    <section className="wrap" style={{ paddingTop: '10px' }}>
      <div className="eyebrow">Matières & Équipements</div>
      <h2 style={{ fontSize: 'clamp(32px, 5.5vw, 54px)' }}>
        MES <span className="violet-text">OUTILS NOBLES</span>
      </h2>

      <div className="tools-grid">
        {toolsList.map((tool, idx) => (
          <div key={idx} className="tool">
            <span className="ico">{tool.code}</span>
            <span className="lbl">{tool.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
