import React from 'react';

export default function Ticker() {
  const items = [
    "Kanvô du Bénin",
    "Tissage Manuel",
    "Atelier Kandévié",
    "Porto-Novo",
    "Coton Peigné",
    "Violet Améthyste",
    "Formations & Transmission",
    "Motifs Royaux",
    "Sur-Mesure",
    "Pièces d'Apparat",
    "Patrimoine Vivant"
  ];

  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker">
        {items.concat(items).map((text, idx) => (
          <span key={idx}>{text}</span>
        ))}
      </div>
    </div>
  );
}
