import Navbar from "@/components/ui/Navbar";
import Cursor from "@/components/ui/Cursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import FieldNotesSection from "@/components/sections/FieldNotesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/ui/Footer";
import AskAiModal from "@/components/ui/AskAiModal";

export default function Home() {
  return (
    <SmoothScroll>
      <Cursor />
      <Navbar />
      <AskAiModal />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <FieldNotesSection />
        <ContactSection />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
