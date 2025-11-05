import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye, FileText, Sparkles } from "lucide-react";
import { ScrapbookCard, PushPin, WashiTape, FloatingSticker } from "@/components/ScrapbookDecorations";

export const ResumePage = () => {
  const resumeHighlights = [
    {
      category: "Education",
      items: ["M.Tech in CSE (Cyber Security) - CUPB","B.Tech in CSE - MRSPTU", "CGPA: 7.93"],
      icon: "🎓",
      color: "bg-accent/10",
    },
    {
      category: "Experience",
      items: ["AI Engineering Intern - Cardekho","Product Evaluator - Phia", "Data Science Intern - Dosh.ai", "Python Developer - Technopedia"],
      icon: "💼",
      color: "bg-primary/10",
    },
    {
      category: "Skills",
      items: ["Python, Java, C++, JavaScript", "TensorFlow, PyTorch, Scikit-learn", "Django, Flask, Node.js, REST APIs"],
      icon: "💻",
      color: "bg-accent/10",
    },
    {
      category: "Projects",
      items: ["De-Extinct AI - Genetic Revival Tool", "Diagno-AI - 4-in-1 Disease Predictor", "Virtual Try-On with MediaPipe"],
      icon: "🚀",
      color: "bg-primary/10",
    },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 relative">
      {/* Decorative checkered border at top */}
      <div className="fixed top-0 left-0 right-0 h-8 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 border-b-4 border-primary/30 z-50" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, #fce7f3 0px, #fce7f3 20px, #e9d5ff 20px, #e9d5ff 40px, #dbeafe 40px, #dbeafe 60px, #d1fae5 60px, #d1fae5 80px)',
      }} />
      
      <div className="container max-w-4xl mx-auto space-y-8 mt-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 relative"
        >
          {/* Floating decorative emojis */}
          <motion.span 
            className="absolute -left-12 top-0 text-4xl"
            animate={{ rotate: [0, 10, -10, 0], y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🌟
          </motion.span>
          <motion.span 
            className="absolute -right-12 top-0 text-4xl"
            animate={{ rotate: [0, -10, 10, 0], y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            ✨
          </motion.span>
          
          <h2 className="text-5xl md:text-6xl font-elegant font-bold text-primary flex items-center justify-center gap-3">
            <FileText className="w-12 h-12" />
            Resume 📄
          </h2>
          <p className="text-xl text-muted-foreground font-body">
            Download my complete professional profile
          </p>
        </motion.div>

        {/* Resume Preview Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <ScrapbookCard className="p-8 md:p-12 bg-card shadow-scrapbook paper-stack" rotation={0}>
            <PushPin className="top-6 right-8" />
            <PushPin className="top-6 left-8" />
            <WashiTape className="top-0 left-1/4 w-1/2 rotate-1" color="primary" />
            
            <FloatingSticker emoji="📄" className="-bottom-6 -left-6" delay={0.3} />
            <FloatingSticker emoji="✨" className="-top-4 -right-8" delay={0.5} />
            <FloatingSticker emoji="🌟" className="bottom-1/4 -right-8" delay={0.7} />

            <div className="space-y-8">
              {/* Header Section */}
              <div className="text-center space-y-4 pb-6 border-b-2 border-accent/30">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-4xl font-elegant font-bold text-primary mb-2">
                    Parneet Kaur Sandhu
                  </h3>
                  <p className="text-xl font-body text-secondary font-semibold">
                    AI Engineer & Computer Science Student
                  </p>
                  <p className="text-foreground font-body mt-2">
                    parneetsandhu20003@gmail.com | +91 77174-77651 | Bathinda, Punjab
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
                    className={`space-y-3 p-4 rounded-xl border-2 ${section.color} relative overflow-hidden`}
                    whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                  >
                    <div className="absolute -right-4 -top-4 text-6xl opacity-10">
                      {section.icon}
                    </div>
                    <div className="flex items-center gap-3 relative z-10">
                      <span className="text-4xl">{section.icon}</span>
                      <h4 className="text-2xl font-elegant font-bold text-primary">
                        {section.category}
                      </h4>
                    </div>
                    <ul className="space-y-2 pl-4 relative z-10">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-foreground font-body">
                          <span className="text-primary mt-1">★</span>
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
          </ScrapbookCard>
        </motion.div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Card className="p-6 text-center bg-primary/10 border-2 border-primary/30 hover:scale-105 transition-transform hover:rotate-2">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-elegant font-bold text-primary mb-1">
                3
              </p>
              <p className="text-sm font-body text-foreground">
                Internships
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <Card className="p-6 text-center bg-accent/10 border-2 border-accent/30 hover:scale-105 transition-transform hover:-rotate-2">
              <FileText className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-3xl font-elegant font-bold text-accent mb-1">
                7.93
              </p>
              <p className="text-sm font-body text-foreground">
                CGPA
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <Card className="p-6 text-center bg-secondary/10 border-2 border-secondary/30 hover:scale-105 transition-transform hover:rotate-1">
              <Eye className="w-8 h-8 text-secondary mx-auto mb-2" />
              <p className="text-3xl font-elegant font-bold text-secondary mb-1">
                5+
              </p>
              <p className="text-sm font-body text-foreground">
                Major Projects
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
          <p className="text-lg font-elegant text-primary">
            📥 Click the button above to download my complete resume with all details! 
          </p>
        </motion.div>
      </div>
    </div>
  );
};