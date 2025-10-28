import { motion } from "framer-motion";
import { Home, User, GraduationCap, Briefcase, Code, FolderGit2, BookOpen, Music, Heart, Mail, FileText } from "lucide-react";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b-4 border-primary/20 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.h1 
            className="text-2xl md:text-3xl font-elegant font-bold text-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            ✨ Parneet's Portfolio
          </motion.h1>
          
          {/* Simple arrow navigation for all screen sizes */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-body text-muted-foreground">
              {pages[currentPage].label} ({currentPage + 1}/{totalPages})
            </span>
            <div className="flex gap-2">
              <motion.button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="px-4 py-2 bg-card rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent transition-all shadow-sticker"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">←</span>
              </motion.button>
              <motion.button
                onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                disabled={currentPage === totalPages - 1}
                className="px-4 py-2 bg-card rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent transition-all shadow-sticker"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">→</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
