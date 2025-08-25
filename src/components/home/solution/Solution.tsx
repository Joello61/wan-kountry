'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMessageCircle, FiArrowUpRight, FiArrowRight, FiCheck, FiHeadphones, FiSmartphone } from 'react-icons/fi'

function Solutions() {
  const ref = useRef(null)
  const inView = useInView(ref)

  const bottomAnimation = {
    initial: { y: '5%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '5%', opacity: 0 },
    transition: { duration: 1, delay: 0.8 },
  }

  return (
    <section>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div
            ref={ref}
            className='py-16 md:py-28 px-6 border border-dark_black/10 rounded-3xl bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)] backdrop-blur-[200px] dark:opacity-80 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
            <motion.div
              {...bottomAnimation}
              className='flex flex-col gap-6 items-center md:max-w-4xl mx-auto'>
              <div className='flex flex-col gap-4 items-center text-center'>
                <h2 className='text-3xl md:text-5xl dark:text-dark_black font-bold leading-tight'>
                  Des solutions web modernes pour{' '}
                  <span className='instrument-font italic font-normal dark:text-black/70'>
                    booster votre activité
                  </span>
                </h2>
                <p className='dark:text-dark_black text-lg md:text-xl leading-relaxed max-w-3xl'>
                  Sites vitrines, e-commerces, applications web : je conçois des solutions rapides, 
                  sécurisées et adaptées au marché local (Mobile Money, mobile-first). 
                  En tant que développeur fullstack indépendant, j&apos;accompagne entrepreneurs, 
                  associations et particuliers dans leur transformation digitale.
                </p>
              </div>

              {/* CTA Button avec style amélioré */}
              <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
                <Link
                  href='contact'
                  className='group w-fit text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-full flex items-center gap-4 py-3 pl-6 pr-3 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700'>
                  <span className='group-hover:translate-x-2 transform transition-transform duration-200 ease-in-out flex items-center gap-2'>
                    <FiMessageCircle className="w-5 h-5" />
                    Demander un devis gratuit
                  </span>
                  <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-all duration-200 ease-in-out group-hover:rotate-12'>
                    <FiArrowUpRight className="w-4 h-4 text-blue-600" />
                  </div>
                </Link>

                {/* CTA secondaire */}
                <Link
                  href='#realisations'
                  className='text-dark_black/70 hover:text-dark_black font-medium underline underline-offset-4 hover:underline-offset-8 transition-all duration-200 flex items-center gap-2'>
                  <span>Voir mes réalisations</span>
                  <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Points de confiance */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-dark_black/60 dark:text-black/60">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <FiCheck className="w-3 h-3 text-white" />
                  </div>
                  <span>Devis gratuit en 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <FiHeadphones className="w-3 h-3 text-white" />
                  </div>
                  <span>Support après livraison</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    <FiSmartphone className="w-3 h-3 text-white" />
                  </div>
                  <span>Mobile Money accepté</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions