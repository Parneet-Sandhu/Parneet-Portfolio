import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { ScrapbookCard, PushPin, WashiTape, PaperClip, FloatingSticker } from "@/components/ScrapbookDecorations";

export const ExperiencePage = () => {
  const experiences = [
    {
      role: "Software Development Intern",
      company: "Tech Company XYZ",
      location: "Remote",
      period: "Jun 2024 - Aug 2024",
      description: "Worked on developing web applications using React and Node.js",
      achievements: [
        "Built responsive UI components used by 1000+ users",
        "Optimized application performance by 30%",
        "Collaborated with cross-functional teams",
      ],
      tech: ["React", "Node.js", "MongoDB", "Git"],
    },
    {
      role: "Frontend Developer",
      company: "Freelance Projects",
      location: "Remote",
      period: "Jan 2023 - Present",
      description: "Creating custom websites and web applications for clients",
      achievements: [
        "Delivered 10+ successful projects",
        "Maintained 5-star client ratings",
        "Specialized in modern, responsive designs",
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    },
    {
      role: "Technical Team Member",
      company: "College Tech Club",
      location: "Campus",
      period: "Aug 2022 - Present",
      description: "Contributing to various tech events and workshops",
      achievements: [
        "Organized 5+ technical workshops",
        "Mentored 20+ junior students",
        "Led hackathon team to victory",
      ],
      tech: ["Leadership", "Teaching", "Event Management"],
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
            <Briefcase className="w-12 h-12" />
            Experience 💼
          </h2>
          <p className="text-xl text-muted-foreground font-display">
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
              <ScrapbookCard 
                className="p-6 md:p-8 bg-card shadow-scrapbook hover:shadow-paper transition-all" 
                rotation={[-0.5, 0.5, -0.5][index % 3]}
              >
                {/* Scrapbook decorations */}
                {index % 2 === 0 ? (
                  <>
                    <PushPin className="top-4 right-6" />
                    <PaperClip className="top-6 left-6" />
                  </>
                ) : (
                  <>
                    <PushPin className="top-4 left-6" />
                    <WashiTape className="top-0 right-1/4 w-1/3" color="accent" />
                  </>
                )}
                
                <FloatingSticker 
                  emoji={index === 0 ? "💼" : index === 1 ? "💻" : "🎯"} 
                  className={`-top-4 ${index % 2 === 0 ? '-right-4' : '-left-4'}`} 
                  delay={0.3 + index * 0.1} 
                />

                <div className="space-y-4">
                  {/* Role and Company */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-handwriting font-bold text-primary">
                      {exp.role}
                    </h3>
                    <p className="text-xl font-display font-semibold text-secondary">
                      {exp.company}
                    </p>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 bg-accent/20 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="font-display text-foreground">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-accent/20 px-3 py-1 rounded-full">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-display text-foreground">{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground font-display leading-relaxed">
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
                          className="flex items-start gap-2 text-foreground font-display"
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
                        className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm font-display font-medium text-primary"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </ScrapbookCard>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center p-6 bg-primary/10 rounded-2xl border-2 border-primary/30"
        >
          <p className="text-lg font-handwriting text-primary">
            ✨ Always open to new opportunities and exciting projects! Let's build something amazing together! 🚀
          </p>
        </motion.div>
      </div>
    </div>
  );
};
