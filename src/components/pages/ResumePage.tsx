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
    <div className="min-h-screen p-6 pt-24 mountains-bg">
      <div className="container max-w-4xl mx-auto space-y-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <div className="flex items-center justify-center gap-3">
            <FileText className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl adventure-title">Resume</h2>
          </div>
          <p className="text-lg adventure-subtitle">
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
          <div className="text-center pb-6 border-b border-border/50 mb-6">
            <h3 className="text-3xl font-cartoon text-primary mb-1">Parneet Kaur Sandhu</h3>
            <p className="text-lg font-display font-semibold text-secondary">AI Engineer & Computer Science Student</p>
            <p className="font-body text-sm text-muted-foreground mt-2">
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
                className="p-4 bg-card rounded-xl border border-border/50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{section.icon}</span>
                  <h4 className="text-lg font-cartoon text-primary">{section.category}</h4>
                </div>
                <ul className="space-y-1">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 font-body text-sm">
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
            <Button className="flex-1 bg-primary font-display font-semibold gap-2 rounded-xl" size="lg">
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
            <Button variant="outline" className="flex-1 font-display font-semibold gap-2 border-border rounded-xl" size="lg">
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
            <p className="text-2xl font-cartoon text-primary">3</p>
            <p className="text-xs font-body text-muted-foreground">Internships</p>
          </div>
          <div className="section-card text-center py-4">
            <FileText className="w-6 h-6 text-primary mx-auto mb-1" />
            <p className="text-2xl font-cartoon text-primary">7.93</p>
            <p className="text-xs font-body text-muted-foreground">CGPA</p>
          </div>
          <div className="section-card text-center py-4">
            <Eye className="w-6 h-6 text-primary mx-auto mb-1" />
            <p className="text-2xl font-cartoon text-primary">5+</p>
            <p className="text-xs font-body text-muted-foreground">Major Projects</p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center p-4 bg-secondary/10 rounded-xl"
        >
          <p className="font-display font-semibold text-primary">
            Click the button above to download my complete resume!
          </p>
        </motion.div>
      </div>
    </div>
  );
};
