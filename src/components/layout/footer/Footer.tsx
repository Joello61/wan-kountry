/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import Logo from '../header/Logo'
import { Icon } from '@iconify/react/dist/iconify.js'
import { motion } from 'framer-motion'
import { 
  FiMail, 
  FiGithub, 
  FiMapPin, 
  FiPhone, 
  FiZap, 
  FiTrendingUp,
  FiHeart,
  FiCoffee
} from 'react-icons/fi'

const Footer = () => {
  const footerData = {
    brand: {
      tagline: "Meilleure solution web – Créons ensemble votre site moderne et adapté.",
      socialLinks: [
        { 
          link: "https://linkedin.com/in/joel-tchinda", 
          icon: "linkedin",
          name: "LinkedIn"
        },
        { 
          link: "https://github.com/joeltech", 
          icon: "github", 
          name: "GitHub"
        },
        { 
          link: "mailto:tchindajoel61@gmail.com", 
          icon: "email",
          name: "Email"
        },
        { 
          link: "https://wa.me/330752892073", 
          icon: "whatsapp",
          name: "WhatsApp"
        }
      ]
    },
    sitemap: {
      name: "Navigation",
      links: [
        { name: "Accueil", url: "/" },
        { name: "À propos", url: "about-us" },
        { name: "Services", url: "services" },
        { name: "Réalisations", url: "realisations" },
        { name: "Contact", url: "contact" }
      ]
    },
    otherPages: {
      name: "Autres",
      links: [
        { name: "FAQ", url: "#faq" },
        { name: "Accomplissements", url: "#awards" },
        { name: "Témoignages", url: "testimony" }
      ]
    },
    contactDetails: {
      name: "Nous contacter",
      address: "Toulouse, France / Yaoundé, Cameroun (Remote disponible)",
      email: "tchindajoel61@gmail.com",
      phone: "+33 07 52 89 20 73"
    },
    copyright: "© 2025 JoelTech – Tous droits réservés."
  }

  const renderIcon = (iconType: string, className: string = "w-5 h-5") => {
    switch(iconType) {
      case 'linkedin':
        return <Icon icon='mdi:linkedin' width='20' height='20' className='text-current' />
      case 'whatsapp':
        return <Icon icon='mdi:whatsapp' width='20' height='20' className='text-current' />
      case 'github':
        return <FiGithub className={className} />
      case 'email':
        return <FiMail className={className} />
      default:
        return <span className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center text-xs">?</span>
    }
  }

  return (
    <footer className='relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900'>
      {/* Background décoratif */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 dark:bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200/30 dark:bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className='container mx-auto px-4 relative z-10'>

        {/* Contenu principal du footer */}
        <div className='flex flex-col xl:flex-row py-16 gap-10 justify-between'>
          
          {/* Section Logo et Tagline avec style moderne */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className='flex flex-col gap-6 max-w-md'>
            
            <div className="flex items-center gap-3">
              <Logo />
              <div className="flex items-center gap-1 bg-green-100 dark:bg-green-500/20 px-3 py-1 rounded-full border border-green-300 dark:border-green-400/30">
                <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-700 dark:text-green-300 text-xs font-medium">Disponible</span>
              </div>
            </div>

            <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
              {footerData?.brand?.tagline}
            </p>

            <div className="bg-white/80 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700/50 shadow-sm">
              <p className="text-purple-700 dark:text-purple-300 font-medium mb-2 flex items-center gap-2">
                <FiCoffee className="w-4 h-4" />
                Fait avec passion depuis Toulouse & Yaoundé
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                3+ ans d&apos;expérience • 07+ projets réussis • 100% satisfaction client
              </p>
            </div>
            
            {/* Réseaux sociaux modernisés */}
            <div className='flex flex-col gap-4'>
              <p className='text-gray-800 dark:text-gray-200 font-medium flex items-center gap-2'>
                <FiHeart className="w-4 h-4 text-red-500 dark:text-red-400" />
                Suivez-moi
              </p>
              <div className='flex gap-3'>
                {footerData?.brand?.socialLinks?.map((item: any, index: any) => {
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}>
                      <Link
                        href={item.link}
                        target='_blank'
                        rel="noopener noreferrer"
                        className='bg-white/80 hover:bg-purple-100 dark:bg-gray-800/50 dark:hover:bg-purple-600/20 border border-gray-200 hover:border-purple-300 dark:border-gray-700/50 dark:hover:border-purple-500/50 p-3 rounded-xl transition-all duration-300 flex items-center justify-center group shadow-sm hover:shadow-md'>
                        {renderIcon(item.icon, "w-5 h-5 text-gray-600 group-hover:text-purple-600 dark:text-gray-300 dark:group-hover:text-purple-300")}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Grille de navigation modernisée */}
          <div className='grid sm:grid-cols-3 gap-8 xl:gap-12'>
            
            {/* Navigation principale */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='flex flex-col gap-4'>
              <p className='font-bold text-gray-800 dark:text-gray-200 text-lg mb-2'>
                {footerData?.sitemap?.name}
              </p>
              <ul className='flex flex-col gap-3'>
                {footerData?.sitemap?.links?.map((item: any, index: any) => {
                  return (
                    <li key={index}>
                      <Link 
                        href={item.url}
                        className='text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-300 transition-all duration-200 hover:translate-x-1 flex items-center gap-2 group'>
                        <span className="w-1 h-1 bg-purple-500 dark:bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </motion.div>

            {/* Pages supplémentaires */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className='flex flex-col gap-4'>
              <p className='font-bold text-gray-800 dark:text-gray-200 text-lg mb-2'>
                {footerData?.otherPages?.name}
              </p>
              <ul className='flex flex-col gap-3'>
                {footerData?.otherPages?.links?.map((item: any, index: any) => {
                  return (
                    <li key={index}>
                      <Link 
                        href={item.url}
                        className='text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-300 transition-all duration-200 hover:translate-x-1 flex items-center gap-2 group'>
                        <span className="w-1 h-1 bg-purple-500 dark:bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </motion.div>

            {/* Détails de contact modernisés */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='flex flex-col gap-4'>
              <p className='font-bold text-gray-800 dark:text-gray-200 text-lg mb-2'>
                {footerData?.contactDetails?.name}
              </p>
              <div className='flex flex-col gap-4'>
                <div className='bg-white/80 dark:bg-gray-800/50 p-3 rounded-lg border border-gray-200 dark:border-gray-700/50 shadow-sm'>
                  <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex items-center gap-2'>
                    <FiMapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-purple-600 dark:text-purple-400" />
                    {footerData?.contactDetails?.address}
                  </p>
                </div>
                
                <Link 
                  href={`mailto:${footerData?.contactDetails?.email}`}
                  className='text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-300 transition-all duration-200 flex items-center gap-2 bg-white/60 hover:bg-purple-50 dark:bg-gray-800/30 dark:hover:bg-purple-600/20 p-3 rounded-lg border border-gray-200 hover:border-purple-300 dark:border-gray-700/50 dark:hover:border-purple-500/50 shadow-sm hover:shadow-md'>
                  <FiMail className="w-4 h-4 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm">{footerData?.contactDetails?.email}</span>
                </Link>
                
                <Link 
                  href={`tel:${footerData?.contactDetails?.phone}`}
                  className='text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-300 transition-all duration-200 flex items-center gap-2 bg-white/60 hover:bg-purple-50 dark:bg-gray-800/30 dark:hover:bg-purple-600/20 p-3 rounded-lg border border-gray-200 hover:border-purple-300 dark:border-gray-700/50 dark:hover:border-purple-500/50 shadow-sm hover:shadow-md'>
                  <FiPhone className="w-4 h-4 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm">{footerData?.contactDetails?.phone}</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright modernisé avec statistiques */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className='flex flex-col lg:flex-row justify-between items-center py-8 border-t border-gray-200 dark:border-gray-700/50 gap-4'>
          
          <p className='text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2'>
            <FiHeart className="w-4 h-4 text-red-500 dark:text-red-400" />
            {footerData?.copyright}
          </p>
          
          <div className='flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400 text-sm'>
            <span className='flex items-center gap-2 bg-green-100 dark:bg-green-500/10 px-3 py-1 rounded-full border border-green-200 dark:border-green-500/20'>
              <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
              Disponible pour nouveaux projets
            </span>
            <span className='flex items-center gap-2'>
              <FiZap className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
              Réponse sous 24h
            </span>
            <span className='flex items-center gap-2'>
              <FiTrendingUp className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              100% satisfaction
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer