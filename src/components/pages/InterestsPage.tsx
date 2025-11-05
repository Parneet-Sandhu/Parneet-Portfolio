import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Camera, Book, Gamepad2, Plane, Sparkles, Coffee,Bot,Clapperboard } from "lucide-react";
import { ScrapbookCard, PushPin, WashiTape, PaperClip, FloatingSticker } from "@/components/ScrapbookDecorations";

export const InterestsPage = () => {
  const interests = [
    {
      title: "AI & Data",
      icon: Bot,
      description: "Obsessed with patterns, predictions, and possibilities. Whether it’s training models, cleaning messy data, or experimenting with new ML frameworks — I live for those aha! moments when data finally makes sense.",
      emoji: "🤖",
      color: "bg-primary/10",
      tags: ["Machine Learning","NLP","Computer Vision"],
    },
      {
        title: "Movies & Series",
        icon: Clapperboard,
        description: "Marvel nerd and anime lover! From multiverse chaos to deep anime arcs — I live for cinematic worlds, strong characters, and stories that hit both heart and brain.",
        emoji: "🎥",
        color: "bg-accent/10",
        tags: ["Marvel", "Anime", "Action"],
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
  "⚡ Can turn a random idea into a project within 24 hours (and yes, it usually works 😏)",
  "🧠 I’ve got over 50+ unfinished but genius ideas sleeping in my notes app",
  "🎨 Love mixing science, art, and aesthetics — think data with personality",
  "☕ I once trained a model all night just for fun (and coffee was my only friend)",
  "🎧 Created my own 'focus' playlists that hit harder than caffeine",
  "👗 Dream collab? Tech × Fashion × AI — the future’s wearable 🤖",
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
          <h2 className="text-5xl md:text-6xl font-bold flex flex-wrap items-center justify-center gap-3">
            <span className="magazine-word font-marker text-[hsl(343,90%,61%)]">My</span>
            <span className="magazine-word font-rock text-[hsl(271,76%,53%)]">Interests</span>
            <span className="magazine-word font-gloria text-[hsl(189,94%,43%)]">💫</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body">
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
                initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -5 : 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="relative"
              >
                <ScrapbookCard 
                  className={`${interest.color} shadow-scrapbook p-6 h-full`}
                  rotation={[-2, 1, -1, 2, -1.5, 1.5][index % 6]}
                >
                  {index % 3 === 0 && <PushPin className="top-2 right-4" />}
                  {index % 3 === 1 && <PaperClip className="top-2 left-4" />}
                  {index % 3 === 2 && <WashiTape className="top-0 left-1/4 w-1/2" color="primary" />}
                  
                  <FloatingSticker 
                    emoji={interest.emoji} 
                    className={`${index % 2 === 0 ? '-top-8 -right-8 text-7xl' : '-top-6 -right-6 text-6xl'} opacity-20`} 
                    delay={0.3 + index * 0.1} 
                  />

                  <div className="relative z-10 space-y-4">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-3">
                      <Icon className="w-8 h-8 text-primary" />
                      <h3 className="text-2xl font-elegant font-bold text-primary">
                        {interest.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-foreground font-body text-sm leading-relaxed">
                      {interest.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {interest.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-background border border-accent/30 rounded-full text-xs font-body font-medium text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrapbookCard>
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
            <h3 className="text-3xl font-elegant font-bold text-primary mb-6 text-center">
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
                  <p className="font-body text-foreground flex-1">
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
          <p className="text-2xl font-elegant text-primary italic">
            "Life is about balance - code hard, play harder!" 🌈✨
          </p>
        </motion.div>
      </div>
    </div>
  );
};
