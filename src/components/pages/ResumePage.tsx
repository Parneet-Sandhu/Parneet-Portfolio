import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye, FileText, Sparkles } from "lucide-react";

export const ResumePage = () => {
  const resumeHighlights = [
    {
      category: "Education",
      items: ["B.Tech in Computer Science", "8.5+ GPA", "Relevant Coursework"],
      icon: "🎓",
    },
    {
      category: "Experience",
      items: ["Software Dev Intern", "Freelance Projects", "Tech Club Member"],
      icon: "💼",
    },
    {
      category: "Skills",
      items: ["React & TypeScript", "Node.js & MongoDB", "UI/UX Design"],
      icon: "💻",
    },
    {
      category: "Projects",
      items: ["10+ Completed Projects", "Full-Stack Applications", "Open Source Contributions"],
      icon: "🚀",
    },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h2 className="text-5xl md:text-6xl font-handwriting font-bold text-primary flex items-center justify-center gap-3">
            <FileText className="w-12 h-12" />
            Resume 📄
          </h2>
          <p className="text-xl text-muted-foreground font-display">
            Everything you need to know, in one document
          </p>
        </motion.div>

        {/* Resume Preview Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-8 md:p-12 bg-card border-4 border-accent/20 shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 text-5xl opacity-10 animate-spin-slow">✨</div>
            <div className="absolute bottom-4 left-4 text-5xl opacity-10 animate-float">📄</div>

            <div className="space-y-8">
              {/* Header Section */}
              <div className="text-center space-y-4 pb-6 border-b-2 border-accent/30">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-4xl font-handwriting font-bold text-primary mb-2">
                    Your Name
                  </h3>
                  <p className="text-xl font-display text-secondary font-semibold">
                    Computer Science Engineering Student
                  </p>
                  <p className="text-foreground font-display mt-2">
                    Full-Stack Developer | UI/UX Enthusiast | Problem Solver
                  </p>
                </motion.div>
              </div>

              {/* Resume Highlights Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {resumeHighlights.map((section, index) => (
                  <motion.div
                    key={section.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{section.icon}</span>
                      <h4 className="text-2xl font-handwriting font-bold text-primary">
                        {section.category}
                      </h4>
                    </div>
                    <ul className="space-y-2 pl-4">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-foreground font-display">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <Button className="flex-1 bg-primary hover:bg-primary/90 gap-2 text-lg py-6" size="lg">
                  <Download className="w-6 h-6" />
                  Download Resume
                </Button>
                <Button variant="outline" className="flex-1 gap-2 text-lg py-6 border-2 border-primary/30 hover:bg-primary/10" size="lg">
                  <Eye className="w-6 h-6" />
                  View Full Resume
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Card className="p-6 text-center bg-primary/10 border-2 border-primary/30 hover:scale-105 transition-transform">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-handwriting font-bold text-primary mb-1">
                2+
              </p>
              <p className="text-sm font-display text-foreground">
                Years Experience
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <Card className="p-6 text-center bg-accent/10 border-2 border-accent/30 hover:scale-105 transition-transform">
              <FileText className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-3xl font-handwriting font-bold text-accent mb-1">
                PDF
              </p>
              <p className="text-sm font-display text-foreground">
                Format Available
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <Card className="p-6 text-center bg-secondary/10 border-2 border-secondary/30 hover:scale-105 transition-transform">
              <Eye className="w-8 h-8 text-secondary mx-auto mb-2" />
              <p className="text-3xl font-handwriting font-bold text-secondary mb-1">
                ATS
              </p>
              <p className="text-sm font-display text-foreground">
                Optimized
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-center p-6 bg-accent/10 rounded-2xl border-2 border-accent/30"
        >
          <p className="text-lg font-handwriting text-primary">
            📬 Need a custom format? Just reach out and I'll send it your way! ✨
          </p>
        </motion.div>
      </div>
    </div>
  );
};
