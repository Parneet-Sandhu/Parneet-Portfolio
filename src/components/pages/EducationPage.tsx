import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";

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
        "Relevant Coursework: Data Structures, Machine Learning, Database Management, Data Mining, OS, AI, Computer Networks",
        "Strong foundation in both theoretical concepts and practical applications",
      ],
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
            <GraduationCap className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl adventure-title">Education</h2>
          </div>
          <p className="text-lg adventure-subtitle">
            My academic journey
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="section-card space-y-4"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-cartoon text-primary">{edu.degree}</h3>
                  <p className="text-lg font-display font-semibold text-secondary">{edu.major}</p>
                </div>
                <span className="tag-pill whitespace-nowrap">{edu.period}</span>
              </div>

              <div className="flex items-center gap-2 font-body">
                <BookOpen className="w-4 h-4 text-muted-foreground" />
                <span>{edu.institution}</span>
              </div>

              <div className="flex items-center gap-2 font-display font-semibold text-primary">
                <Award className="w-4 h-4" />
                <span>{edu.gpa}</span>
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-semibold">Highlights:</h4>
                <ul className="space-y-1">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 font-body text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center p-4 bg-secondary/10 rounded-xl"
        >
          <p className="font-display font-semibold text-primary">
            Studying Cyber Security, building AI, and lowkey taking over the digital world
          </p>
        </motion.div>
      </div>
    </div>
  );
};
