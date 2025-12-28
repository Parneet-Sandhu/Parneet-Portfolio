import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Eye, FileText, Sparkles } from "lucide-react";

export const ResumePage = () => {
  const resumeHighlights = [
    {
      category: "Education",
      items: ["M.Tech in CSE (Cyber Security) - CUPB", "B.Tech in CSE - MRSPTU", "CGPA: 7.93"],
      icon: "🎓",
    },
    {
      category: "Experience",
      items: ["AI Engineering Intern - Cardekho", "Product Evaluator - Phia", "Data Science Intern - Dosh.ai", "Python Developer - Technopedia"],
      icon: "💼",
    },
    {
      category: "Skills",
      items: ["Python, Java, C++, JavaScript", "TensorFlow, PyTorch, Scikit-learn", "Django, Flask, Node.js, REST APIs"],
      icon: "💻",
    },
    {
      category: "Projects",
      items: ["De-Extinct AI - Genetic Revival Tool", "Diagno-AI - 4-in-1 Disease Predictor", "Virtual Try-On with MediaPipe"],
      icon: "🚀",
    },
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
          <div className="flex items-center justify-center gap-3">
            <FileText className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-marker text-primary">Resume</h2>
          </div>
          <p className="text-lg font-script text-secondary">
            Download my complete professional profile
          </p>
        </motion.div>

        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="section-card"
        >
          {/* Header Section */}
          <div className="text-center pb-6 border-b border-foreground/10 mb-6">
            <h3 className="text-3xl font-marker text-primary mb-1">Parneet Kaur Sandhu</h3>
            <p className="text-lg font-typewriter text-secondary">AI Engineer & Computer Science Student</p>
            <p className="font-typewriter text-sm text-muted-foreground mt-2">
              parneetsandhu20003@gmail.com | +91 77174-77651 | Bathinda, Punjab
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {resumeHighlights.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-4 bg-card rounded-lg border border-foreground/10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{section.icon}</span>
                  <h4 className="text-lg font-marker text-primary">{section.category}</h4>
                </div>
                <ul className="space-y-1">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 font-typewriter text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="flex-1 bg-primary font-typewriter gap-2" size="lg">
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
            <Button variant="outline" className="flex-1 font-typewriter gap-2 border-foreground/20" size="lg">
              <Eye className="w-5 h-5" />
              View Full Resume
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-4"
        >
          <div className="section-card text-center py-4">
            <Sparkles className="w-6 h-6 text-primary mx-auto mb-1" />
            <p className="text-2xl font-marker text-primary">3</p>
            <p className="text-xs font-typewriter text-muted-foreground">Internships</p>
          </div>
          <div className="section-card text-center py-4">
            <FileText className="w-6 h-6 text-primary mx-auto mb-1" />
            <p className="text-2xl font-marker text-primary">7.93</p>
            <p className="text-xs font-typewriter text-muted-foreground">CGPA</p>
          </div>
          <div className="section-card text-center py-4">
            <Eye className="w-6 h-6 text-primary mx-auto mb-1" />
            <p className="text-2xl font-marker text-primary">5+</p>
            <p className="text-xs font-typewriter text-muted-foreground">Major Projects</p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center p-4 bg-secondary/10 rounded-lg"
        >
          <p className="font-script text-primary">
            Click the button above to download my complete resume!
          </p>
        </motion.div>
      </div>
    </div>
  );
};