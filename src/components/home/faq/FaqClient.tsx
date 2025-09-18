/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FiHelpCircle, FiSun } from 'react-icons/fi';
import { motion } from 'framer-motion';

function FaqClient() {
  const faqList = [
    {
      faq_que: 'Combien coûte un site web ?',
      faq_ans:
        'Le prix dépend du type de site (vitrine, e-commerce, sur-mesure). Mes packs commencent à partir de 150 000 FCFA.',
    },
    {
      faq_que: 'Quels moyens de paiement acceptez-vous ?',
      faq_ans:
        'Mobile Money (MTN, Orange), virement bancaire, PayPal et Stripe.',
    },
    {
      faq_que: 'En combien de temps puis-je avoir mon site en ligne ?',
      faq_ans:
        'Un site vitrine simple peut être prêt en 1 à 2 semaines. Pour un e-commerce ou une application, le délai dépend du projet.',
    },
    {
      faq_que: 'Mon site sera-t-il visible sur smartphone ?',
      faq_ans:
        'Oui, tous nos sites sont mobile-first et optimisés pour smartphone, tablette et PC.',
    },
    {
      faq_que: 'Proposez-vous un suivi après la livraison ?',
      faq_ans:
        'Oui, nous proposons des forfaits de maintenance pour assurer la sécurité et les mises à jour.',
    },
    {
      faq_que: 'Est-ce que je peux mettre à jour mon site moi-même ?',
      faq_ans:
        'Oui, nous fournissons une interface simple et une formation pour que vous puissiez modifier vos contenus sans difficulté.',
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container">
        <div className="flex flex-col gap-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass-effect">
              <FiHelpCircle style={{ color: 'var(--primary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                Questions fréquentes
              </span>
            </div>

            {/* Titre principal */}
            <h2 className="mb-6 text-balance">
              Des questions ? Nous avons les{' '}
              <span className="text-gradient">réponses</span>
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-balance"
               style={{ color: 'var(--text)' }}>
              Toutes les <strong style={{ color: 'var(--text-strong)' }}>réponses claires</strong> aux questions les
              plus courantes sur nos services.
              <br />
              <strong style={{ color: 'var(--text-strong)' }}>Pas trouvé</strong> ce que vous cherchiez ?
              Contactez-nous !
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="flex flex-col max-w-4xl mx-auto w-full">
            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-4"
            >
              {faqList?.map((item: any, index: any) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="card p-6 group hover-lift transition-all duration-300"
                    style={{
                      borderColor: 'var(--border)',
                    }}
                  >
                    <AccordionTrigger className="group-hover:cursor-pointer [&[data-state=open]>div>svg]:rotate-180 transition-transform duration-200">
                      <div className="flex items-center gap-3 w-full">
                        <div className="p-2 rounded-full flex-shrink-0"
                             style={{ backgroundColor: 'var(--primary)/10' }}>
                          <FiHelpCircle
                            size={20}
                            style={{ color: 'var(--primary)' }}
                          />
                        </div>
                        <h4 className="text-left font-semibold"
                            style={{ color: 'var(--text-strong)' }}>
                          {item.faq_que}
                        </h4>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="flex items-start gap-3 ml-14">
                        <div className="p-1 rounded-full flex-shrink-0 mt-1"
                             style={{ backgroundColor: 'var(--color-warning)/10' }}>
                          <FiSun
                            size={16}
                            style={{ color: 'var(--color-warning)' }}
                          />
                        </div>
                        <p className="text-base leading-relaxed"
                           style={{ color: 'var(--text)' }}>
                          {item.faq_ans}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="card max-w-2xl mx-auto p-8">
              <h3 className="text-2xl font-semibold mb-4" 
                  style={{ color: 'var(--text-strong)' }}>
                Vous avez d'autres questions ?
              </h3>
              <p className="mb-6" style={{ color: 'var(--text)' }}>
                N'hésitez pas à nous contacter pour discuter de votre projet
                et obtenir des réponses personnalisées.
              </p>
              <a
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                <FiHelpCircle size={18} />
                Nous contacter
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FaqClient;