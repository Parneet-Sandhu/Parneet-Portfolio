import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { HeroPage } from "@/components/pages/HeroPage";
import { AboutPage } from "@/components/pages/AboutPage";
import { EducationPage } from "@/components/pages/EducationPage";
import { ExperiencePage } from "@/components/pages/ExperiencePage";
import { SkillsPage } from "@/components/pages/SkillsPage";
import { ProjectsPage } from "@/components/pages/ProjectsPage";
import { CertificationsPage } from "@/components/pages/CertificationsPage";
import { MusicPage } from "@/components/pages/MusicPage";
import { InterestsPage } from "@/components/pages/InterestsPage";
import { ContactPage } from "@/components/pages/ContactPage";
import { ResumePage } from "@/components/pages/ResumePage";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <HeroPage key="hero" onNavigate={setCurrentPage} />,
    <AboutPage key="about" />,
    <EducationPage key="education" />,
    <ExperiencePage key="experience" />,
    <SkillsPage key="skills" />,
    <ProjectsPage key="projects" />,
    <CertificationsPage key="certifications" />,
    <MusicPage key="music" />,
    <InterestsPage key="interests" />,
    <ContactPage key="contact" />,
    <ResumePage key="resume" />,
  ];

  return (
    <div className="min-h-screen bg-background font-display overflow-x-hidden">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {pages[currentPage]}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating decorations */}
      <div className="fixed bottom-8 right-8 text-4xl animate-bounce-soft pointer-events-none opacity-30 hidden lg:block">
        ✨
      </div>
      <div className="fixed top-32 left-8 text-3xl animate-float pointer-events-none opacity-20 hidden lg:block">
        💫
      </div>
    </div>
  );
};

export default Index;
