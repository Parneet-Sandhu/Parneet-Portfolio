import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ScrapbookCard, PushPin, WashiTape, PaperClip, FloatingSticker } from "@/components/ScrapbookDecorations";

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
      description: "A cozy pixel-themed app built for the September 2025 Vibe Coding Challenge. It blends music, mood, and daily quotes into one aesthetic space. Users can add songs as colorful sticky notes, switch between pixel themes like Sunset or Coffee Shop, and enjoy new September-inspired quotes every day.",
      tech: ["React Expo", "TypeScript", "GitHub Copilot", "Pixel UI Design"],
      image: pixelSeptemberImage,
      color: "bg-secondary/10",
      date: "Sep 2025",
      github: "https://github.com/Parneet-Sandhu/September-Playlist-Board",
    },
        {
      title: "EllaBella-AI",
      description: "My personal AI project designed to simulate natural, friendly, and intelligent human-like conversations. EllaBella-AI integrates NLP and machine learning to understand context, respond conversationally, and continuously learn from interactions — a step toward building emotionally aware AI assistants.",
      tech: ["Python", "Natural Language Processing", "Machine Learning", "Transformers"],
      image: ellabellaImage,
      color: "bg-accent/10",
      date: "Jan 2024",
      github: "https://github.com/Parneet-Sandhu/EllaBella-AI",
    },
    {
      title: "Diagno-AI",
      description: "Engineered a 4-in-1 disease prediction app (Parkinson's, Lung Cancer, Heart Disease, Diabetes) using Streamlit and pre-trained ML models with 90+ accuracy. Boosted user engagement by 60% with dynamic UI.",
      tech: ["Streamlit", "Machine Learning", "Python", "Healthcare AI"],
      image: diagnoAIImage,
      color: "bg-accent/10",
      date: "Mar 2025",
      github: "https://github.com/Parneet-Sandhu/Diagno-AI",
    },
    {
      title: "Bacohowl",
      description: "A cute Ghibli-style digital MP3 player built with Flutter. Bacohowl lets users play their favorite songs, customize wallpapers, and enjoy a cozy, aesthetic music experience. Inspired by Studio Ghibli’s calm and dreamy vibes, it blends design, nostalgia, and functionality beautifully.",
      tech: ["Flutter", "Dart", "Firebase", "UI/UX Design"],
      image: bacohowlImage,
      color: "bg-primary/10",
      date: "Feb 2025",
      github: "https://github.com/Parneet-Sandhu/bacohowl",
    },
    {
      title: "Virtual Try-On",
      description: "Established a virtual try-on app using MediaPipe, OpenCV, and Tkinter/Kivy allowing users to try on accessories in real time with 92% satisfaction rate in user tests.",
      tech: ["MediaPipe", "OpenCV", "Tkinter", "Computer Vision"],
      image: virtualTryOnImage,
      color: "bg-secondary/10",
      date: "Nov 2024",
      github: "https://github.com/Parneet-Sandhu/Virtual-Try-On",
    },
        {
      title: "Pacman",
      description: "A Python-based recreation of the classic Pacman arcade game. Players navigate through mazes, collect dots, and avoid ghosts while enjoying nostalgic gameplay with power-ups and dynamic levels. Built to bring back the retro arcade experience using modern Python libraries.",
      tech: ["Python", "Pygame", "NumPy", "Matplotlib"],
      image: pacman,
      color: "bg-accent/10",
      date: "Mar 2025",
      github: "https://github.com/Parneet-Sandhu/Pacman",
    },
    {
      title: "FarmTech",
      description: "Generated a machine learning model to predict the most suitable crop with 90% accuracy, based on 7 key environmental factors. Deployed as a web application.",
      tech: ["Machine Learning", "Flask", "Python", "Agriculture AI"],
      image: farmTechImage,
      color: "bg-accent/10",
      date: "Apr 2024",
      github: "https://github.com/Parneet-Sandhu/FarmTech",

    },
    {
      title: "Minesweeper Game",
      description: "A Python-based remake of the classic Minesweeper puzzle game. Players uncover squares, avoid hidden mines, and use logic to flag potential danger zones. Built with Pygame, the game offers multiple difficulty levels, timer tracking, and interactive sound effects for an engaging, nostalgic experience.",
      tech: ["Python", "Pygame"],
      image: minesweeperImage,
      color:"bg-primary/10",
      date: "Mar 2024",
      github: "https://github.com/Parneet-Sandhu/minesweeper",
    },
   {
      title: "De-Extinct AI",
      description: "Designed a genetic feasibility tool using BLAST alignment and AI thresholds to evaluate the revival potential of extinct species. Deployed with Streamlit, Biopython, and Plotly.",
      tech: ["Python", "Streamlit", "Biopython", "Plotly", "BLAST"],
      image: deExtinctImage,
      color: "bg-primary/10",
      date: "May 2025",
      github: "#",
    },
            {
      title: "Egyptian hieroglyphs",
      description: "This project focuses on the digitization, recognition, and analysis of Egyptian hieroglyphs using machine learning. The model achieved an accuracy of 92% in recognizing and classifying various hieroglyphic symbols, demonstrating the potential of AI in preserving and understanding ancient scripts.",
      tech: ["Machine Learning", "Computer Vision", "Python", "TensorFlow", "Flask"],
      image: egyptianHieroglyphsImage,
      color: "bg-accent/10",
      date: "May 2024",
      github: "https://github.com/Parneet-Sandhu/Egyptian-Hieroglyphs",

    },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h2 className="text-5xl md:text-6xl font-bold flex flex-wrap items-center justify-center gap-3">
            <span className="magazine-word font-marker text-[hsl(343,90%,61%)]">Projects</span>
            <span className="magazine-word font-rock text-[hsl(271,76%,53%)]">🚀</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body">
            Things I've built with code and creativity
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              className="group relative"
            >
              <ScrapbookCard 
                className={`${project.color} shadow-scrapbook overflow-hidden h-full flex flex-col`}
                rotation={[-2, 1.5, -1.5, 2][index % 4]}
              >
                {/* Scrapbook decorations */}
                {index % 3 === 0 && <PushPin className="top-2 right-4" />}
                {index % 3 === 1 && <PaperClip className="top-2 left-4" />}
                {index % 3 === 2 && <WashiTape className="top-0 left-1/4 w-1/2" color="accent" />}
                
                <FloatingSticker 
                  emoji={["🌟", "✨", "💖", "⭐"][index % 4]} 
                  className={`${index % 2 === 0 ? '-top-4 -right-4' : '-top-4 -left-4'}`} 
                  delay={0.3 + index * 0.1} 
                />

                {/* Date badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-body shadow-sticker">
                  {project.date}
                </div>

                {/* Image/Icon Section */}
<div className="relative bg-card flex items-center justify-center h-[280px]">
  <div className="w-[90%] h-[90%] bg-white/80 rounded-sm shadow-inner flex items-center justify-center overflow-hidden">
    <img 
      src={project.image} 
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
      style={{
        objectFit: 'cover',
        filter: 'contrast(1.05) brightness(1.02)'
      }}
    />
  </div>
  <div className="absolute top-2 right-2 text-xl animate-float">✨</div>
</div>
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-elegant font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground font-body mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-background border border-accent/30 rounded-full text-xs font-body font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2 border-primary/30 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 gap-2 bg-primary hover:bg-primary/90"
                      asChild
                    >
                    </Button>
                  </div>
                </div>
              </ScrapbookCard>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center p-6 bg-primary/10 rounded-2xl border-2 border-primary/30"
        >
          <p className="text-lg font-elegant text-primary mb-4">
            Want to see more? Check out my GitHub! 🌟
          </p>
          <Button className="bg-primary hover:bg-primary/90 gap-2" asChild>
            <a href="https://github.com/Parneet-Sandhu" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              Visit GitHub Profile
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};