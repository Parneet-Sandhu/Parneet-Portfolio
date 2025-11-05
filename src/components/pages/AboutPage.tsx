import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Binary, Code2, Database, Computer, Sparkles } from "lucide-react";
import { ScrapbookCard, PushPin, WashiTape, PaperClip, FloatingSticker } from "@/components/ScrapbookDecorations";

export const AboutPage = () => {
  const interests = [
    { icon: Binary, text: "AI & Machine Learning", color: "text-primary" },
    { icon: Database, text: "Data Science", color: "text-accent" },
    { icon: Code2, text: "NLP,LLMs & Computer Vision", color: "text-primary" },
    { icon: Computer, text: "Cyber Security", color: "text-accent" },
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
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="magazine-word font-marker text-[hsl(343,90%,61%)]">About</span>
            <span className="magazine-word font-rock text-[hsl(271,76%,53%)]">Me</span>
            <span className="magazine-word font-gloria text-[hsl(189,94%,43%)]">💌</span>
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
                <h3 className="text-3xl font-bold flex items-center gap-2 flex-wrap">
                  <Sparkles className="w-8 h-8 text-[hsl(343,90%,61%)]" />
                  <span className="magazine-word font-marker text-[hsl(343,90%,61%)]">Hey</span>
                  <span className="magazine-word font-rock text-[hsl(271,76%,53%)]">there!</span>
                </h3>
                <p className="text-lg font-body leading-relaxed text-foreground">
                  I’m Parneet Kaur Sandhu, your friendly AI engineer from Bathinda, Punjab. currently vibing my way through M.Tech CSE in Cyber Security at the Central University of Punjab (2025).
                  I’m kinda obsessed with all things AI, ML, and Cyber Security .. basically, if it’s smart tech or slightly chaotic data, i’m in!!

                </p>
                <p className="text-lg font-body leading-relaxed text-foreground">
                  I love mixing tech, design, and creativity ; one day i’m training models, the next i’m sketching ideas or building something that makes people go “wait, you made that?!”

                  I did my AI engineering internship at CarDekho Group, where i built conversational AI features and RAG-based chatbots (yeah, my bots actually get you ,ahaa!!!).
                  
                  I've worked at Cardekho Group as an AI Engineering Intern, where I built conversational AI features and RAG-based 
                  chatbots. I'm passionate about NLP, Deep Learning, and creating innovative solutions! 

                  When i’m not lost in code, i’m probably designing something aesthetic, daydreaming new projects, or just embracing the calm chaos of creativity. innovation doesn’t have to wear a suit...sometimes it’s pink, sparkly, and full of personality
                </p>
              </div>

              {/* Personality Traits */}
              <div className="space-y-3">
                <h4 className="text-2xl font-bold flex flex-wrap">
                  <span className="magazine-word font-shadow text-[hsl(142,71%,45%)]">What</span>
                  <span className="magazine-word font-marker text-[hsl(343,90%,61%)]">makes</span>
                  <span className="magazine-word font-rock text-[hsl(271,76%,53%)]">me,</span>
                  <span className="magazine-word font-gloria text-[hsl(189,94%,43%)]">me?</span>
                  <span className="magazine-word font-architect text-[hsl(45,93%,47%)]">🌟</span>
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
