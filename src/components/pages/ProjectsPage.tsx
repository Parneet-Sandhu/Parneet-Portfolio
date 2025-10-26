import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const ProjectsPage = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce website with cart functionality, payment integration, and admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛒",
      color: "bg-primary/10",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates, drag-and-drop interface, and team features",
      tech: ["React", "Firebase", "Tailwind CSS"],
      image: "📝",
      color: "bg-accent/10",
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with forecasts, location search, and interactive maps",
      tech: ["JavaScript", "Weather API", "Chart.js"],
      image: "⛅",
      color: "bg-secondary/10",
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Generator",
      description: "Tool to help developers create stunning portfolios with templates and customization options",
      tech: ["React", "TypeScript", "CSS"],
      image: "🎨",
      color: "bg-primary/10",
      github: "#",
      live: "#",
    },
    {
      title: "Chat Application",
      description: "Real-time messaging app with rooms, emoji support, and file sharing capabilities",
      tech: ["Socket.io", "Express", "React"],
      image: "💬",
      color: "bg-accent/10",
      github: "#",
      live: "#",
    },
    {
      title: "Recipe Finder",
      description: "Discover and save recipes with smart search, dietary filters, and cooking instructions",
      tech: ["React", "Recipe API", "Redux"],
      image: "🍳",
      color: "bg-secondary/10",
      github: "#",
      live: "#",
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
            Projects 🚀
          </h2>
          <p className="text-xl text-muted-foreground font-display">
            Things I've built with code and creativity
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              className="group"
            >
              <Card className={`${project.color} border-4 border-accent/20 shadow-xl overflow-hidden h-full flex flex-col relative`}>
                {/* Decorative tape effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-accent/40 -translate-y-1"></div>

                {/* Image/Icon Section */}
                <div className="relative bg-card p-8 flex items-center justify-center">
                  <span className="text-7xl group-hover:scale-110 transition-transform">
                    {project.image}
                  </span>
                  <div className="absolute top-2 right-2 text-xl animate-float">✨</div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-handwriting font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground font-display mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-background border border-accent/30 rounded-full text-xs font-display font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2 border-primary/30 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 gap-2 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center p-6 bg-primary/10 rounded-2xl border-2 border-primary/30"
        >
          <p className="text-lg font-handwriting text-primary mb-4">
            Want to see more? Check out my GitHub! 🌟
          </p>
          <Button className="bg-primary hover:bg-primary/90 gap-2" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              Visit GitHub Profile
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
