import { FiMessageCircle, FiUser } from "react-icons/fi";
import Image from 'next/image';

function SingleTestimonial({ testimonial }: { testimonial: any }) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
      {/* Icône de citation */}
      <div className="flex justify-start mb-4">
        <FiMessageCircle size={32} className="text-purple_blue opacity-60" />
      </div>

      {/* Texte du témoignage */}
      <blockquote className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed italic">
        &quot;{testimonial.text}&quot;
      </blockquote>

      {/* Informations client */}
      <div className="flex items-center gap-3">
        {testimonial.avatar ? (
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 bg-purple_blue/20 rounded-full flex items-center justify-center">
            <FiUser size={24} className="text-purple_blue" />
          </div>
        )}

        <div>
          <p className="font-semibold text-gray-900 dark:text-white text-sm">
            {testimonial.name}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            {testimonial.position}
          </p>
        </div>
      </div>

      {/* Badge projet (optionnel) */}
      {testimonial.project && (
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          <span className="text-xs bg-purple_blue/10 text-purple_blue px-3 py-1 rounded-full">
            Projet: {testimonial.project}
          </span>
        </div>
      )}
    </div>
  );
}

export default SingleTestimonial;