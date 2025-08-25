import { Metadata } from 'next';
import Achievements from '@/components/home/achievements/Achievements';
import CustomerStories from '@/components/home/customer-stories/CustomerStories';
import Faq from '@/components/home/faq/Faq';
import HeroSection from '@/components/home/hero/Hero';
import Solutions from '@/components/home/solution/Solution';
import Subscription from '@/components/home/subscription/Subscription';
import AboutSection from '@/components/home/about-us/AboutUs';
import ServicesSection from '@/components/home/services/Services';
import AtoutsSection from '@/components/home/atouts/Atouts';
import TestimonySection from '@/components/home/testimony/Testimony';
import RealisationSection from '@/components/home/realisation/Realisation';

export const metadata: Metadata = {
  title: 'Home | JoelTech',
};

export default function Home() {
  return (
    <main>
      {/* ---------------------Hero section Starts-----------------  */}
      <HeroSection />
      {/* ---------------------Hero section Ends-----------------  */}

      {/* ---------------------Web result section Starts-----------------  */}
      <AboutSection />
      {/* ---------------------Web result section Ends-----------------  */}

      {/* ---------------------Innovation section Starts-----------------  */}
      <ServicesSection />
      {/* ---------------------Innovation section Ends-----------------  */}

      {/* ---------------------Atouts section Starts-----------------  */}
      <AtoutsSection />
      {/* ---------------------Atouts section Ends-----------------  */}

      {/* ---------------------Online presence section Starts-----------------  */}
      <RealisationSection />
      {/* ---------------------Online presence section Ends-----------------  */}

      {/* ---------------------Creative mind section Starts-----------------  */}
      <TestimonySection />
      {/* ---------------------Creative mind section Ends-----------------  */}

      {/* ---------------------Customer Stories section Starts-----------------  */}
      <CustomerStories />
      {/* ---------------------Customer Stories section Ends-----------------  */}

      {/* ---------------------Subscription section Starts-----------------  */}
      <Subscription />
      {/* ---------------------Subscription section Ends-----------------  */}

      {/* ---------------------Faq section Starts-----------------  */}
      <Faq />
      {/* ---------------------Faq section Ends-----------------  */}

      {/* ---------------------Achievements section Starts-----------------  */}
      <Achievements />
      {/* ---------------------Achievements section Ends-----------------  */}

      {/* ---------------------Solutions section Starts-----------------  */}
      <Solutions />
      {/* ---------------------Solutions section Ends-----------------  */}
    </main>
  );
}
