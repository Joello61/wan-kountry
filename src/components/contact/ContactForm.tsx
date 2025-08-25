/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useState } from 'react'
import { 
  FiCheckCircle, 
  FiPlus, 
  FiSend, 
  FiArrowRight, 
  FiMail, 
  FiExternalLink, 
  FiClock,
  FiGlobe
} from 'react-icons/fi'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Site vitrine',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loader, setLoader] = useState(false)
  
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const reset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'Site vitrine',
      message: '',
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoader(true)

    // Remplacez par votre email
    fetch('https://formsubmit.co/ajax/tchindajoel61@gmail.com', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setSubmitted(data.success)
        setLoader(false)
        reset()
      })
      .catch((error) => {
        console.log(error.message)
        setLoader(false)
      })
  }

  // Fonction pour ouvrir WhatsApp
  const openWhatsApp = () => {
    const message = encodeURIComponent("Bonjour Joël, je suis intéressé par vos services de développement web. Pouvons-nous discuter de mon projet ?")
    const phoneNumber = "330752892073" // Remplacez par votre numéro WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <section id="contact">
      <div className='mt-5 relative w-full pt-20 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-purple_blue/20 before:via-white before:to-indigo-500/20 dark:before:from-purple_blue/10 dark:before:via-black dark:before:to-indigo-500/10 dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10'>
        <div className='container relative z-10'>
          <div className='flex flex-col gap-10 md:gap-20'>
            {/* En-tête de section */}
            <div className='relative flex flex-col text-center items-center'>
              <h2 className='font-medium w-full max-w-4xl mb-4'>
                Parlons de votre
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  {' '}projet !
                </span>
              </h2>
              <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl'>
                Un site à créer, une application à développer ou un projet à discuter ? Je suis disponible pour en parler !
              </p>
            </div>

            {submitted ? (
              /* Message de confirmation */
              <div className='flex flex-col items-center gap-6 text-center max-w-2xl mx-auto p-8 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'>
                <div className='flex flex-col items-center gap-4'>
                  <div className='bg-green-100 dark:bg-green-900/50 p-4 rounded-full'>
                    <FiCheckCircle className='w-12 h-12 text-green-600' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-green-800 dark:text-green-400 mb-2'>
                      Message envoyé avec succès !
                    </h3>
                    <p className='text-green-700 dark:text-green-300'>
                      Merci pour votre message. Je vous répondrai dans les plus brefs délais, généralement sous 24h.
                    </p>
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-4 mt-4'>
                  <button
                    onClick={() => setSubmitted(false)}
                    className='group bg-green-600 text-white font-medium rounded-xl flex items-center justify-center gap-3 py-3 px-6 hover:bg-green-700 transition-colors duration-200'>
                    <FiPlus className='w-[18px] h-[18px]' />
                    Envoyer un autre message
                  </button>
                  
                  <button
                    onClick={openWhatsApp}
                    className='group bg-green-500 text-white font-medium rounded-xl flex items-center justify-center gap-3 py-3 px-6 hover:bg-green-600 transition-colors duration-200'>
                    <Icon icon='mdi:whatsapp' width='18' height='18' />
                    Continuons sur WhatsApp
                  </button>
                </div>
              </div>
            ) : (
              /* Formulaire et informations de contact */
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
                {/* Formulaire de contact */}
                <div className='lg:col-span-2'>
                  <form
                    onSubmit={handleSubmit}
                    className='bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700'>
                    
                    <div className='mb-6'>
                      <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                        Formulaire de contact
                      </h3>
                      <p className='text-gray-600 dark:text-gray-300 text-sm'>
                        Décrivez-moi votre projet et je vous répondrai rapidement
                      </p>
                    </div>

                    <div className='space-y-6'>
                      {/* Nom */}
                      <div>
                        <label htmlFor='name' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                          Votre nom *
                        </label>
                        <input
                          className='w-full rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 outline-none transition-all duration-200 focus:border-purple_blue focus:ring-2 focus:ring-purple_blue/20 dark:bg-gray-700 dark:text-white'
                          id='name'
                          type='text'
                          name='name'
                          value={formData.name}
                          onChange={handleChange}
                          placeholder='Ex: Marie Dubois'
                          required
                        />
                      </div>

                      {/* Email et téléphone */}
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='mt-4'>
                          <label htmlFor='email' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                            Email *
                          </label>
                          <input
                            className='w-full rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 outline-none transition-all duration-200 focus:border-purple_blue focus:ring-2 focus:ring-purple_blue/20 dark:bg-gray-700 dark:text-white'
                            id='email'
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='marie@exemple.com'
                            required
                          />
                        </div>
                        <div className='mt-4'>
                          <label htmlFor='phone' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                            Téléphone
                          </label>
                          <input
                            className='w-full rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 outline-none transition-all duration-200 focus:border-purple_blue focus:ring-2 focus:ring-purple_blue/20 dark:bg-gray-700 dark:text-white'
                            id='phone'
                            type='tel'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder='+33 07 52 89 20 73'
                          />
                        </div>
                      </div>

                      {/* Sujet */}
                      <div className='mt-4'>
                        <label htmlFor='subject' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                          Type de projet
                        </label>
                        <select
                          className='w-full rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 outline-none transition-all duration-200 focus:border-purple_blue focus:ring-2 focus:ring-purple_blue/20 dark:bg-gray-700 dark:text-white'
                          name='subject'
                          id='subject'
                          value={formData.subject}
                          onChange={handleChange}>
                          <option value='Site vitrine'>Site vitrine</option>
                          <option value='E-commerce'>E-commerce</option>
                          <option value='Application web'>Application web</option>
                          <option value='Refonte de site'>Refonte de site</option>
                          <option value='Maintenance'>Maintenance</option>
                          <option value='Autre'>Autre</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className='mt-4'>
                        <label htmlFor='message' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                          Décrivez votre projet *
                        </label>
                        <textarea
                          className='w-full rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 outline-none transition-all duration-200 focus:border-purple_blue focus:ring-2 focus:ring-purple_blue/20 dark:bg-gray-700 dark:text-white resize-none'
                          name='message'
                          id='message'
                          value={formData.message}
                          onChange={handleChange}
                          placeholder='Parlez-moi de vos besoins, objectifs, délais souhaités...'
                          rows={4}
                          required
                        />
                      </div>

                      {/* Bouton d'envoi */}
                      <div className='mt-4'>
                        {!loader ? (
                          <button
                            type='submit'
                            className='w-full bg-purple_blue text-white font-semibold rounded-xl py-4 px-6 hover:bg-purple_blue/80 transition-all duration-200 flex items-center justify-center gap-3'>
                            <FiSend className='w-5 h-5' />
                            Envoyer le message
                          </button>
                        ) : (
                          <button 
                            disabled
                            className='w-full bg-gray-400 text-white font-semibold rounded-xl py-4 px-6 flex items-center justify-center gap-3'>
                            <div
                              className='animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full'
                              role='status'
                              aria-label='loading'>
                            </div>
                            Envoi en cours...
                          </button>
                        )}
                      </div>
                    </div>
                  </form>
                </div>

                {/* Informations de contact */}
                <div className='lg:col-span-1'>
                  <div className='bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8 h-fit'>
                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-6'>
                      Contact direct
                    </h3>
                    
                    <div className='space-y-4'>
                      {/* Téléphone/WhatsApp */}
                      <div className='mb-4 flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-xl'>
                        <div className='bg-green-100 dark:bg-green-900 p-3 rounded-full'>
                          <Icon icon='mdi:whatsapp' width='24' height='24' className='text-green-600' />
                        </div>
                        <div className='flex-1'>
                          <p className='font-medium text-gray-900 dark:text-white'>WhatsApp</p>
                          <p className='text-sm text-gray-600 dark:text-gray-300'>+237 07 52 89 20 73</p>
                        </div>
                        <button
                          onClick={openWhatsApp}
                          className='text-green-600 hover:text-green-700 transition-colors'>
                          <FiArrowRight className='w-5 h-5' />
                        </button>
                      </div>

                      {/* Email */}
                      <div className='mb-4 flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-xl'>
                        <div className='bg-blue-100 dark:bg-blue-900 p-3 rounded-full'>
                          <FiMail className='w-6 h-6 text-blue-600' />
                        </div>
                        <div className='flex-1'>
                          <p className='font-medium text-gray-900 dark:text-white'>Email</p>
                          <p className='text-sm text-gray-600 dark:text-gray-300'>tchindajoel61@gmail.com</p>
                        </div>
                        <a
                          href='mailto:tchindajoel61@gmail.com'
                          className='text-blue-600 hover:text-blue-700 transition-colors'>
                          <FiArrowRight className='w-5 h-5' />
                        </a>
                      </div>

                      {/* Portfolio */}
                      <div className='mb-4 flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-xl'>
                        <div className='bg-purple-100 dark:bg-purple-900 p-3 rounded-full'>
                          <FiGlobe className='w-6 h-6 text-purple-600' />
                        </div>
                        <div className='flex-1'>
                          <p className='font-medium text-gray-900 dark:text-white'>Portfolio</p>
                          <p className='text-sm text-gray-600 dark:text-gray-300'>joeltech.dev</p>
                        </div>
                        <a
                          href='https://joeltech.dev'
                          target='_blank'
                          className='text-purple-600 hover:text-purple-700 transition-colors'>
                          <FiExternalLink className='w-5 h-5' />
                        </a>
                      </div>

                      {/* LinkedIn */}
                      <div className='flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-xl'>
                        <div className='bg-blue-100 dark:bg-blue-900 p-3 rounded-full'>
                          <Icon icon='mdi:linkedin' width='24' height='24' className='text-blue-700' />
                        </div>
                        <div className='flex-1'>
                          <p className='font-medium text-gray-900 dark:text-white'>LinkedIn</p>
                          <p className='text-sm text-gray-600 dark:text-gray-300'>joel-tchinda</p>
                        </div>
                        <a
                          href='https://linkedin.com/in/joel-tchinda'
                          target='_blank'
                          className='text-blue-700 hover:text-blue-800 transition-colors'>
                          <FiExternalLink className='w-5 h-5' />
                        </a>
                      </div>
                    </div>

                    {/* Bouton WhatsApp principal */}
                    <button
                      onClick={openWhatsApp}
                      className='w-full mt-6 bg-green-500 text-white font-semibold rounded-xl py-4 px-6 hover:bg-green-600 transition-colors duration-200 flex items-center justify-center gap-3'>
                      <Icon icon='mdi:whatsapp' width='20' height='20' />
                      Discutons sur WhatsApp
                    </button>

                    {/* Informations supplémentaires */}
                    <div className='mt-6 p-4 bg-purple_blue/10 dark:bg-purple_blue/20 rounded-xl'>
                      <h4 className='font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2'>
                        <FiClock className='w-[18px] h-[18px] text-purple_blue' />
                        Délai de réponse
                      </h4>
                      <p className='text-sm text-gray-600 dark:text-gray-300'>
                        Je réponds généralement sous 24h. Pour les urgences, contactez-moi directement sur WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm