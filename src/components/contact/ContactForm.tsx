/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState, useEffect } from 'react';
import {
  FiCheckCircle,
  FiSend,
  FiArrowRight,
  FiMail,
  FiExternalLink,
  FiClock,
  FiX,
} from 'react-icons/fi';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Site vitrine',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  // Configuration EmailJS - REMPLACEZ PAR VOS VRAIES VALEURS
  const EMAIL_SERVICE_ID = 'service_bbw7fxv';
  const EMAIL_TEMPLATE_ID = 'template_xdgfntj';
  const EMAIL_PUBLIC_KEY = 'PSWm1IPE_MhNbhDSv';

  // Fermeture automatique du modal après 7 secondes
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Reset error when user starts typing
    if (error) setError('');
  };

  const reset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'Site vitrine',
      message: '',
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoader(true);
    setError('');

    try {
      // Préparation des données pour EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Non renseigné',
        subject: formData.subject,
        message: `
Email: ${formData.email}
Téléphone: ${formData.phone || 'Non renseigné'}
Type de projet: ${formData.subject}

Message:
${formData.message}
        `.trim(),
        time: new Date().toLocaleString('fr-FR', {
          dateStyle: 'short',
          timeStyle: 'short',
        }),
        to_email: 'tchindajoel61@gmail.com',
      };

      // Envoi avec EmailJS
      const response = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        templateParams,
        EMAIL_PUBLIC_KEY
      );

      console.log('Email envoyé avec succès:', response);
      setSubmitted(true);
      setShowModal(true);
      reset();
    } catch (error: any) {
      console.error("Erreur lors de l'envoi:", error);
      setError(
        "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou me contacter directement."
      );
    } finally {
      setLoader(false);
    }
  };

  // Fonction pour ouvrir WhatsApp
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      'Bonjour Wan-Kountry, je suis intéressé par vos services de développement web. Pouvons-nous discuter de mon projet ?'
    );
    const phoneNumber = '330752892073';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container relative">
        <div className="flex flex-col gap-20">
          {/* En-tête de section */}
          <div className="text-center">
            <h2 className="mb-4 text-balance">
              Parlons de votre{' '}
              <span className="text-gradient font-normal italic">projet !</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-balance" style={{ color: 'var(--text)' }}>
              Un site à créer, une application à développer ou un projet à
              discuter ? Nous sommes disponible pour en parler !
            </p>
          </div>

          {/* Formulaire et informations de contact */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Formulaire de contact */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="card p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-strong)' }}>
                    Formulaire de contact
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text)' }}>
                    Décrivez-nous votre projet et nous vous répondrons rapidement
                  </p>
                </div>

                {/* Message d'erreur */}
                {error && (
                  <div className="mb-6 p-4 rounded-xl border" 
                       style={{ 
                         backgroundColor: 'var(--color-error)/10', 
                         borderColor: 'var(--color-error)/30',
                         color: 'var(--color-error)'
                       }}>
                    <p className="text-sm">{error}</p>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Nom */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2" 
                           style={{ color: 'var(--text-strong)' }}>
                      Votre nom *
                    </label>
                    <input
                      className="input"
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: Marie Dubois"
                      required
                    />
                  </div>

                  {/* Email et téléphone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2"
                             style={{ color: 'var(--text-strong)' }}>
                        Email *
                      </label>
                      <input
                        className="input"
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="marie@exemple.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2"
                             style={{ color: 'var(--text-strong)' }}>
                        Téléphone
                      </label>
                      <input
                        className="input"
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+33 07 52 89 20 73"
                      />
                    </div>
                  </div>

                  {/* Sujet */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2"
                           style={{ color: 'var(--text-strong)' }}>
                      Type de projet
                    </label>
                    <select
                      className="input"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="Site vitrine">Site vitrine</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Application web">Application web</option>
                      <option value="Refonte de site">Refonte de site</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2"
                           style={{ color: 'var(--text-strong)' }}>
                      Décrivez votre projet *
                    </label>
                    <textarea
                      className="input resize-none"
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Parlez-nous de vos besoins, objectifs, délais souhaités..."
                      rows={4}
                      required
                    />
                  </div>

                  {/* Bouton d'envoi */}
                  <div>
                    {!loader ? (
                      <button
                        type="submit"
                        className="btn-primary w-full flex items-center justify-center gap-3"
                      >
                        <FiSend className="w-5 h-5" />
                        Envoyer le message
                      </button>
                    ) : (
                      <button disabled className="btn-primary w-full disabled flex items-center justify-center gap-3">
                        <div className="loading w-5 h-5" role="status" aria-label="loading"></div>
                        Envoi en cours...
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>

            {/* Informations de contact */}
            <div className="lg:col-span-1">
              <div className="p-8 rounded-2xl h-fit" style={{ backgroundColor: 'var(--surface)' }}>
                <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--text-strong)' }}>
                  Contact direct
                </h3>

                <div className="space-y-4">
                  {/* Téléphone/WhatsApp */}
                  <div className="card p-4 flex items-center gap-4">
                    <div className="p-3 rounded-full" style={{ backgroundColor: 'var(--color-success)/20' }}>
                      <Icon
                        icon="mdi:whatsapp"
                        width="24"
                        height="24"
                        style={{ color: 'var(--color-success)' }}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium" style={{ color: 'var(--text-strong)' }}>
                        WhatsApp
                      </p>
                      <p className="text-sm" style={{ color: 'var(--text)' }}>
                        +33 07 52 89 20 73
                      </p>
                    </div>
                    <button
                      onClick={openWhatsApp}
                      className="hover-lift transition-all duration-200 p-2 rounded-lg"
                      style={{ color: 'var(--color-success)' }}
                    >
                      <FiArrowRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Email */}
                  <div className="card p-4 flex items-center gap-4">
                    <div className="p-3 rounded-full" style={{ backgroundColor: 'var(--primary)/20' }}>
                      <FiMail className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium" style={{ color: 'var(--text-strong)' }}>
                        Email
                      </p>
                      <p className="text-sm" style={{ color: 'var(--text)' }}>
                        tchindajoel61@gmail.com
                      </p>
                    </div>
                    <a
                      href="mailto:tchindajoel61@gmail.com"
                      className="hover-lift transition-all duration-200 p-2 rounded-lg"
                      style={{ color: 'var(--primary)' }}
                    >
                      <FiArrowRight className="w-5 h-5" />
                    </a>
                  </div>

                  {/* LinkedIn */}
                  <div className="card p-4 flex items-center gap-4">
                    <div className="p-3 rounded-full" style={{ backgroundColor: 'var(--primary)/20' }}>
                      <Icon
                        icon="mdi:linkedin"
                        width="24"
                        height="24"
                        style={{ color: 'var(--primary)' }}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium" style={{ color: 'var(--text-strong)' }}>
                        LinkedIn
                      </p>
                      <p className="text-sm" style={{ color: 'var(--text)' }}>
                        joel-tchinda
                      </p>
                    </div>
                    <a
                      href="https://linkedin.com/in/joel-tchinda"
                      target="_blank"
                      className="hover-lift transition-all duration-200 p-2 rounded-lg"
                      style={{ color: 'var(--primary)' }}
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Bouton WhatsApp principal */}
                <button
                  onClick={openWhatsApp}
                  className="w-full mt-6 font-semibold rounded-xl py-4 px-6 transition-all duration-200 flex items-center justify-center gap-3 hover-lift"
                  style={{
                    backgroundColor: 'var(--color-success)',
                    color: 'var(--color-white)'
                  }}
                >
                  <Icon icon="mdi:whatsapp" width="20" height="20" />
                  Discutons sur WhatsApp
                </button>

                {/* Informations supplémentaires */}
                <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: 'var(--primary)/10' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-2" 
                      style={{ color: 'var(--text-strong)' }}>
                    <FiClock className="w-[18px] h-[18px]" style={{ color: 'var(--primary)' }} />
                    Délai de réponse
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--text)' }}>
                    Nous répondons généralement sous 24h. Pour les urgences,
                    contactez-nous directement sur WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de notification de succès */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" 
             style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(8px)' }}>
          <div className="card max-w-md w-full p-8 animate-in zoom-in-95 duration-300">
            {/* Header avec bouton fermer */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full" style={{ backgroundColor: 'var(--color-success)/20' }}>
                  <FiCheckCircle className="w-8 h-8" style={{ color: 'var(--color-success)' }} />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: 'var(--text-strong)' }}>
                  Message envoyé !
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="p-1 rounded-full transition-all duration-200 hover-lift"
                style={{ color: 'var(--text-light)' }}
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Contenu du modal */}
            <div className="space-y-4">
              <p style={{ color: 'var(--text)' }}>
                Merci pour votre message ! Nous vous répondrons dans les plus brefs
                délais, généralement sous 24h.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={closeModal}
                  className="btn-primary flex-1 flex items-center justify-center"
                >
                  Parfait !
                </button>

                <button
                  onClick={() => {
                    closeModal();
                    openWhatsApp();
                  }}
                  className="flex-1 font-medium rounded-xl py-3 px-4 transition-all duration-200 flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: 'var(--color-success)',
                    color: 'var(--color-white)'
                  }}
                >
                  <Icon icon="mdi:whatsapp" width="18" height="18" />
                  WhatsApp
                </button>
              </div>
            </div>

            {/* Barre de progression pour fermeture automatique */}
            <div className="mt-6">
              <div className="flex items-center justify-between text-xs mb-2" 
                   style={{ color: 'var(--text-light)' }}>
                <span>Fermeture automatique</span>
                <span>7 sec</span>
              </div>
              <div className="w-full rounded-full h-1" style={{ backgroundColor: 'var(--border)' }}>
                <div
                  className="h-1 rounded-full animate-pulse"
                  style={{
                    backgroundColor: 'var(--primary)',
                    animation: 'shrink 7s linear forwards',
                    width: '100%',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes shrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
        
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-in {
          animation: animate-in 0.3s ease-out forwards;
        }
        
        .zoom-in-95 {
          transform: scale(0.95);
        }
      `}</style>
    </section>
  );
}

export default ContactForm;