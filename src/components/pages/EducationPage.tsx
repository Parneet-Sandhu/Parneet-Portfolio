import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import { ScrapbookCard, PushPin, WashiTape, FloatingSticker } from "@/components/ScrapbookDecorations";

export const EducationPage = () => {
  const education = [
    {
      degree: "Master of Technology",
      major: "Computer Science and Engineering (Cyber Security)",
      institution: "Central University of Punjab, Bathinda",
      period: "Aug 2025 – Jun 2027",
      gpa: "Pursuing",
      highlights: [
        "Specialization in Cyber Security",
        "Advanced studies in security protocols and ethical hacking",
        "Research-oriented program focusing on emerging security threats",
      ],
    },
    {
      degree: "Bachelor of Technology",
      major: "Computer Science and Engineering",
      institution: "Maharaja Ranjit Singh Punjab Technical University, Bathinda",
      period: "Aug 2021 – Jun 2025",
      gpa: "7.93 CGPA",
      highlights: [
        "Relevant Coursework: Data Structures and Algorithms, Machine Learning, Database Management Systems, Data Mining, Operating Systems",
        "Additional courses: Artificial Intelligence, Soft Computing, Object Oriented Programming, Theory of Computation, Computer Networks",
        "Strong foundation in both theoretical concepts and practical applications",
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
          <h2 className="text-5xl md:text-6xl font-elegant font-bold text-primary flex items-center justify-center gap-3">
            <GraduationCap className="w-12 h-12" />
            Education 📚
          </h2>
          <p className="text-xl text-muted-foreground font-body">
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
              className="relative"
            >
              <ScrapbookCard 
                className="p-6 md:p-8 bg-card shadow-scrapbook" 
                rotation={index % 2 === 0 ? -0.5 : 0.5}
              >
                <PushPin className={`top-4 ${index % 2 === 0 ? 'right-8' : 'left-8'}`} />
                <WashiTape className={`top-0 w-1/3 ${index % 2 === 0 ? 'left-1/4' : 'right-1/4'} rotate-[${index % 2 === 0 ? '-2' : '2'}deg]`} color={index % 2 === 0 ? "primary" : "accent"} />
                
                <FloatingSticker 
                  emoji={index === 0 ? "🎓" : "📖"} 
                  className={`-top-6 ${index % 2 === 0 ? '-right-6' : '-left-6'}`} 
                  delay={0.4 + index * 0.2} 
                />

                <div className="space-y-4">
                  {/* Degree and Period */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-elegant font-bold text-primary">
                        {edu.degree}
                      </h3>
                      <p className="text-xl font-body font-semibold text-secondary">
                        {edu.major}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <span className="text-sm font-body font-semibold text-primary">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  {/* Institution */}
                  <div className="flex items-center gap-2 text-lg text-foreground">
                    <BookOpen className="w-5 h-5 text-accent" />
                    <span className="font-body">{edu.institution}</span>
                  </div>

                  {/* GPA */}
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="font-body font-semibold text-primary">
                      {edu.gpa}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2">
                    <h4 className="font-body font-semibold text-foreground">
                      Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.2 + idx * 0.1 }}
                          className="flex items-start gap-2 text-foreground font-body"
                        >
                          <span className="text-primary mt-1">✦</span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrapbookCard>
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
          <p className="text-lg font-elegant text-primary">
            🌟 Always learning, always growing! Pursuing M.Tech in Cyber Security while working on cutting-edge AI projects! 🚀
          </p>
        </motion.div>
      </div>
    </div>
  );
};
