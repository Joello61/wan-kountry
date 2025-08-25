import ContactForm from '@/components/contact/ContactForm';
import Faq from '@/components/home/faq/Faq';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contact | JoelTech',
};

export default function Page() {
  return (
    <main>
      <ContactForm />
      <Faq />
    </main>
  );
}
