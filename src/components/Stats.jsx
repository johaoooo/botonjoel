import React from 'react';
import { artisanData } from '../data/portfolioData';

export default function Stats() {
  return (
    <div className="wrap stats">
      <div>
        <div className="stat-num">{artisanData.creationsCount}</div>
        <div className="stat-label">Pièces réalisées</div>
      </div>
      <div>
        <div className="stat-num">{artisanData.clientsCount}</div>
        <div className="stat-label">Clients satisfaits</div>
      </div>
      <div>
        <div className="stat-num">{artisanData.studentsCount}</div>
        <div className="stat-label">Apprentis formés</div>
      </div>
      <div>
        <div className="stat-num">{artisanData.experienceYears} ans</div>
        <div className="stat-label">De pratique au métier</div>
      </div>

      <div className="scroll-hint">
        <span className="ln"></span> Découvrir l'univers
      </div>
    </div>
  );
}
