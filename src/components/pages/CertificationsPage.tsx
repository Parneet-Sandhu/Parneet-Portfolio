import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CertificationsPage = () => {
  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Coursera / Meta",
      date: "2024",
      description: "Comprehensive course covering React, Node.js, and database management",
      badge: "🏆",
      link: "#",
    },
    {
      title: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "300+ hours of coding challenges and algorithm implementation",
      badge: "✨",
      link: "#",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "HTML, CSS, Flexbox, Grid, and responsive design principles",
      badge: "🎨",
      link: "#",
    },
    {
      title: "Python for Data Science",
      issuer: "DataCamp",
      date: "2023",
      description: "Data analysis, visualization, and machine learning basics",
      badge: "🐍",
      link: "#",
    },
    {
      title: "Git & GitHub Essentials",
      issuer: "Udemy",
      date: "2022",
      description: "Version control, collaboration, and best practices",
      badge: "🔧",
      link: "#",
    },
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
          <h2 className="text-5xl md:text-6xl font-handwriting font-bold text-primary flex items-center justify-center gap-3">
            <Award className="w-12 h-12" />
            Certifications 🏅
          </h2>
          <p className="text-xl text-muted-foreground font-display">
            My learning journey and achievements
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? -2 : 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.03, rotate: 0 }}
            >
              <Card className="p-6 bg-card border-4 border-accent/20 shadow-xl hover:shadow-2xl transition-all h-full relative overflow-hidden">
                {/* Decorative ribbon */}
                <div className="absolute top-0 right-0 w-20 h-20">
                  <div className="absolute transform rotate-45 bg-primary text-primary-foreground text-center font-bold py-1 right-[-35px] top-[15px] w-[120px] text-xs">
                    {cert.date}
                  </div>
                </div>

                {/* Badge Icon */}
                <div className="text-6xl mb-4 animate-float">
                  {cert.badge}
                </div>

                <div className="space-y-3">
                  {/* Title */}
                  <h3 className="text-2xl font-handwriting font-bold text-primary">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-lg font-display font-semibold text-secondary">
                    {cert.issuer}
                  </p>

                  {/* Description */}
                  <p className="text-foreground font-display text-sm">
                    {cert.description}
                  </p>

                  {/* View Certificate Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2 border-primary/30 hover:bg-primary/10 mt-4"
                    asChild
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </a>
                  </Button>
                </div>

                {/* Decorative stars */}
                <div className="absolute bottom-2 left-2 text-xl opacity-30">⭐</div>
                <div className="absolute top-2 left-2 text-xl opacity-30">✨</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-3 gap-4"
        >
          <Card className="p-6 text-center bg-primary/10 border-2 border-primary/30">
            <p className="text-4xl font-handwriting font-bold text-primary mb-2">
              5+
            </p>
            <p className="text-sm font-display text-foreground">
              Certifications
            </p>
          </Card>
          <Card className="p-6 text-center bg-accent/10 border-2 border-accent/30">
            <p className="text-4xl font-handwriting font-bold text-accent mb-2">
              500+
            </p>
            <p className="text-sm font-display text-foreground">
              Learning Hours
            </p>
          </Card>
          <Card className="p-6 text-center bg-secondary/10 border-2 border-secondary/30">
            <p className="text-4xl font-handwriting font-bold text-secondary mb-2">
              ∞
            </p>
            <p className="text-sm font-display text-foreground">
              More to Learn
            </p>
          </Card>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center p-6 bg-accent/10 rounded-2xl"
        >
          <p className="text-lg font-handwriting text-primary">
            🌟 Never stop learning! The journey of knowledge is endless and exciting! 📚✨
          </p>
        </motion.div>
      </div>
    </div>
  );
};
