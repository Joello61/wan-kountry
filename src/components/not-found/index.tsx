import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const NotFound = () => {
  return (
    <section className="py-20 min-h-screen flex items-center" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Background décoratif */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30"
          style={{ backgroundColor: 'var(--primary)' }}
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30"
          style={{ 
            backgroundColor: 'var(--color-warning)',
            animationDelay: '2s'
          }}
        />
      </div>

      <div className='container relative z-10'>
        <div className='flex flex-col items-center gap-8 text-center'>
          <div className="hover-lift">
            <Image
              src={'/images/Notfound/notfound.png'}
              alt='Page non trouvée'
              height={380}
              width={670}
              unoptimized={true}
              className="max-w-full h-auto"
            />
          </div>
          
          <div className='max-w-xl'>
            <h1 className="text-balance mb-4">
              Oops! La page que vous recherchez{' '}
              <span className='text-gradient font-normal italic'>
                n&apos;existe pas
              </span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text)' }}>
              La page demandée est introuvable. Elle a peut-être été déplacée, 
              supprimée ou l'URL est incorrecte.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* Bouton principal */}
            <Link
              href='/'
              className='btn-primary group rounded-full flex items-center gap-4 py-3 pl-6 pr-3 hover:scale-105 transition-all duration-300'
            >
              <span className='group-hover:translate-x-2 transform transition-transform duration-200 ease-in-out'>
                Retour à l&apos;accueil
              </span>
              <div className='w-8 h-8 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-all duration-200 ease-in-out group-hover:rotate-12'
                   style={{ backgroundColor: 'var(--color-white)' }}>
                <FiArrowUpRight className="w-4 h-4" style={{ color: 'var(--primary-dark)' }} />
              </div>
            </Link>

            {/* Bouton secondaire */}
            <Link
              href='/contact'
              className='btn-ghost group rounded-full flex items-center gap-2'
            >
              <span>Nous contacter</span>
              <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          {/* Liens utiles */}
          <div className="card p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-strong)' }}>
              Liens utiles
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/services', label: 'Services' },
                { href: '/realisations', label: 'Réalisations' },
                { href: '/contact', label: 'Contact' }
              ].map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="link-primary text-sm py-2 px-3 rounded-lg transition-all duration-200 hover-lift"
                  style={{ backgroundColor: 'var(--surface)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound