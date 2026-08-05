import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TickerSection from './components/TickerSection';
import PricingSection from './components/PricingSection';
import ProjectsSection from './components/ProjectsSection';
import CarouselSection from './components/CarouselSection';
import ReviewsSection from './components/ReviewsSection';
import BlogSection from './components/BlogSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import LoadingScreen from './components/LoadingScreen';
import RevealSection from './components/RevealSection';

export const metadata = {
  title: 'MyCompany | Premium digital agency',
  description: 'A modern agency landing page built with Next.js and polished interactions.'
};

export default function Home() {
  return (
    <main>
      <LoadingScreen />
      <Navigation />
      <HeroSection />
      <TickerSection />
      <RevealSection>
        <ServicesSection />
      </RevealSection>
      <RevealSection>
        <PricingSection />
      </RevealSection>
      <RevealSection>
        <ProjectsSection />
      </RevealSection>
      <CarouselSection />
      <RevealSection>
        <ReviewsSection />
      </RevealSection>
      <RevealSection>
        <BlogSection />
      </RevealSection>
      <RevealSection>
        <FaqSection />
      </RevealSection>
      <ContactSection />
      <FooterSection />
    </main>
  );
}
