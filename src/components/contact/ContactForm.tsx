'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react/dist/iconify.js';
import {
  FiCheckCircle,
  FiSend,
  FiArrowRight,
  FiClock,
  FiX,
  FiMessageCircle,
  FiPhone,
  FiMapPin,
  FiStar,
  FiHeart,
  FiZap,
  FiUsers,
  FiShield,
} from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const MotionDiv = motion.div;

function ContactSectionClient() {
  const [activeTab, setActiveTab] = useState('form');
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
  const [isVisible, setIsVisible] = useState(false);

  // Configuration EmailJS
  const EMAIL_SERVICE_ID = 'service_nduaqcf';
  const EMAIL_TEMPLATE_ID = 'template_o4in2la';
  const EMAIL_PUBLIC_KEY = 'SGjTSPINfxcxRtYby';

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
        to_email: 'wankountry@gmail.com',
      };

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

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      'Bonjour Wan-Kountry, je suis intéressé par vos services de développement web. Pouvons-nous discuter de mon projet ?'
    );
    const phoneNumber = '330752892073';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const contactMethods = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      description: 'Réponse immédiate, discussion en temps réel',
      value: '+33 07 52 89 20 73',
      icon: 'mdi:whatsapp',
      color: 'primary',
      action: openWhatsApp,
      recommended: true,
    },
    {
      id: 'email',
      name: 'Email',
      description: 'Pour les demandes détaillées et documents',
      value: 'wankountry@gmail.com',
      icon: 'mdi:gmail',
      color: 'secondary',
      action: () => window.open('mailto:wankountry@gmail.com'),
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      description: 'Réseau professionnel et portfolio',
      value: 'wan-kountry',
      icon: 'mdi:linkedin',
      color: 'accent',
      action: () =>
        window.open('https://linkedin.com/in/joel-tchinda', '_blank'),
    },
  ];

  const projectTypes = [
    { value: 'Site vitrine', icon: 'mdi:web', color: 'primary' },
    { value: 'E-commerce', icon: 'mdi:storefront', color: 'secondary' },
    { value: 'Application web', icon: 'mdi:application', color: 'accent' },
    { value: 'Refonte de site', icon: 'mdi:refresh', color: 'success' },
    { value: 'Maintenance', icon: 'mdi:tools', color: 'primary' },
    { value: 'Autre', icon: 'mdi:help-circle', color: 'secondary' },
  ];

  const tabs = [
    { id: 'form', name: 'Formulaire', icon: FiMessageCircle },
    { id: 'contact', name: 'Contact direct', icon: FiPhone },
    { id: 'info', name: 'Informations', icon: FiMapPin },
  ];

  return (
    <section className="relative overflow-hidden pb-16 pt-32">
      {/* Arrière-plan modernisé */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-soft"></div>

        {/* Motifs géométriques */}
        <div
          className="absolute bottom-1/4 right-0 w-1/2 h-1/3 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%231a5f3a'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        {/* En-tête modernisé */}
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="badge-success mb-8 inline-flex items-center gap-2">
            <FiHeart size={16} />
            <span className="text-sm">Démarrons votre projet ensemble</span>
          </div>

          <h2 className="heading-1 mb-6">
            Parlons de votre{' '}
            <span className="text-gradient-primary">projet</span>
            <br />
            <span className="text-gradient-warm">dès maintenant</span> !
          </h2>

          <p className="body-large max-w-3xl mx-auto mb-8">
            Une idée, un projet, une question ? Nous sommes là pour vous
            accompagner de la conception à la réalisation de votre vision
            digitale.
          </p>

          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-success">
              <FiClock size={18} />
              <span className="font-semibold">Réponse sous 24h</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <FiStar size={18} />
              <span className="font-semibold">Consultation gratuite</span>
            </div>
            <div className="flex items-center gap-2 text-secondary">
              <FiUsers size={18} />
              <span className="font-semibold">Accompagnement personnalisé</span>
            </div>
          </div>
        </MotionDiv>

        {/* Navigation par onglets */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="card-glass p-2 inline-flex gap-2 rounded-2xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 focus-ring ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-glow-primary'
                    : 'hover:bg-surface text-text-light'
                }`}
              >
                <tab.icon size={18} />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </MotionDiv>

        {/* Contenu des onglets */}
        <AnimatePresence mode="wait">
          {activeTab === 'form' && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Formulaire principal */}
                <div className="lg:col-span-2">
                  <div className="card-warm p-10 space-y-8">
                    <div className="text-center">
                      <h3 className="heading-3 mb-4">
                        Décrivez-nous votre projet
                      </h3>
                      <p className="body-text">
                        Plus vous serez précis, mieux nous pourrons vous
                        conseiller
                      </p>
                    </div>

                    {/* Message d'erreur */}
                    {error && (
                      <div className="alert-error">
                        <FiX size={20} />
                        <p>{error}</p>
                      </div>
                    )}

                    {/* Nom */}
                    <div className="space-y-3">
                      <label
                        htmlFor="name"
                        className="block font-semibold text-text-strong"
                      >
                        Votre nom *
                      </label>
                      <input
                        className="input"
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ex: Marie Kouam"
                        required
                      />
                    </div>

                    {/* Email et téléphone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label
                          htmlFor="email"
                          className="block font-semibold text-text-strong"
                        >
                          Email *
                        </label>
                        <input
                          className="input"
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="marie@entreprise.cm"
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <label
                          htmlFor="phone"
                          className="block font-semibold text-text-strong"
                        >
                          Téléphone (WhatsApp)
                        </label>
                        <input
                          className="input"
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+237 6XX XXX XXX"
                        />
                      </div>
                    </div>

                    {/* Type de projet */}
                    <div className="space-y-3">
                      <label className="block font-semibold text-text-strong">
                        Type de projet *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {projectTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                subject: type.value,
                              }))
                            }
                            className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-2 hover-lift ${
                              formData.subject === type.value
                                ? `border-${type.color} bg-${type.color}/10 text-${type.color}`
                                : 'border-border hover:border-border-light bg-surface'
                            }`}
                          >
                            <Icon icon={type.icon} width="24" height="24" />
                            <span className="text-sm font-medium">
                              {type.value}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-3">
                      <label
                        htmlFor="message"
                        className="block font-semibold text-text-strong"
                      >
                        Décrivez votre projet *
                      </label>
                      <textarea
                        className="textarea"
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Parlez-nous de vos besoins, objectifs, délais souhaités, budget approximatif..."
                        rows={5}
                        required
                      />
                    </div>

                    {/* Bouton d'envoi */}
                    <div className="pt-4">
                      {!loader ? (
                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="btn-primary btn-lg w-full group cursor-pointer"
                        >
                          <FiSend className="mr-3" />
                          Envoyer le message
                          <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                        </button>
                      ) : (
                        <button
                          disabled
                          className="btn-primary btn-lg w-full disabled"
                        >
                          <div className="spinner mr-3" />
                          Envoi en cours...
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Informations complémentaires */}
                <div className="space-y-6">
                  {/* Temps de réponse */}
                  <div className="card-glass p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FiClock className="text-primary" size={24} />
                      <h4 className="heading-5">Délai de réponse</h4>
                    </div>
                    <p className="body-small">
                      Nous répondons généralement sous{' '}
                      <span className="font-bold text-primary">
                        24h maximum
                      </span>
                      . Pour les urgences, contactez-nous directement sur
                      WhatsApp.
                    </p>
                  </div>

                  {/* Consultation gratuite */}
                  <div className="card-glass p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FiStar className="text-accent" size={24} />
                      <h4 className="heading-5">Consultation gratuite</h4>
                    </div>
                    <p className="body-small">
                      <span className="font-bold text-accent">
                        30 minutes offertes
                      </span>{' '}
                      pour analyser vos besoins et vous proposer la meilleure
                      solution.
                    </p>
                  </div>

                  {/* Contact rapide WhatsApp */}
                  <div className="card-bordered p-6 border-success">
                    <div className="text-center space-y-4">
                      <Icon
                        icon="mdi:whatsapp"
                        width="48"
                        height="48"
                        className="mx-auto text-success"
                      />
                      <h4 className="heading-5">
                        Besoin d'une réponse immédiate ?
                      </h4>
                      <p className="body-small">
                        Contactez-nous directement sur WhatsApp pour une
                        discussion en temps réel.
                      </p>
                      <button
                        onClick={openWhatsApp}
                        className="btn-accent w-full group cursor-pointer"
                      >
                        <Icon
                          icon="mdi:whatsapp"
                          width="20"
                          height="20"
                          className="mr-3"
                        />
                        Ouvrir WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h3 className="heading-2 mb-6">
                  Choisissez votre moyen de contact
                </h3>
                <p className="body-large">
                  Plusieurs options s'offrent à vous selon vos préférences
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group relative"
                  >
                    <div
                      className={`card h-full p-8 text-center space-y-6 hover-lift-lg ${
                        method.recommended ? 'card-bordered-success' : ''
                      }`}
                    >
                      {/* Badge recommandé */}
                      {method.recommended && (
                        <div className="absolute -top-3 -right-3 badge-success px-3 py-2">
                          <FiStar size={12} className="mr-1" />
                          <span className="text-primary font-bold">
                            Recommandé
                          </span>
                        </div>
                      )}

                      {/* Icône */}
                      <div
                        className={`w-20 h-20 mx-auto rounded-3xl bg-${method.color}/10 flex items-center justify-center`}
                      >
                        <Icon
                          icon={method.icon}
                          width="32"
                          height="32"
                          className={`text-${method.color}`}
                        />
                      </div>

                      {/* Contenu */}
                      <div className="space-y-4">
                        <h4 className="heading-5">{method.name}</h4>
                        <p className="body-small">{method.description}</p>
                        <div className={`font-bold text-${method.color}`}>
                          {method.value}
                        </div>
                      </div>

                      {/* Action */}
                      <button
                        onClick={method.action}
                        className={`w-full btn-${method.color} group cursor-pointer`}
                      >
                        Contacter
                        <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'info' && (
            <motion.div
              key="info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h3 className="heading-2 mb-6">Informations pratiques</h3>
                <p className="body-large">
                  Tout ce que vous devez savoir pour bien commencer
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* FAQ rapide */}
                <div className="space-y-6">
                  <h4 className="heading-4">Questions fréquentes</h4>

                  {[
                    {
                      question: 'Combien coûte un site web ?',
                      answer:
                        'De 100 000 FCFA pour un site vitrine à 350 000 FCFA pour un e-commerce. Devis personnalisé selon vos besoins.',
                    },
                    {
                      question: 'Quels sont les délais ?',
                      answer:
                        '5-7 jours pour un site vitrine, 10-14 jours pour un e-commerce. Nous respectons toujours nos engagements.',
                    },
                    {
                      question: 'Accompagnez-vous après livraison ?',
                      answer:
                        'Oui ! Support inclus (45 à 90 jours selon la formule) + formation pour utiliser votre site.',
                    },
                  ].map((faq, index) => (
                    <div key={index} className="card p-6 space-y-3">
                      <h5 className="font-semibold text-primary">
                        {faq.question}
                      </h5>
                      <p className="body-small">{faq.answer}</p>
                    </div>
                  ))}
                </div>

                {/* Nos engagements */}
                <div className="space-y-6">
                  <h4 className="heading-4">Nos engagements</h4>

                  <div className="space-y-4">
                    {[
                      {
                        icon: FiZap,
                        title: 'Réactivité',
                        desc: 'Réponse sous 24h garantie',
                      },
                      {
                        icon: FiShield,
                        title: 'Qualité',
                        desc: 'Code professionnel et sécurisé',
                      },
                      {
                        icon: FiHeart,
                        title: 'Accompagnement',
                        desc: 'Support personnalisé inclus',
                      },
                      {
                        icon: FiStar,
                        title: 'Satisfaction',
                        desc: "Révisions jusqu'à satisfaction",
                      },
                    ].map((engagement, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 card-glass rounded-xl"
                      >
                        <div
                          className={`w-12 h-12 rounded-xl bg-${
                            ['primary', 'secondary', 'accent', 'success'][index]
                          }/10 flex items-center justify-center`}
                        >
                          <engagement.icon
                            className={`text-${
                              ['primary', 'secondary', 'accent', 'success'][
                                index
                              ]
                            }`}
                            size={20}
                          />
                        </div>
                        <div>
                          <h5 className="font-semibold">{engagement.title}</h5>
                          <p className="text-sm text-text-light">
                            {engagement.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Localisation */}
                  <div className="card-warm p-6 mt-8">
                    <div className="flex items-center gap-3 mb-4">
                      <FiMapPin className="text-primary" size={24} />
                      <h5 className="heading-5">Où nous trouvons-nous ?</h5>
                    </div>
                    <p className="body-text">
                      <span className="font-semibold">Cameroun</span> :
                      Bandjoun, Région de l'Ouest
                      <br />
                      <span className="font-semibold">France</span> : Lyon,
                      Auvergne-Rhône-Alpes
                      <br />
                      <span className="text-primary font-semibold">
                        100% remote
                      </span>{' '}
                      - Nous travaillons avec des clients du monde entier
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA final */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="card-glass p-12 max-w-3xl mx-auto">
            <MotionDiv
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="inline-block mb-6"
            >
              <FiHeart className="text-primary" size={40} />
            </MotionDiv>

            <h3 className="heading-2 mb-6 text-gradient-sunset">
              Transformons votre idée en succès digital
            </h3>

            <p className="body-large mb-8">
              Chaque grand projet commence par une simple conversation.
              Contactez-nous aujourd'hui et découvrons ensemble ce que nous
              pouvons créer.
            </p>

            <button onClick={openWhatsApp} className="btn-accent btn-xl group cursor-pointer">
              <Icon
                icon="mdi:whatsapp"
                width="24"
                height="24"
                className="mr-3"
              />
              Commençons maintenant
              <FiArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </MotionDiv>
      </div>

      {/* Modal de succès conservé */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="card max-w-md w-full p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-success/20 rounded-2xl flex items-center justify-center">
                    <FiCheckCircle className="text-success" size={24} />
                  </div>
                  <h3 className="heading-5">Message envoyé !</h3>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-surface rounded-lg transition-colors focus-ring"
                >
                  <FiX size={20} />
                </button>
              </div>

              <div className="space-y-6">
                <p className="body-text">
                  Merci pour votre message ! Nous vous répondrons dans les plus
                  brefs délais, généralement sous 24h.
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowModal(false)}
                    className="btn-primary flex-1"
                  >
                    Parfait !
                  </button>
                  <button
                    onClick={() => {
                      setShowModal(false);
                      openWhatsApp();
                    }}
                    className="btn-accent flex-1 flex items-center justify-center gap-2"
                  >
                    <Icon icon="mdi:whatsapp" width="18" height="18" />
                    WhatsApp
                  </button>
                </div>

                {/* Barre de progression */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-text-subtle">
                    <span>Fermeture automatique</span>
                    <span>7 sec</span>
                  </div>
                  <div className="h-1 bg-border rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: '100%' }}
                      animate={{ width: '0%' }}
                      transition={{ duration: 7, ease: 'linear' }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ContactSectionClient;
