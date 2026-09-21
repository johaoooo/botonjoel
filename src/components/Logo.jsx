import React from 'react';

export default function Logo({ size = 'normal', showText = true, isWhiteText = false }) {
  let emblemSize = 42;
  let svgSize = 25;

  if (size === 'navbar') {
    emblemSize = 54; // Agrandissement généreux pour la navbar
    svgSize = 34;
  } else if (size === 'footer' || size === 'large') {
    emblemSize = 48;
    svgSize = 30;
  }

  return (
    <div 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '12px', 
        textDecoration: 'none',
        userSelect: 'none'
      }}
    >
      {/* Artisan Emblem (JB Monogram woven with loom guidelines) */}
      <div 
        style={{ 
          width: `${emblemSize}px`, 
          height: `${emblemSize}px`, 
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #7C22E8 0%, #5811A8 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(124, 34, 232, 0.32)',
          flexShrink: 0,
          position: 'relative',
          transition: 'transform 0.2s ease'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        <svg 
          width={svgSize} 
          height={svgSize} 
          viewBox="0 0 64 64" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Warp and weft loom guidelines */}
          <line x1="8" y1="32" x2="56" y2="32" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="30" y1="8" x2="30" y2="56" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeDasharray="3 3" />
          
          {/* 'J' curve */}
          <path 
            d="M19 16V38C19 44.6274 24.3726 50 31 50C34.5 50 37.5 48 39 45" 
            stroke="#FFFFFF" 
            strokeWidth="4.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          
          {/* 'B' upper loop */}
          <path 
            d="M30 16H42C46.4183 16 50 19.5817 50 24C50 28.4183 46.4183 32 42 32H30" 
            stroke="#FFFFFF" 
            strokeWidth="4.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          
          {/* 'B' lower loop */}
          <path 
            d="M30 32H44C48.4183 32 52 35.5817 52 40C52 44.4183 48.4183 48 44 48H30" 
            stroke="#FFFFFF" 
            strokeWidth="4.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          
          {/* Kanvo Diamond Motif in intersection */}
          <polygon points="30,27 35,32 30,37 25,32" fill="#E9D5FF" />
        </svg>
      </div>

      {/* Brand Typography (optional) */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span 
            style={{ 
              fontFamily: 'Archivo, sans-serif', 
              fontWeight: 900, 
              fontSize: size === 'footer' ? '20px' : '18px', 
              letterSpacing: '-0.02em', 
              color: isWhiteText ? '#FFFFFF' : 'var(--text)', 
              lineHeight: 1.1,
              display: 'flex',
              alignItems: 'baseline'
            }}
          >
            <span>JOEL BOTON</span>
            <span style={{ color: 'var(--violet)', marginLeft: '1px' }}>.</span>
          </span>
          <span 
            style={{ 
              fontFamily: 'Space Mono, monospace', 
              fontSize: '9.5px', 
              letterSpacing: '0.14em', 
              color: 'var(--violet)', 
              fontWeight: 700,
              textTransform: 'uppercase',
              marginTop: '3px'
            }}
          >
            Kanvô • Porto-Novo
          </span>
        </div>
      )}
    </div>
  );
}
