import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/sections/HeroSection';
import HowItWorksSection from '@/sections/HowItWorksSection';
import TherapistCarouselSection from '@/sections/TherapistCarouselSection';
import ComparisonSection from '@/sections/ComparisonSection';
import VideoStorySection from '@/sections/VideoStorySection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import TreatmentPackagesSection from '@/sections/TreatmentPackagesSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <TherapistCarouselSection />
        <ComparisonSection />
        <VideoStorySection />
        <TestimonialsSection />
        <TreatmentPackagesSection />
      </main>
      <Footer />
    </div>
  );
}
