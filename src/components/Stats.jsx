import React from 'react';
import { Sparkles, Users, GraduationCap, Award, ChevronDown } from 'lucide-react';
import { artisanData } from '../data/portfolioData';

export default function Stats() {
  return (
    <div className="wrap" style={{ paddingBottom: '30px' }}>
      <div className="stats" style={{ padding: '60px 0 50px', gap: '48px', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'rgba(146, 56, 245, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--violet-2)' }}>
            <Sparkles size={22} />
          </div>
          <div>
            <div className="stat-num">{artisanData.creationsCount}</div>
            <div className="stat-label">Pièces réalisées</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'rgba(146, 56, 245, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--violet-2)' }}>
            <Users size={22} />
          </div>
          <div>
            <div className="stat-num">{artisanData.clientsCount}</div>
            <div className="stat-label">Clients satisfaits</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'rgba(146, 56, 245, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--violet-2)' }}>
            <GraduationCap size={22} />
          </div>
          <div>
            <div className="stat-num">{artisanData.studentsCount}</div>
            <div className="stat-label">Apprentis formés</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'rgba(146, 56, 245, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--violet-2)' }}>
            <Award size={22} />
          </div>
          <div>
            <div className="stat-num">{artisanData.experienceYears} ans</div>
            <div className="stat-label">De pratique au métier</div>
          </div>
        </div>

        <div className="scroll-hint">
          <ChevronDown size={14} color="var(--violet-2)" />
          <span>Découvrir l'univers</span>
        </div>
      </div>
    </div>
  );
}
