import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export const ExperiencePage = () => {
  const experiences = [
    {
      role: "AI Engineering Intern",
      company: "Cardekho Group",
      location: "Gurugram",
      period: "Jan 2025 – Jul 2025",
      description: "Engineered production-grade conversational AI features and RAG-based chatbots using OpenAI and DeepSeek APIs",
      achievements: [
        "Engineered 10+ conversational AI features with OpenAI APIs for production-grade chatbot interactions",
        "Integrated Function Calling, streaming, TTS/STT modules, enhancing response generation by 60%",
        "Implemented RAG-based chatbot with ~90% accuracy while reducing token cost by ~40%",
        "Performed LLM token efficiency analysis across GPT-4o, GPT-3.5, and DeepSeek",
        "Created 6+ backend API endpoints for real-time lead generation and chatbot communication",
        "Enabled multilingual support in Hindi (Roman & Devanagari) and English",
        "Engineered automated alert system improving reliability by 95%",
      ],
      tech: ["OpenAI API", "DeepSeek", "RAG", "Node.js", "TTS/STT", "APIs"],
    },
    {
      role: "Product Evaluator (Remote)",
      company: "Phia",
      location: "New York, NY",
      period: "Sep 2024 – Feb 2025",
      description: "Evaluated and analyzed the performance of Phia products",
      achievements: [
        "Evaluated and analyzed the performance of Phia products",
        "Testing their beta identifying areas for improvement and optimization",
        "Provided detailed feedback for product enhancement",
      ],
      tech: ["Product Testing", "Beta Analysis", "Performance Evaluation"],
    },
    {
      role: "Data Science Intern",
      company: "Dosh.ai",
      location: "New Delhi",
      period: "Jun 2024 – Jul 2024",
      description: "Developed predictive ML models and NLP solutions for multi-class classification",
      achievements: [
        "Web scraped and preprocessed 10,000+ data points with 95% data quality",
        "Developed predictive models with 90% accuracy using ML algorithms",
        "Optimized hyperparameters using Optuna for better model performance",
        "Applied NLP techniques with Spacy achieving 85% accuracy in multi-class classification",
        "Collaborated with team of 5, contributing to 20% improvement in prediction accuracy",
        "Presented weekly progress reports to senior management",
      ],
      tech: ["Python", "Beautiful Soup", "Spacy", "Optuna", "Machine Learning", "NLP"],
    },
    {
      role: "Python Developer Intern",
      company: "Technopedia Solutions Pvt Ltd",
      location: "Bathinda",
      period: "Jun 2023 – Jul 2023",
      description: "Automated data processing and developed web applications with Flask/Django",
      achievements: [
        "Automated data processing tasks, reducing manual workload by 30%",
        "Conceptualized and executed web application features boosting user engagement by 15%",
        "Executed projects using MySQL for backend data management",
        "Handled 500,000+ data records efficiently",
      ],
      tech: ["Python", "Flask", "Django", "MySQL", "Data Processing"],
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
          <h2 className="text-5xl md:text-6xl font-title text-primary tracking-wide flex items-center justify-center gap-3">
            <Briefcase className="w-12 h-12" />
            Experience 💼
          </h2>
          <p className="text-xl font-cursive text-secondary">
            Where I've worked and what I've built
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              className="relative"
            >
              <div className="section-card">
                <div className="space-y-4">
                  {/* Role and Company */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-title text-primary">
                      {exp.role}
                    </h3>
                    <p className="text-xl font-display font-semibold text-secondary">
                      {exp.company}
                    </p>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 bg-accent/30 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="font-display text-foreground">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-accent/30 px-3 py-1 rounded-full">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-display text-foreground">{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground font-body leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="font-display font-semibold text-foreground">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.15 + idx * 0.1 }}
                          className="flex items-start gap-2 text-foreground font-body"
                        >
                          <span className="text-primary mt-1">★</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tech.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.15 + idx * 0.05 }}
                        className="tag-pill text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center p-6 bg-primary/10 rounded-3xl border-2 border-primary/30"
        >
          <p className="text-lg font-cursive text-primary">
            ✨ Always open to new opportunities and exciting projects! Let's build something amazing together! 🚀
          </p>
        </motion.div>
      </div>
    </div>
  );
};