import { motion } from "framer-motion";
import heroImage from "@/assets/hero-workspace.jpg";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

interface HeroPageProps {
  onNavigate: (page: number) => void;
}

export const HeroPage = ({ onNavigate }: HeroPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative">
      {/* Floating decorations */}
      <motion.div
        className="absolute top-20 left-10 text-6xl opacity-20"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ⭐
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-6xl opacity-20"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        💖
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-20 text-5xl opacity-20"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        ✨
      </motion.div>

      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-handwriting font-bold text-primary leading-tight">
                Hello! 👋
                <br />
                <span className="text-foreground">I'm a CS Student</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground font-display leading-relaxed"
            >
              Welcome to my creative corner! 🎨 I'm a Computer Science Engineering student passionate about coding, creating, and making cool stuff. This is not your typical portfolio - it's a fun scrapbook of my journey! ✨
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-display gap-2 shadow-lg"
                onClick={() => onNavigate(1)}
              >
                <Sparkles className="w-5 h-5" />
                Explore My Story
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="font-display border-2 border-primary hover:bg-primary/10"
                onClick={() => onNavigate(9)}
              >
                Get in Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <div className="bg-card p-4 rounded-2xl shadow-md border-2 border-accent/20">
                <p className="text-3xl font-bold text-primary font-handwriting">10+</p>
                <p className="text-sm text-muted-foreground font-display">Projects</p>
              </div>
              <div className="bg-card p-4 rounded-2xl shadow-md border-2 border-accent/20">
                <p className="text-3xl font-bold text-primary font-handwriting">5+</p>
                <p className="text-sm text-muted-foreground font-display">Certifications</p>
              </div>
              <div className="bg-card p-4 rounded-2xl shadow-md border-2 border-accent/20">
                <p className="text-3xl font-bold text-primary font-handwriting">∞</p>
                <p className="text-sm text-muted-foreground font-display">Ideas</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Image with scrapbook style */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="relative"
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              {/* Polaroid-style frame */}
              <div className="bg-white p-4 rounded-lg shadow-2xl rotate-2 border-4 border-white">
                <img
                  src={heroImage}
                  alt="Creative workspace"
                  className="w-full h-auto rounded-md"
                />
                <p className="mt-4 text-center font-handwriting text-xl text-gray-700">
                  my happy place ☕️💻
                </p>
              </div>

              {/* Decorative tape */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-accent/50 rotate-[-5deg] blur-[1px]"></div>
            </motion.div>

            {/* Floating stickers */}
            <motion.div
              className="absolute -top-8 -left-8 text-5xl"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💫
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -right-6 text-5xl"
              animate={{ rotate: [0, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              🌸
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
