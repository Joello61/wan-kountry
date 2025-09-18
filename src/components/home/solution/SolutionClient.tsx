'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMessageCircle, FiArrowUpRight, FiArrowRight, FiCheck, FiHeadphones, FiSmartphone } from 'react-icons/fi'

function SolutionsClient() {
  const ref = useRef(null)
  const inView = useInView(ref)

  const bottomAnimation = {
    initial: { y: '5%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '5%', opacity: 0 },
    transition: { duration: 1, delay: 0.8 },
  }

  return (
    <section className="py-20" style={{ backgroundColor: 'var(--bg)' }}>
      <div className='container'>
        <div
          ref={ref}
          className='card py-16 md:py-28 px-6 hover-lift transition-all duration-300'
          style={{
            background: 'linear-gradient(135deg, var(--primary)/5 0%, var(--color-white) 33%, var(--color-white) 65%, var(--color-warning)/5 100%)',
            backdropFilter: 'blur(12px)'
          }}>
          <motion.div
            {...bottomAnimation}
            className='flex flex-col gap-6 items-center md:max-w-4xl mx-auto'>
            <div className='flex flex-col gap-4 items-center text-center'>
              <h2 className='leading-tight text-balance' style={{ color: 'var(--text-strong)' }}>
                Des solutions web modernes pour{' '}
                <span className='text-gradient font-normal italic'>
                  booster votre activité
                </span>
              </h2>
              <p className='text-lg md:text-xl leading-relaxed max-w-3xl text-balance' 
                 style={{ color: 'var(--text)' }}>
                Sites vitrines, e-commerces, applications web : nous concevons des solutions rapides, 
                sécurisées et adaptées au marché local (Mobile Money, mobile-first). 
                Nous accompagnons entrepreneurs, 
                associations et particuliers dans leur transformation digitale.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
              {/* Bouton principal */}
              <Link
                href='/contact'
                className='btn-primary group w-fit rounded-full flex items-center gap-4 py-3 pl-6 pr-3 hover:scale-105 transition-all duration-300'>
                <span className='group-hover:translate-x-2 transform transition-transform duration-200 ease-in-out flex items-center gap-2'>
                  <FiMessageCircle className="w-5 h-5" />
                  Demander un devis gratuit
                </span>
                <div className='w-8 h-8 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-all duration-200 ease-in-out group-hover:rotate-12'
                     style={{ backgroundColor: 'var(--color-white)' }}>
                  <FiArrowUpRight className="w-4 h-4" style={{ color: 'var(--primary-dark)' }} />
                </div>
              </Link>

              {/* CTA secondaire */}
              <Link
                href='#realisations'
                className='link-primary hover:underline-offset-8 transition-all duration-200 flex items-center gap-2 group'>
                <span>Voir nos réalisations</span>
                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Points de confiance */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {[
                {
                  icon: FiCheck,
                  text: 'Devis gratuit en 24h',
                  bgColor: 'var(--color-success)'
                },
                {
                  icon: FiHeadphones,
                  text: 'Support après livraison',
                  bgColor: 'var(--primary)'
                },
                {
                  icon: FiSmartphone,
                  text: 'Mobile Money accepté',
                  bgColor: 'var(--color-warning)'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center"
                       style={{ backgroundColor: item.bgColor }}>
                    <item.icon className="w-3 h-3" style={{ color: 'var(--color-white)' }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: 'var(--text-light)' }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SolutionsClient