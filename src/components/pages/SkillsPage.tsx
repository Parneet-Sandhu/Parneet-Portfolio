import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Wrench, Package } from "lucide-react";

export const SkillsPage = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 },
        { name: "SQL", level: 75 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: Package,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Next.js", level: 75 },
        { name: "MongoDB", level: 80 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 85 },
        { name: "Docker", level: 70 },
        { name: "Postman", level: 85 },
        { name: "Firebase", level: 80 },
      ],
    },
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
          <h2 className="text-5xl md:text-6xl font-handwriting font-bold text-primary">
            Skills & Tech Stack 💻
          </h2>
          <p className="text-xl text-muted-foreground font-display">
            My toolbox of technologies and expertise
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + categoryIndex * 0.1 }}
              >
                <Card className={`p-6 ${category.bgColor} border-4 border-accent/20 shadow-xl hover:shadow-2xl transition-all h-full`}>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className={`w-8 h-8 ${category.color}`} />
                    <h3 className="text-xl font-handwriting font-bold text-foreground">
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
                        <div className="h-2 bg-background rounded-full overflow-hidden">
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
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills / Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="p-6 md:p-8 bg-card border-4 border-primary/20 shadow-xl">
            <h3 className="text-2xl font-handwriting font-bold text-primary mb-6 text-center">
              Soft Skills & More ✨
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Problem Solving",
                "Team Collaboration",
                "Communication",
                "Time Management",
                "Critical Thinking",
                "Adaptability",
                "Leadership",
                "Creativity",
                "Quick Learner",
                "Attention to Detail",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1 + index * 0.05 }}
                  className="px-4 py-2 bg-primary/10 border-2 border-primary/30 rounded-full text-primary font-display font-semibold hover:scale-110 transition-transform cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center p-6 bg-accent/10 rounded-2xl"
        >
          <p className="text-lg font-handwriting text-primary">
            🌱 Always learning and adding new skills to my arsenal! 🚀
          </p>
        </motion.div>
      </div>
    </div>
  );
};
