import { motion } from "framer-motion";
import { Code2, Wrench, Package, Database } from "lucide-react";

export const SkillsPage = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "JavaScript", "Java", "C++", "C", "SQL", "Matlab"],
    },
    {
      title: "AI/ML & Data Science",
      icon: Database,
      skills: ["TensorFlow", "PyTorch", "Transformers", "Scikit-learn", "Pandas", "BERT & LLMs", "Spacy", "OpenCV"],
    },
    {
      title: "Web Technologies",
      icon: Package,
      skills: ["Django", "Flask", "Node.js", "REST APIs", "HTML/CSS"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git/Github", "Docker", "VS Code", "Jupyter", "Colab & Kaggle", "Optuna"],
    },
  ];

  const dataSkills = [
    "Web Scraping", "Model Training", "Machine Learning", "Data Cleaning",
    "Data Analysis", "Data Visualization", "NLP", "Geospatial Analysis",
    "Deep Learning", "LLMs", "Computer Vision", "RAG Systems",
  ];

  return (
    <div className="min-h-screen p-6 pt-24">
      <div className="container max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <h2 className="text-4xl md:text-5xl font-marker text-primary">
            Skills & Tech Stack
          </h2>
          <p className="text-lg font-script text-secondary">
            My toolbox of technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="section-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-marker text-primary">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="tag-pill">{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Data Science Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="section-card"
        >
          <h3 className="text-2xl font-marker text-primary mb-4 text-center">
            Data Science & AI Expertise
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {dataSkills.map((skill) => (
              <span key={skill} className="tag-pill">{skill}</span>
            ))}
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
            Always learning! Currently mastering Cyber Security
          </p>
        </motion.div>
      </div>
    </div>
  );
};