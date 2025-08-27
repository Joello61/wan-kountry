import ContactForm from '@/components/contact/ContactForm';
import FaqClient from '@/components/home/faq/FaqClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | JoelTech',
};

export default function Page() {
  return (
    <main>
      <ContactForm />
      <FaqClient />
    </main>
  );
}
