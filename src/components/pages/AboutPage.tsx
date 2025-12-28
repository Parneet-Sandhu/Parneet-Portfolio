import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Binary, Code2, Database, Computer, Sparkles } from "lucide-react";

export const AboutPage = () => {
  const interests = [
    { icon: Binary, text: "AI & Machine Learning", color: "text-primary" },
    { icon: Database, text: "Data Science", color: "text-accent" },
    { icon: Code2, text: "NLP, LLMs & Computer Vision", color: "text-primary" },
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
          <h2 className="text-5xl md:text-6xl font-title text-primary tracking-wide">
            About Me 💌
          </h2>
          <p className="text-xl font-cursive text-secondary">
            I fix problems you didn't know existed in ways you wouldn't understand
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="section-card"
        >
          <div className="space-y-6">
            {/* Intro */}
            <div className="space-y-4">
              <h3 className="text-3xl font-title text-primary flex items-center gap-2">
                <Sparkles className="w-8 h-8" />
                Hey there!
              </h3>
              <p className="text-lg font-body leading-relaxed text-foreground">
                I'm Parneet Kaur Sandhu, your friendly AI engineer from Bathinda, Punjab. Currently vibing my way through M.Tech CSE in Cyber Security at the Central University of Punjab (2025).
                I'm kinda obsessed with all things AI, ML, and Cyber Security... basically, if it's smart tech or slightly chaotic data, I'm in!!
              </p>
              <p className="text-lg font-body leading-relaxed text-foreground">
                I love mixing tech, design, and creativity; one day I'm training models, the next I'm sketching ideas or building something that makes people go "wait, you made that?!"
                I did my AI engineering internship at CarDekho Group, where I built conversational AI features and RAG-based chatbots (yeah, my bots actually get you, ahaa!!!).
                When I'm not lost in code, I'm probably designing something aesthetic, daydreaming new projects, or just embracing the calm chaos of creativity. Innovation doesn't have to wear a suit... sometimes it's pink, sparkly, and full of personality.
              </p>
            </div>

            {/* Personality Traits */}
            <div className="space-y-4">
              <h4 className="text-2xl font-title text-primary">
                What makes me, me? 🌟
              </h4>
              <div className="flex flex-wrap gap-3">
                {["AI Enthusiast", "Problem Solver", "Team Player", "Fast Learner", "Detail-Oriented"].map((trait, index) => (
                  <motion.span
                    key={trait}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="tag-pill"
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
                    className="flex items-center gap-3 p-4 bg-card rounded-2xl border-2 border-foreground/10"
                  >
                    <Icon className={`w-6 h-6 ${interest.color}`} />
                    <span className="font-display font-medium">{interest.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Fun Fact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 bg-accent/20 rounded-2xl border-l-4 border-primary"
            >
              <p className="text-lg font-body">
                <span className="font-title text-primary text-2xl">Fun Fact:</span> I've reduced token costs by 40% while maintaining 90% accuracy in RAG systems! 
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-cursive text-secondary italic">
            "Trust me, I'm an Engineer… most days." 
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};