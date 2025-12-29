import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export const ExperiencePage = () => {
  const experiences = [
    {
      role: "AI Engineering Intern",
      company: "Cardekho Group",
      location: "Gurugram",
      period: "Jan 2025 – Jul 2025",
      description: "Engineered production-grade conversational AI features and RAG-based chatbots",
      achievements: [
        "Engineered 10+ conversational AI features with OpenAI APIs",
        "Integrated Function Calling, streaming, TTS/STT modules, enhancing response generation by 60%",
        "Implemented RAG-based chatbot with ~90% accuracy while reducing token cost by ~40%",
        "Performed LLM token efficiency analysis across GPT-4o, GPT-3.5, and DeepSeek",
        "Created 6+ backend API endpoints for real-time lead generation",
        "Enabled multilingual support in Hindi and English",
      ],
      tech: ["OpenAI API", "DeepSeek", "RAG", "Node.js", "TTS/STT"],
    },
    {
      role: "Product Evaluator (Remote)",
      company: "Phia",
      location: "New York, NY",
      period: "Sep 2024 – Feb 2025",
      description: "Evaluated and analyzed product performance",
      achievements: [
        "Tested beta products identifying areas for improvement",
        "Provided detailed feedback for product enhancement",
      ],
      tech: ["Product Testing", "Beta Analysis"],
    },
    {
      role: "Data Science Intern",
      company: "Dosh.ai",
      location: "New Delhi",
      period: "Jun 2024 – Jul 2024",
      description: "Developed predictive ML models and NLP solutions",
      achievements: [
        "Web scraped and preprocessed 10,000+ data points with 95% quality",
        "Developed predictive models with 90% accuracy",
        "Applied NLP techniques achieving 85% accuracy in multi-class classification",
      ],
      tech: ["Python", "Spacy", "Optuna", "ML", "NLP"],
    },
    {
      role: "Python Developer Intern",
      company: "Technopedia Solutions",
      location: "Bathinda",
      period: "Jun 2023 – Jul 2023",
      description: "Automated data processing and web application development",
      achievements: [
        "Automated tasks, reducing manual workload by 30%",
        "Boosted user engagement by 15%",
        "Handled 500,000+ data records efficiently",
      ],
      tech: ["Python", "Flask", "Django", "MySQL"],
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
            <Briefcase className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl adventure-title">Experience</h2>
          </div>
          <p className="text-lg adventure-subtitle">
            Where I've worked and what I've built
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="section-card space-y-4"
            >
              <div>
                <h3 className="text-2xl font-cartoon text-primary">{exp.role}</h3>
                <p className="text-lg font-display font-semibold text-secondary">{exp.company}</p>
              </div>

              <div className="flex flex-wrap gap-3 text-sm">
                <span className="tag-pill flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </span>
                <span className="tag-pill flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </span>
              </div>

              <p className="font-body">{exp.description}</p>

              <div className="space-y-2">
                <h4 className="font-display font-semibold">Key Achievements:</h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 font-body text-sm">
                      <span className="text-primary mt-1">★</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span key={tech} className="tag-pill text-xs">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center p-4 bg-primary/10 rounded-xl"
        >
          <p className="font-display font-semibold text-primary">
            Always open to new opportunities and exciting projects!
          </p>
        </motion.div>
      </div>
    </div>
  );
};
