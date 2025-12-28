import { motion } from "framer-motion";
import { Home, User, GraduationCap, Briefcase, Code, FolderGit2, BookOpen, Music, Heart, Mail, FileText, ChevronRight } from "lucide-react";

interface NavigationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const pages = [
  { id: 0, icon: Home, label: "Home" },
  { id: 1, icon: User, label: "About" },
  { id: 2, icon: GraduationCap, label: "Education" },
  { id: 3, icon: Briefcase, label: "Experience" },
  { id: 4, icon: Code, label: "Skills" },
  { id: 5, icon: FolderGit2, label: "Projects" },
  { id: 6, icon: BookOpen, label: "Blog" },
  { id: 7, icon: Music, label: "Music" },
  { id: 8, icon: Heart, label: "Interests" },
  { id: 9, icon: Mail, label: "Contact" },
  { id: 10, icon: FileText, label: "Resume" },
];

export const Navigation = ({ currentPage, setCurrentPage }: NavigationProps) => {
  const totalPages = pages.length;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b-2 border-foreground/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.h1 
            className="text-2xl md:text-3xl font-title text-primary tracking-wider"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Parneet's Lab
          </motion.h1>
          
          {/* Navigation with adventure style */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="w-10 h-10 bg-card rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent/30 transition-all border-2 border-foreground/10 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg font-bold">←</span>
            </motion.button>
            
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border-2 border-foreground/10">
              <span className="font-display font-semibold text-foreground">
                {pages[currentPage].label}
              </span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
            
            <motion.button
              onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              className="w-10 h-10 bg-card rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent/30 transition-all border-2 border-foreground/10 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg font-bold">→</span>
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};