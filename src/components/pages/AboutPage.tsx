import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Coffee, Music, Palette, Sparkles } from "lucide-react";

export const AboutPage = () => {
  const interests = [
    { icon: Code2, text: "Coding & Problem Solving", color: "text-primary" },
    { icon: Coffee, text: "Coffee Enthusiast ☕", color: "text-accent" },
    { icon: Music, text: "Music Lover 🎵", color: "text-primary" },
    { icon: Palette, text: "Creative Design", color: "text-accent" },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h2 className="text-5xl md:text-6xl font-handwriting font-bold text-primary">
            About Me ✨
          </h2>
          <p className="text-xl text-muted-foreground font-display">
            Get to know the person behind the code!
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-8 bg-card border-4 border-accent/20 shadow-xl relative overflow-hidden">
            {/* Decorative corner stickers */}
            <div className="absolute top-4 right-4 text-3xl animate-bounce-soft">⭐</div>
            <div className="absolute bottom-4 left-4 text-3xl animate-float">💖</div>

            <div className="space-y-6">
              {/* Intro */}
              <div className="space-y-4">
                <h3 className="text-3xl font-handwriting font-bold text-primary flex items-center gap-2">
                  <Sparkles className="w-8 h-8" />
                  Hey there!
                </h3>
                <p className="text-lg font-display leading-relaxed text-foreground">
                  I'm a Computer Science Engineering student with a passion for creating amazing digital experiences! 
                  I love turning ideas into reality through code, and I'm always excited to learn new technologies 
                  and tackle interesting challenges.
                </p>
                <p className="text-lg font-display leading-relaxed text-foreground">
                  When I'm not coding, you'll probably find me exploring new music, designing creative projects, 
                  or sipping coffee while brainstorming my next big idea. I believe in making tech fun, 
                  accessible, and beautiful! ✨
                </p>
              </div>

              {/* Personality Traits */}
              <div className="space-y-3">
                <h4 className="text-2xl font-handwriting font-bold text-secondary">
                  What makes me, me? 🌟
                </h4>
                <div className="flex flex-wrap gap-3">
                  {["Creative Thinker", "Problem Solver", "Team Player", "Fast Learner", "Detail-Oriented"].map((trait, index) => (
                    <motion.span
                      key={trait}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="px-4 py-2 bg-primary/10 border-2 border-primary/30 rounded-full text-primary font-display font-semibold"
                    >
                      {trait}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Quick Interests */}
              <div className="grid md:grid-cols-2 gap-4 pt-4">
                {interests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <motion.div
                      key={interest.text}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-background rounded-xl border-2 border-accent/20"
                    >
                      <Icon className={`w-6 h-6 ${interest.color}`} />
                      <span className="font-display font-medium">{interest.text}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Fun Fact */}
              <motion.div
                initial={{ opacity: 0, rotate: -2 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 p-6 bg-accent/10 border-l-4 border-primary rounded-r-xl"
              >
                <p className="text-lg font-handwriting">
                  <span className="font-bold text-primary text-2xl">Fun Fact:</span> I debugged my first code at 2 AM with coffee in one hand and determination in the other! 💪☕
                </p>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-handwriting text-primary italic">
            "Code is poetry written in logic" ✨
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};
