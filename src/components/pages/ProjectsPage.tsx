import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

import deExtinctImage from "@/assets/de-extinct.png";
import diagnoAIImage from "@/assets/diagno-ai.png";
import virtualTryOnImage from "@/assets/virtual try on.jpg";
import farmTechImage from "@/assets/farmtech.png";
import egyptianHieroglyphsImage from "@/assets/Egyptian.jpg";
import pixelSeptemberImage from "@/assets/september.png";
import minesweeperImage from "@/assets/minesweeper.png";
import pacman from "@/assets/pacman.png";
import ellabellaImage from "@/assets/ellabella.jpg";
import bacohowlImage from "@/assets/bacohowl.png";

export const ProjectsPage = () => {
  const projects = [
    {
      title: "Pixel September Playlist Note",
      description: "A cozy pixel-themed app for the September 2025 Vibe Coding Challenge. Blends music, mood, and daily quotes.",
      tech: ["React Expo", "TypeScript", "Pixel UI"],
      image: pixelSeptemberImage,
      date: "Sep 2025",
      github: "https://github.com/Parneet-Sandhu/September-Playlist-Board",
    },
    {
      title: "EllaBella-AI",
      description: "AI project for natural, friendly human-like conversations using NLP and machine learning.",
      tech: ["Python", "NLP", "ML", "Transformers"],
      image: ellabellaImage,
      date: "Jan 2024",
      github: "https://github.com/Parneet-Sandhu/EllaBella-AI",
    },
    {
      title: "Diagno-AI",
      description: "4-in-1 disease prediction app with 90%+ accuracy using Streamlit and ML models.",
      tech: ["Streamlit", "ML", "Python"],
      image: diagnoAIImage,
      date: "Mar 2025",
      github: "https://github.com/Parneet-Sandhu/Diagno-AI",
    },
    {
      title: "Bacohowl",
      description: "Ghibli-style digital MP3 player built with Flutter. Aesthetic music experience.",
      tech: ["Flutter", "Dart", "Firebase"],
      image: bacohowlImage,
      date: "Feb 2025",
      github: "https://github.com/Parneet-Sandhu/bacohowl",
    },
    {
      title: "Virtual Try-On",
      description: "Virtual try-on app using MediaPipe and OpenCV with 92% user satisfaction.",
      tech: ["MediaPipe", "OpenCV", "Computer Vision"],
      image: virtualTryOnImage,
      date: "Nov 2024",
      github: "https://github.com/Parneet-Sandhu/Virtual-Try-On",
    },
    {
      title: "Pacman",
      description: "Python recreation of the classic Pacman arcade game.",
      tech: ["Python", "Pygame"],
      image: pacman,
      date: "Mar 2025",
      github: "https://github.com/Parneet-Sandhu/Pacman",
    },
    {
      title: "FarmTech",
      description: "ML model to predict suitable crops with 90% accuracy based on environmental factors.",
      tech: ["ML", "Flask", "Python"],
      image: farmTechImage,
      date: "Apr 2024",
      github: "https://github.com/Parneet-Sandhu/FarmTech",
    },
    {
      title: "Minesweeper Game",
      description: "Python-based remake of the classic Minesweeper puzzle game.",
      tech: ["Python", "Pygame"],
      image: minesweeperImage,
      date: "Mar 2024",
      github: "https://github.com/Parneet-Sandhu/minesweeper",
    },
    {
      title: "De-Extinct AI",
      description: "Genetic feasibility tool using BLAST alignment to evaluate extinct species revival.",
      tech: ["Python", "Streamlit", "Biopython"],
      image: deExtinctImage,
      date: "May 2025",
      github: "#",
    },
    {
      title: "Egyptian Hieroglyphs",
      description: "ML model for hieroglyph recognition with 92% accuracy.",
      tech: ["ML", "Computer Vision", "TensorFlow"],
      image: egyptianHieroglyphsImage,
      date: "May 2024",
      github: "https://github.com/Parneet-Sandhu/Egyptian-Hieroglyphs",
    },
  ];

  return (
    <div className="min-h-screen p-6 pt-24 mountains-bg">
      <div className="container max-w-5xl mx-auto space-y-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <h2 className="text-4xl md:text-5xl adventure-title">Projects</h2>
          <p className="text-lg adventure-subtitle">
            Things I've built with code and creativity
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + index * 0.05 }}
              className="section-card overflow-hidden"
            >
              {/* Image */}
              <div className="relative -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <span className="absolute top-2 right-2 tag-pill text-xs bg-card">
                  {project.date}
                </span>
              </div>

              <h3 className="text-xl font-cartoon text-primary mb-2">{project.title}</h3>
              <p className="font-body text-sm mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="tag-pill text-xs">{tech}</span>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full gap-2 font-display font-semibold border-border"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center p-4 bg-primary/10 rounded-xl"
        >
          <p className="font-display font-semibold text-primary mb-3">Want to see more?</p>
          <Button className="bg-primary font-display font-semibold gap-2" asChild>
            <a href="https://github.com/Parneet-Sandhu" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              Visit GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
