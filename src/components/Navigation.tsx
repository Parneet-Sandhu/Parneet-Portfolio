import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface NavigationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const pages = [
  { id: 0, label: "Home" },
  { id: 1, label: "About" },
  { id: 2, label: "Education" },
  { id: 3, label: "Experience" },
  { id: 4, label: "Skills" },
  { id: 5, label: "Projects" },
  { id: 6, label: "Blog" },
  { id: 7, label: "Music" },
  { id: 8, label: "Interests" },
  { id: 9, label: "Contact" },
  { id: 10, label: "Resume" },
];

export const Navigation = ({ currentPage, setCurrentPage }: NavigationProps) => {
  const totalPages = pages.length;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - cartoon style */}
          <motion.h1 
            className="text-2xl md:text-3xl font-cartoon text-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ textShadow: '1px 1px 0 hsl(var(--secondary) / 0.3)' }}
          >
            Parneet's Lab
          </motion.h1>
          
          {/* Navigation button */}
          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="w-9 h-9 flex items-center justify-center disabled:opacity-30 hover:bg-card rounded-lg transition-colors font-display font-bold text-lg"
              whileTap={{ scale: 0.95 }}
            >
              ←
            </motion.button>
            
            <button 
              className="nav-button"
              onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
            >
              <span>{pages[currentPage].label}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            
            <motion.button
              onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              className="w-9 h-9 flex items-center justify-center disabled:opacity-30 hover:bg-card rounded-lg transition-colors font-display font-bold text-lg"
              whileTap={{ scale: 0.95 }}
            >
              →
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};
