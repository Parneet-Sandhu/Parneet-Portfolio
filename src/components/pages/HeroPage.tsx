import { motion } from "framer-motion";
import heroImage from "@/assets/hero-workspace.png";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { FloatingSticker, PushPin, WashiTape } from "@/components/ScrapbookDecorations";

interface HeroPageProps {
  onNavigate: (page: number) => void;
}

export const HeroPage = ({ onNavigate }: HeroPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative">
      {/* Enhanced Floating decorations */}
      <FloatingSticker emoji="🌸" className="top-20 left-10" delay={0} />
      <FloatingSticker emoji="💖" className="bottom-20 right-10" delay={0.2} />
      <FloatingSticker emoji="🌸" className="top-1/3 right-20" delay={0.4} />
      <FloatingSticker emoji="🌸" className="bottom-32 left-20" delay={0.6} />
      <FloatingSticker emoji="🎀" className="top-1/4 right-1/4" delay={0.8} />
      <FloatingSticker emoji="🌸" className="bottom-1/4 left-1/3" delay={1} />
      <FloatingSticker emoji="🦋" className="top-1/2 left-12" delay={1.2} />

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
              <h1 className="text-5xl md:text-7xl font-elegant font-bold text-primary leading-tight">
                Hello! 
                <br />
                <span className="text-foreground">I'm Parneet Kaur Sandhu</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed"
            >
              Welcome to my creative corner! I'm an AI Engineer and Computer Science and Engineering student from Bathinda, Punjab. Specializing in AI, Machine learning, and Cyber Security. This is not your typical portfolio - it's a fun scrapbook of my journey! 
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body gap-2 shadow-lg"
                onClick={() => onNavigate(1)}
              >
                <Sparkles className="w-5 h-5" />
                Explore My Story
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="font-body border-2 border-primary hover:bg-primary/10"
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
                <p className="text-3xl font-bold text-primary font-elegant">25+</p>
                <p className="text-sm text-muted-foreground font-body">Projects</p>
              </div>
              <div className="bg-card p-4 rounded-2xl shadow-md border-2 border-accent/20">
                <p className="text-3xl font-bold text-primary font-elegant">4</p>
                <p className="text-sm text-muted-foreground font-body">Internships</p>
              </div>
              <div className="bg-card p-4 rounded-2xl shadow-md border-2 border-accent/20">
                <p className="text-3xl font-bold text-primary font-elegant">7.93</p>
                <p className="text-sm text-muted-foreground font-body">CGPA in Btech</p>
              </div>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-4 pt-6"
            >
              <a 
                href="#" 
                className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                aria-label="Medium"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                aria-label="Kaggle"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Enhanced scrapbook polaroid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Paper stack effect */}
            <div className="paper-stack relative">
              <motion.div
                className="relative"
                animate={{ rotate: [-1, 1, -1] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                {/* Polaroid with torn edges */}
                <div className="bg-white p-6 shadow-scrapbook rotate-2 border-0 relative torn-edge">
                  <PushPin className="top-2 right-4" />
                  <WashiTape className="top-0 left-1/4 w-1/2 rotate-[-3deg]" color="accent" />
                  
                  <img
                    src={heroImage}
                    alt="Creative workspace"
                    className="w-full h-auto"
                  />
                  <p className="mt-4 text-center font-elegant text-2xl text-gray-700">
                    AI/ML Engineer | Data Scientist | Research Scholar 
                  </p>
                  
                  {/* Decorative stickers on polaroid */}
                  <div className="absolute -bottom-4 -left-4 text-4xl sticker-shadow">
                    🌟
                  </div>
                  <div className="absolute -top-6 -right-6 text-3xl sticker-shadow rotate-12">
                    💕
                  </div>
                </div>
              </motion.div>

              {/* More floating decorations */}
              <FloatingSticker emoji="💗" className="-top-8 -left-8" delay={0.5} />
              <FloatingSticker emoji="🌸" className="-bottom-6 -right-6" delay={0.7} />
              <FloatingSticker emoji="🍓" className="top-1/4 -left-12" delay={0.9} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
