import { motion } from "framer-motion";
import { Binary, Code2, Database, Computer, Sparkles } from "lucide-react";

export const AboutPage = () => {
  const interests = [
    { icon: Binary, text: "AI & Machine Learning" },
    { icon: Database, text: "Data Science" },
    { icon: Code2, text: "NLP, LLMs & Computer Vision" },
    { icon: Computer, text: "Cyber Security" },
  ];

  return (
    <div className="min-h-screen p-6 pt-24">
      <div className="container max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <h2 className="text-4xl md:text-5xl font-marker text-primary">
            About Me
          </h2>
          <p className="text-lg font-script text-secondary">
            I fix problems you didn't know existed
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="section-card space-y-6"
        >
          <div className="flex items-center gap-2 text-primary">
            <Sparkles className="w-6 h-6" />
            <h3 className="text-2xl font-marker">Hey there!</h3>
          </div>
          
          <div className="space-y-4 font-typewriter text-foreground leading-relaxed">
            <p>
              I'm Parneet Kaur Sandhu, your friendly AI engineer from Bathinda, Punjab. Currently vibing my way through M.Tech CSE in Cyber Security at the Central University of Punjab (2025).
            </p>
            <p>
              I'm kinda obsessed with all things AI, ML, and Cyber Security... basically, if it's smart tech or slightly chaotic data, I'm in!! I love mixing tech, design, and creativity.
            </p>
            <p>
              I did my AI engineering internship at CarDekho Group, where I built conversational AI features and RAG-based chatbots. When I'm not lost in code, I'm probably designing something aesthetic or daydreaming new projects.
            </p>
          </div>

          {/* Traits */}
          <div className="space-y-3">
            <h4 className="text-xl font-marker text-primary">What makes me, me?</h4>
            <div className="flex flex-wrap gap-2">
              {["AI Enthusiast", "Problem Solver", "Team Player", "Fast Learner", "Detail-Oriented"].map((trait) => (
                <span key={trait} className="tag-pill">
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="grid md:grid-cols-2 gap-3">
            {interests.map((interest) => {
              const Icon = interest.icon;
              return (
                <div key={interest.text} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-foreground/10">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="font-typewriter">{interest.text}</span>
                </div>
              );
            })}
          </div>

          {/* Fun Fact */}
          <div className="p-4 bg-secondary/10 rounded-lg border-l-4 border-primary">
            <p className="font-typewriter">
              <span className="font-marker text-primary">Fun Fact:</span> I've reduced token costs by 40% while maintaining 90% accuracy in RAG systems!
            </p>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <blockquote className="text-xl font-script text-secondary italic">
            "Trust me, I'm an Engineer… most days."
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};