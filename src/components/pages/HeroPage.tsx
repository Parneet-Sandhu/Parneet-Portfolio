import { motion } from "framer-motion";
import heroImage from "@/assets/hero-workspace.jpg";
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
      <FloatingSticker emoji="⭐" className="top-20 left-10" delay={0} />
      <FloatingSticker emoji="💖" className="bottom-20 right-10" delay={0.2} />
      <FloatingSticker emoji="✨" className="top-1/3 right-20" delay={0.4} />
      <FloatingSticker emoji="🌸" className="bottom-32 left-20" delay={0.6} />
      <FloatingSticker emoji="🎀" className="top-1/4 right-1/4" delay={0.8} />
      <FloatingSticker emoji="💫" className="bottom-1/4 left-1/3" delay={1} />
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
                Hello! 👋
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
              Welcome to my creative corner! 🎨 I'm an AI Engineer and Computer Science student from Bathinda, Punjab. Specializing in AI, machine learning, and full-stack development. This is not your typical portfolio - it's a fun scrapbook of my journey! ✨
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
                <p className="text-3xl font-bold text-primary font-elegant">4+</p>
                <p className="text-sm text-muted-foreground font-body">Projects</p>
              </div>
              <div className="bg-card p-4 rounded-2xl shadow-md border-2 border-accent/20">
                <p className="text-3xl font-bold text-primary font-elegant">3</p>
                <p className="text-sm text-muted-foreground font-body">Internships</p>
              </div>
              <div className="bg-card p-4 rounded-2xl shadow-md border-2 border-accent/20">
                <p className="text-3xl font-bold text-primary font-elegant">7.93</p>
                <p className="text-sm text-muted-foreground font-body">CGPA</p>
              </div>
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
                    🖼️ Photo placeholder - Add your image! ✨
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
              <FloatingSticker emoji="💫" className="-top-8 -left-8" delay={0.5} />
              <FloatingSticker emoji="🌸" className="-bottom-6 -right-6" delay={0.7} />
              <FloatingSticker emoji="✨" className="top-1/4 -left-12" delay={0.9} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
