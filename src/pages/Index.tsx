import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { HeroPage } from "@/components/pages/HeroPage";
import { AboutPage } from "@/components/pages/AboutPage";
import { EducationPage } from "@/components/pages/EducationPage";
import { ExperiencePage } from "@/components/pages/ExperiencePage";
import { SkillsPage } from "@/components/pages/SkillsPage";
import { ProjectsPage } from "@/components/pages/ProjectsPage";
import { BlogPage } from "@/components/pages/BlogPage";
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
    <BlogPage key="blog" />,
    <MusicPage key="music" />,
    <InterestsPage key="interests" />,
    <ContactPage key="contact" />,
    <ResumePage key="resume" />,
  ];

  return (
    <div className="min-h-screen bg-background font-display overflow-x-hidden">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="pt-20 grid-paper min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ 
              opacity: 0, 
              rotateY: -45,
              x: "100%",
              scale: 0.8,
            }}
            animate={{ 
              opacity: 1, 
              rotateY: 0,
              x: 0,
              scale: 1,
            }}
            exit={{ 
              opacity: 0, 
              rotateY: 45,
              x: "-100%",
              scale: 0.8,
            }}
            transition={{ 
              duration: 0.6, 
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            style={{ 
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
          >
            {pages[currentPage]}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating decorations - more scattered and varied */}
      <div className="fixed bottom-8 right-8 text-5xl animate-bounce-soft pointer-events-none opacity-40 hidden lg:block sticker-shadow">
        🍓
      </div>
      <div className="fixed top-32 left-8 text-4xl animate-float pointer-events-none opacity-35 hidden lg:block sticker-shadow">
        🍓
      </div>
      <div className="fixed top-1/3 right-12 text-3xl animate-wiggle pointer-events-none opacity-30 hidden lg:block sticker-shadow">
        🌸
      </div>
      <div className="fixed bottom-1/4 left-16 text-4xl animate-float pointer-events-none opacity-35 hidden lg:block sticker-shadow" style={{ animationDelay: "1s" }}>
        💖
      </div>
      <div className="fixed top-2/3 right-24 text-3xl animate-bounce-soft pointer-events-none opacity-30 hidden lg:block sticker-shadow" style={{ animationDelay: "0.5s" }}>
        🎀
      </div>
      <div className="fixed bottom-1/2 left-1/4 text-2xl animate-float pointer-events-none opacity-25 hidden lg:block sticker-shadow" style={{ animationDelay: "1.5s" }}>
        ⭐
      </div>
    </div>
  );
};

export default Index;
