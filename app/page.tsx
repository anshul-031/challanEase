import HeroSection from '@/components/home/hero-section';
import ServicesSection from '@/components/home/services-section';
import FeaturesSection from '@/components/home/features-section';
import TestimonialsSection from '@/components/home/testimonials-section';
import CtaSection from '@/components/home/cta-section';
import FaqSection from '@/components/home/faq-section';
import ContactSection from '@/components/layout/contact-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <ContactSection />
    </main>
  );
}