import { motion } from "framer-motion";
import { Camera, Gamepad2, Plane, Sparkles, Coffee, Bot, Clapperboard } from "lucide-react";

export const InterestsPage = () => {
  const interests = [
    {
      title: "AI & Data",
      icon: Bot,
      description: "Obsessed with patterns, predictions, and possibilities. Training models and experimenting with ML frameworks.",
      tags: ["Machine Learning", "NLP", "Computer Vision"],
    },
    {
      title: "Movies & Series",
      icon: Clapperboard,
      description: "Marvel nerd and anime lover! Living for cinematic worlds and strong characters.",
      tags: ["Marvel", "Anime", "Action"],
    },
    {
      title: "Gaming",
      icon: Gamepad2,
      description: "Strategy games and puzzle solvers. Gaming helps me think differently and solve problems creatively!",
      tags: ["Strategy", "Puzzle", "RPG"],
    },
    {
      title: "Travel",
      icon: Plane,
      description: "Exploring new places, cultures, and trying local food. My bucket list is always growing!",
      tags: ["Adventure", "Culture", "Food"],
    },
    {
      title: "Design",
      icon: Sparkles,
      description: "UI/UX design, graphic design, and creating aesthetically pleasing digital experiences.",
      tags: ["UI/UX", "Graphics", "Creative"],
    },
    {
      title: "Coffee Culture",
      icon: Coffee,
      description: "Coffee enthusiast who loves trying different brews and cafe hopping.",
      tags: ["Espresso", "Latte Art", "Cafes"],
    },
  ];

  const funFacts = [
    "Can turn a random idea into a project within 24 hours",
    "50+ unfinished but genius ideas in my notes app",
    "Love mixing science, art, and aesthetics",
    "Once trained a model all night just for fun",
    "Created my own 'focus' playlists",
    "Dream collab? Tech × Fashion × AI",
  ];

  return (
    <div className="min-h-screen p-6 pt-24 mountains-bg">
      <div className="container max-w-5xl mx-auto space-y-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <h2 className="text-4xl md:text-5xl adventure-title">My Interests</h2>
          <p className="text-lg adventure-subtitle">
            Beyond the code - what makes me, me!
          </p>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="section-card"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-cartoon text-primary">{interest.title}</h3>
                </div>
                <p className="font-body text-sm mb-3">{interest.description}</p>
                <div className="flex flex-wrap gap-1">
                  {interest.tags.map((tag) => (
                    <span key={tag} className="tag-pill text-xs">{tag}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="section-card"
        >
          <h3 className="text-2xl font-cartoon text-primary mb-4 text-center">Fun Facts About Me</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {funFacts.map((fact, index) => (
              <div key={index} className="flex items-start gap-2 p-3 bg-card rounded-xl border border-border/50">
                <span className="text-primary">★</span>
                <p className="font-body text-sm">{fact}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center p-4 bg-secondary/10 rounded-xl"
        >
          <p className="font-display font-semibold text-primary italic">
            "Life is about balance - code hard, play harder!"
          </p>
        </motion.div>
      </div>
    </div>
  );
};
