import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Camera, Book, Gamepad2, Plane, Sparkles, Coffee } from "lucide-react";

export const InterestsPage = () => {
  const interests = [
    {
      title: "Photography",
      icon: Camera,
      description: "Capturing moments and experimenting with different perspectives. Love shooting landscapes and tech setups!",
      emoji: "📸",
      color: "bg-primary/10",
      tags: ["Nature", "Tech", "Street"],
    },
    {
      title: "Reading",
      icon: Book,
      description: "From sci-fi novels to tech blogs, I'm always reading something new. Currently into fantasy and self-improvement!",
      emoji: "📚",
      color: "bg-accent/10",
      tags: ["Fantasy", "Tech", "Biography"],
    },
    {
      title: "Gaming",
      icon: Gamepad2,
      description: "Strategy games and puzzle solvers are my favorites. Gaming helps me think differently and solve problems creatively!",
      emoji: "🎮",
      color: "bg-secondary/10",
      tags: ["Strategy", "Puzzle", "RPG"],
    },
    {
      title: "Travel",
      icon: Plane,
      description: "Exploring new places, cultures, and trying local food. My bucket list is always growing!",
      emoji: "✈️",
      color: "bg-primary/10",
      tags: ["Adventure", "Culture", "Food"],
    },
    {
      title: "Design",
      icon: Sparkles,
      description: "UI/UX design, graphic design, and creating aesthetically pleasing digital experiences. Design is my creative outlet!",
      emoji: "🎨",
      color: "bg-accent/10",
      tags: ["UI/UX", "Graphics", "Creative"],
    },
    {
      title: "Coffee Culture",
      icon: Coffee,
      description: "Coffee enthusiast who loves trying different brews and cafe hopping. Best code is written with good coffee!",
      emoji: "☕",
      color: "bg-secondary/10",
      tags: ["Espresso", "Latte Art", "Cafes"],
    },
  ];

  const funFacts = [
    "🎯 Can solve a Rubik's cube in under 2 minutes",
    "🌟 Binge-watched 5 tech YouTube channels last month",
    "💡 Have 27+ project ideas in my notes app",
    "🎭 Love attending tech meetups and hackathons",
    "🌱 Currently learning Japanese (まだまだです!)",
    "🎵 Created a 10-hour coding playlist",
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h2 className="text-5xl md:text-6xl font-handwriting font-bold text-primary">
            My Interests 💖
          </h2>
          <p className="text-xl text-muted-foreground font-display">
            Beyond the code - what makes me who I am
          </p>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -5 : 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
              >
                <Card className={`${interest.color} border-4 border-accent/20 shadow-xl p-6 h-full relative overflow-hidden`}>
                  {/* Decorative element */}
                  <div className="absolute -top-4 -right-4 text-7xl opacity-20">
                    {interest.emoji}
                  </div>

                  <div className="relative z-10 space-y-4">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-3">
                      <Icon className="w-8 h-8 text-primary" />
                      <h3 className="text-2xl font-handwriting font-bold text-primary">
                        {interest.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-foreground font-display text-sm leading-relaxed">
                      {interest.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {interest.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-background border border-accent/30 rounded-full text-xs font-display font-medium text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Fun Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="p-6 md:p-8 bg-primary/10 border-4 border-primary/30 shadow-xl">
            <h3 className="text-3xl font-handwriting font-bold text-primary mb-6 text-center">
              Fun Facts About Me 🎉
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl border-2 border-accent/20"
                >
                  <span className="text-2xl">{fact.split(" ")[0]}</span>
                  <p className="font-display text-foreground flex-1">
                    {fact.split(" ").slice(1).join(" ")}
                  </p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Life Motto */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-center p-6 bg-accent/10 rounded-2xl border-2 border-accent/30"
        >
          <p className="text-2xl font-handwriting text-primary italic">
            "Life is too short to not pursue what makes you happy" 🌈✨
          </p>
        </motion.div>
      </div>
    </div>
  );
};
