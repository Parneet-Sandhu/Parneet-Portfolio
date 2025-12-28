import { motion } from "framer-motion";
import { Code2, Wrench, Package, Database } from "lucide-react";

export const SkillsPage = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C++", level: 80 },
        { name: "C", level: 75 },
        { name: "SQL", level: 85 },
        { name: "Matlab", level: 70 },
      ],
    },
    {
      title: "AI/ML & Data Science",
      icon: Database,
      color: "text-accent",
      bgColor: "bg-accent/20",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 88 },
        { name: "Transformers", level: 92 },
        { name: "Scikit-learn", level: 90 },
        { name: "Pandas", level: 93 },
        { name: "BERT & LLMs", level: 90 },
        { name: "Spacy (NLP)", level: 87 },
        { name: "OpenCV", level: 85 },
      ],
    },
    {
      title: "Web Technologies",
      icon: Package,
      color: "text-secondary",
      bgColor: "bg-secondary/20",
      skills: [
        { name: "Django", level: 85 },
        { name: "Flask", level: 87 },
        { name: "Node.js", level: 83 },
        { name: "REST APIs", level: 90 },
        { name: "HTML/CSS", level: 88 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Git/Github", level: 90 },
        { name: "Docker", level: 82 },
        { name: "VS Code", level: 95 },
        { name: "Jupyter Notebook", level: 93 },
        { name: "Colab & Kaggle", level: 90 },
        { name: "Optuna", level: 85 },
      ],
    },
  ];

  const dataSkills = [
    "Web Scraping",
    "Model Training",
    "Machine Learning",
    "Data Cleaning",
    "Data Analysis",
    "Data Visualization",
    "Natural Language Processing",
    "Geospatial Analysis",
    "Deep Learning",
    "Large Language Models",
    "Computer Vision",
    "RAG Systems",
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
          <h2 className="text-5xl md:text-6xl font-title text-primary tracking-wide">
            Skills & Tech Stack 
          </h2>
          <p className="text-xl font-cursive text-secondary">
            My toolbox of technologies and expertise
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + categoryIndex * 0.1 }}
                className="relative"
              >
                <div className={`section-card ${category.bgColor} h-full`}>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className={`w-8 h-8 ${category.color}`} />
                    <h3 className="text-xl font-title text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-display font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm font-display text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-3 bg-background/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{
                              delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05,
                              duration: 0.8,
                              ease: "easeOut",
                            }}
                            className={`h-full ${category.color === "text-primary" ? "bg-primary" : category.color === "text-accent" ? "bg-accent" : "bg-secondary"} rounded-full`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Data Science Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="section-card">
            <h3 className="text-2xl font-title text-primary mb-6 text-center">
              Data Science & AI Expertise ✨
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {dataSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.05 }}
                  className="tag-pill hover:scale-110 transition-transform cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center p-6 bg-accent/20 rounded-3xl"
        >
          <p className="text-lg font-cursive text-primary">
            🌱 Always learning and adding new skills to my arsenal! Currently mastering Cyber Security! 🚀🔐
          </p>
        </motion.div>
      </div>
    </div>
  );
};