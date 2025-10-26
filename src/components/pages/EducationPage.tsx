import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Award } from "lucide-react";

export const EducationPage = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      major: "Computer Science Engineering",
      institution: "Your University Name",
      period: "2021 - 2025",
      gpa: "8.5/10",
      highlights: [
        "Relevant Coursework: Data Structures, Algorithms, Web Development, AI/ML",
        "Active member of the Coding Club",
        "Participated in multiple hackathons and tech events",
      ],
    },
    {
      degree: "Higher Secondary Education",
      major: "Science Stream (PCM)",
      institution: "Your School Name",
      period: "2019 - 2021",
      gpa: "92%",
      highlights: [
        "Computer Science as main subject",
        "School tech team member",
        "Science exhibition participant",
      ],
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
            <GraduationCap className="w-12 h-12" />
            Education 📚
          </h2>
          <p className="text-xl text-muted-foreground font-display">
            My academic journey and learning path
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.2 }}
            >
              <Card className="p-6 md:p-8 bg-card border-4 border-accent/20 shadow-xl relative overflow-hidden hover:shadow-2xl transition-shadow">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 text-4xl opacity-20">
                  {index === 0 ? "🎓" : "📖"}
                </div>

                <div className="space-y-4">
                  {/* Degree and Period */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-handwriting font-bold text-primary">
                        {edu.degree}
                      </h3>
                      <p className="text-xl font-display font-semibold text-secondary">
                        {edu.major}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <span className="text-sm font-display font-semibold text-primary">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  {/* Institution */}
                  <div className="flex items-center gap-2 text-lg text-foreground">
                    <BookOpen className="w-5 h-5 text-accent" />
                    <span className="font-display">{edu.institution}</span>
                  </div>

                  {/* GPA */}
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="font-display font-semibold text-primary">
                      GPA: {edu.gpa}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2">
                    <h4 className="font-display font-semibold text-foreground">
                      Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.2 + idx * 0.1 }}
                          className="flex items-start gap-2 text-foreground font-display"
                        >
                          <span className="text-primary mt-1">✦</span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center p-6 bg-accent/10 rounded-2xl border-2 border-accent/30"
        >
          <p className="text-lg font-handwriting text-primary">
            🌟 Always learning, always growing! Currently exploring new technologies and building amazing projects! 🚀
          </p>
        </motion.div>
      </div>
    </div>
  );
};
