import { motion } from "framer-motion";
import { Home, User, GraduationCap, Briefcase, Code, FolderGit2, Award, Music, Heart, Mail, FileText } from "lucide-react";

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
  { id: 6, icon: Award, label: "Certifications" },
  { id: 7, icon: Music, label: "Music" },
  { id: 8, icon: Heart, label: "Interests" },
  { id: 9, icon: Mail, label: "Contact" },
  { id: 10, icon: FileText, label: "Resume" },
];

export const Navigation = ({ currentPage, setCurrentPage }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b-4 border-primary/20 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.h1 
            className="text-2xl md:text-3xl font-handwriting font-bold text-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            ✨ My Portfolio
          </motion.h1>
          
          <div className="hidden lg:flex gap-2 overflow-x-auto">
            {pages.map((page) => {
              const Icon = page.icon;
              const isActive = currentPage === page.id;
              
              return (
                <motion.button
                  key={page.id}
                  onClick={() => setCurrentPage(page.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-display text-sm transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-card hover:bg-accent text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden xl:inline">{page.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center gap-2">
            <span className="text-sm font-display text-muted-foreground">
              Page {currentPage + 1}/{pages.length}
            </span>
            <div className="flex gap-1">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="px-3 py-1 bg-card rounded-lg disabled:opacity-50"
              >
                ←
              </button>
              <button
                onClick={() => setCurrentPage(Math.min(pages.length - 1, currentPage + 1))}
                disabled={currentPage === pages.length - 1}
                className="px-3 py-1 bg-card rounded-lg disabled:opacity-50"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
