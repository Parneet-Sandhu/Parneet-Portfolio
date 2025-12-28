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
        "Relevant Coursework: Data Structures and Algorithms, Machine Learning, Database Management Systems, Data Mining, Operating Systems, Artificial Intelligence, Soft Computing, Object Oriented Programming, Theory of Computation, Computer Networks",
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
          <h2 className="text-5xl md:text-6xl font-title text-primary tracking-wide flex items-center justify-center gap-3">
            <GraduationCap className="w-12 h-12" />
            Education 
          </h2>
          <p className="text-xl font-cursive text-secondary">
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
              <div className="section-card">
                <div className="space-y-4">
                  {/* Degree and Period */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-title text-primary">
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
                    <span className="font-body">{edu.institution}</span>
                  </div>

                  {/* GPA */}
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="font-display font-semibold text-primary">
                      {edu.gpa}
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
                          className="flex items-start gap-2 text-foreground font-body"
                        >
                          <span className="text-primary mt-1">✦</span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center p-6 bg-accent/20 rounded-3xl border-2 border-accent/30"
        >
          <p className="text-lg font-cursive text-primary">
            Studying Cyber Security, building AI, and lowkey taking over the digital world 😏🚀
          </p>
        </motion.div>
      </div>
    </div>
  );
};