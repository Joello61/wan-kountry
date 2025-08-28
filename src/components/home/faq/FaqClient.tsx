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
    <section>
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-20">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 py-2 rounded-full border border-purple-200/50 dark:border-purple-500/30 mb-6">
                <FiHelpCircle className="text-purple-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Questions fréquentes
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-gray-800 dark:text-white">
                  Des questions ? Nous avons les {' '}
                </span>
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  réponses
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Toutes les <strong>réponses claires</strong> aux questions les
                plus courantes sur nos services.
                <br />
                <strong>Pas trouvé</strong> ce que vous cherchiez ?
                Contactez-nous !
              </p>
            </motion.div>
            <div className="flex flex-col">
              <Accordion
                type="single"
                collapsible
                className="flex flex-col gap-4"
              >
                {faqList?.map((item: any, index: any) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="p-6 border border-dark_black/10 dark:border-white/50 group"
                  >
                    <AccordionTrigger className="group-hover:cursor-pointer">
                      <div className="flex items-center gap-3">
                        <FiHelpCircle
                          size={20}
                          className="text-purple_blue flex-shrink-0"
                        />
                        <h4 className="text-dark_black dark:text-white/80 text-left">
                          {item.faq_que}
                        </h4>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex items-start gap-3 ml-8">
                        <FiSun
                          size={18}
                          className="text-yellow-500 flex-shrink-0 mt-0.5"
                        />
                        <p className="text-base font-normal text-dark_black/60 dark:text-white/60">
                          {item.faq_ans}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqClient;
