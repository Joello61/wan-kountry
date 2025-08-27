import AboutSectionClient from '@/components/home/about-us/AboutUsClient';
import AchievementsClient from '@/components/home/achievements/AchievementsClient';
import AtoutsSectionClient from '@/components/home/atouts/AtoutsClient';
import CustomerStoriesClient from '@/components/home/customer-stories/CustomerStoriesClient';
import FaqClient from '@/components/home/faq/FaqClient';
import HeroSectionClient from '@/components/home/hero/HeroClient';
import RealisationSectionClient from '@/components/home/realisations/RealisationClient';
import ServicesSectionClient from '@/components/home/services/ServicesClient';
import SolutionsClient from '@/components/home/solution/SolutionClient';
import SubscriptionClient from '@/components/home/subscription/SubscriptionClient';
import TestimonySectionClient from '@/components/home/testimony/TestimonyClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | JoelTech',
};

export default function Home() {
  return (
    <main>
      {/* ---------------------Hero section Starts-----------------  */}
      <HeroSectionClient />
      {/* ---------------------Hero section Ends-----------------  */}

      {/* ---------------------Web result section Starts-----------------  */}
      <AboutSectionClient />
      {/* ---------------------Web result section Ends-----------------  */}

      {/* ---------------------Innovation section Starts-----------------  */}
      <ServicesSectionClient />
      {/* ---------------------Innovation section Ends-----------------  */}

      {/* ---------------------Atouts section Starts-----------------  */}
      <AtoutsSectionClient />
      {/* ---------------------Atouts section Ends-----------------  */}

      {/* ---------------------Online presence section Starts-----------------  */}
      <RealisationSectionClient />
      {/* ---------------------Online presence section Ends-----------------  */}

      {/* ---------------------Creative mind section Starts-----------------  */}
      <TestimonySectionClient />
      {/* ---------------------Creative mind section Ends-----------------  */}

      {/* ---------------------Customer Stories section Starts-----------------  */}
      <CustomerStoriesClient />
      {/* ---------------------Customer Stories section Ends-----------------  */}

      {/* ---------------------Subscription section Starts-----------------  */}
      <SubscriptionClient />
      {/* ---------------------Subscription section Ends-----------------  */}

      {/* ---------------------Faq section Starts-----------------  */}
      <FaqClient />
      {/* ---------------------Faq section Ends-----------------  */}

      {/* ---------------------Achievements section Starts-----------------  */}
      <AchievementsClient />
      {/* ---------------------Achievements section Ends-----------------  */}

      {/* ---------------------Solutions section Starts-----------------  */}
      <SolutionsClient />
      {/* ---------------------Solutions section Ends-----------------  */}
    </main>
  );
}
