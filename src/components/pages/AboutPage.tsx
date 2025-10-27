import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Coffee, Music, Palette, Sparkles } from "lucide-react";
import { ScrapbookCard, PushPin, WashiTape, PaperClip, FloatingSticker } from "@/components/ScrapbookDecorations";

export const AboutPage = () => {
  const interests = [
    { icon: Code2, text: "AI & Machine Learning", color: "text-primary" },
    { icon: Coffee, text: "Data Science", color: "text-accent" },
    { icon: Music, text: "NLP & Computer Vision", color: "text-primary" },
    { icon: Palette, text: "Full Stack Development", color: "text-accent" },
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
          <h2 className="text-5xl md:text-6xl font-elegant font-bold text-primary">
            About Me 💌
          </h2>
          <p className="text-xl text-muted-foreground font-body">
            I fix problems you didn’t know existed in ways you wouldn’t understand
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <ScrapbookCard className="p-8 bg-card shadow-scrapbook" rotation={-1}>
            <PushPin className="top-4 right-6" />
            <PaperClip className="top-6 left-6" />
            <WashiTape className="top-0 right-1/4 w-1/3 rotate-[2deg]" color="primary" />
            
            {/* Decorative stickers */}
            <FloatingSticker emoji="" className="-top-4 left-1/3" delay={0.4} />
            <FloatingSticker emoji="💖" className="-bottom-6 right-12" delay={0.6} />

            <div className="space-y-6">
              {/* Intro */}
              <div className="space-y-4">
                <h3 className="text-3xl font-elegant font-bold text-primary flex items-center gap-2">
                  <Sparkles className="w-8 h-8" />
                  Hey there!
                </h3>
                <p className="text-lg font-body leading-relaxed text-foreground">
                  I'm Parneet Kaur Sandhu, an AI Engineer and Computer Science student from Bathinda, Punjab! 
                  Currently pursuing my M.Tech CSE in Cyber Security at Central University of Punjab in 2025.
                </p>
                <p className="text-lg font-body leading-relaxed text-foreground">
                  I specialize in AI engineering, machine learning, and Cyber Security.I work across data science, machine learning, and creative tech, blending analytical thinking with design and storytelling. Whether it’s training models, building intelligent systems, or crafting something visually unique, I love exploring the intersection of technology and imagination.When I’m not deep into code, you’ll find me designing, brainstorming new tech ideas, or just enjoying the calm chaos of creativity. I believe innovation doesn’t have to look serious — it can be playful, powerful, and full of personality. 
                  
                  I've worked at Cardekho Group as an AI Engineering Intern, where I built conversational AI features and RAG-based 
                  chatbots. I'm passionate about NLP, Deep Learning, and creating innovative solutions! 
                </p>
              </div>

              {/* Personality Traits */}
              <div className="space-y-3">
                <h4 className="text-2xl font-elegant font-bold text-secondary">
                  What makes me, me? 🌟
                </h4>
                <div className="flex flex-wrap gap-3">
                  {["AI Enthusiast", "Problem Solver", "Team Player", "Fast Learner", "Detail-Oriented"].map((trait, index) => (
                    <motion.span
                      key={trait}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="px-4 py-2 bg-primary/10 border-2 border-primary/30 rounded-full text-primary font-body font-semibold"
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
                      <span className="font-body font-medium">{interest.text}</span>
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
                <p className="text-lg font-elegant">
                  <span className="font-bold text-primary text-2xl">Fun Fact:</span> I've reduced token costs by 40% while maintaining 90% accuracy in RAG systems! 
                </p>
              </motion.div>
            </div>
          </ScrapbookCard>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-elegant text-primary italic">
            "Trust me, I’m an Engineer… most days." 
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};
