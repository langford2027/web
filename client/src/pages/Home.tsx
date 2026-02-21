import { useLocation } from "wouter";
import { Hero } from '@/components/home/Hero';
import { AboutSection } from '@/components/home/AboutSection';
import { ProgramsGrid } from '@/components/home/ProgramsGrid';
import { Accreditations } from '@/components/home/Accreditations';
import { ContactSection } from '@/components/home/ContactSection';

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="bg-white">
      <Hero onExploreClick={() => setLocation('/programs')} />
      <AboutSection />
      <ProgramsGrid />
      <Accreditations />
      <ContactSection />
    </div>
  );
}
