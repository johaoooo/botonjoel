import React, { useState } from 'react';
import { artisanData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: 'Pagne d\'apparat',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedMessage = `Bonjour Joel, je vous contacte depuis votre portfolio :
- Nom : ${formData.name}
- Contact : ${formData.contact}
- Service souhaité : ${formData.service}
- Projet : ${formData.message}`;

    const waUrl = `https://wa.me/${artisanData.whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(waUrl, '_blank');
  };

  const directWhatsAppUrl = `https://wa.me/${artisanData.whatsappNumber}?text=${encodeURIComponent(
    "Bonjour Joel, je souhaite échanger avec vous."
  )}`;

  return (
    <section id="contact" className="wrap">
      <div className="contact-grid">
        <div>
          <div className="eyebrow">Contact & Commandes</div>
          <h2 className="contact-title">
            DONNONS VIE À <span className="violet-text">VOTRE PROJET</span>
          </h2>
          <p className="contact-lead">
            Pour une commande de Kanvô, un devis sur-mesure pour un événement ou une inscription à une formation, 
            Joel Boton est disponible par WhatsApp, appel ou email.
          </p>

          <div className="c-info">
            <a href={`mailto:${artisanData.email}`} className="c-item">
              <div className="c-ico">✉</div>
              <div>
                <div className="c-label">Email direct</div>
                <div className="c-val">{artisanData.email}</div>
              </div>
            </a>

            <a href={directWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="c-item">
              <div className="c-ico">💬</div>
              <div>
                <div className="c-label">WhatsApp & Appel</div>
                <div className="c-val">{artisanData.phone}</div>
              </div>
            </a>

            <div className="c-item">
              <div className="c-ico">📍</div>
              <div>
                <div className="c-label">Atelier principal</div>
                <div className="c-val">{artisanData.address}</div>
              </div>
            </div>
          </div>

          <div className="socials">
            <a 
              className="soc" 
              href={directWhatsAppUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Discuter sur WhatsApp"
            >
              WA
            </a>
            <a 
              className="soc" 
              href={`mailto:${artisanData.email}`} 
              title="Envoyer un email"
            >
              MAIL
            </a>
            <a 
              className="soc" 
              href={`tel:${artisanData.phone.replace(/\s+/g, '')}`} 
              title="Appeler"
            >
              TEL
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="field-row">
            <div>
              <label>Votre Nom complet *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex. Aminata Dossou"
                required
              />
            </div>
            <div>
              <label>Téléphone ou Email *</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Ex. +229 97 00 00 00"
                required
              />
            </div>
          </div>

          <div>
            <label>Service ou Pièce souhaitée</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="Pagne d'apparat">Pagne d'apparat (45 000 FCFA)</option>
              <option value="Étole / Écharpe">Étole / Écharpe (30 000 FCFA)</option>
              <option value="Décoration d'intérieur">Décoration d'intérieur (coussins, plaids)</option>
              <option value="Formation en tissage">Formation en tissage (Initiation ou perfectionnement)</option>
              <option value="Commande sur-mesure / Mariage">Commande sur-mesure / Mariage</option>
            </select>
          </div>

          <div>
            <label>Décrivez votre besoin *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Ex. Je prépare une cérémonie pour le mois prochain et je souhaite deux pagnes avec des motifs violets améthyste..."
              required
            ></textarea>
          </div>

          <button className="submit-btn" type="submit">
            <span>Envoyer directement via WhatsApp</span>
            <span>💬 →</span>
          </button>
        </form>
      </div>
    </section>
  );
}
