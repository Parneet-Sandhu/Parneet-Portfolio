import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import virtualTryOnBlog from "@/assets/Vblog1.png";
import DataBlog from "@/assets/Dblog2.png";

export const BlogPage = () => {
  const blogs = [
    {
      title: "Building a Virtual Try-On with Python, OpenCV, and Tkinter",
      description: "A 6-minute read on creating a fun, interactive virtual try-on app using Python, OpenCV, Mediapipe, and Tkinter.",
      date: "Nov 14, 2024",
      image: virtualTryOnBlog,
      link: "https://parneetsandhu.medium.com/building-a-virtual-try-on-with-python-opencv-and-tkinter-216173438c7a",
      tags: ["OpenCV", "Python", "Mediapipe"],
    },
    {
      title: "Data Analysis with YData Profiling",
      description: "A 4-minute read on how YData Profiling simplifies EDA and improves data quality checks.",
      date: "Aug 19, 2024",
      image: DataBlog,
      link: "https://parneetsandhu.medium.com/data-analysis-with-ydata-profiling-a-game-changer-for-data-scientists-f93aaed73441",
      tags: ["Data Science", "YData", "ML"],
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
            <BookOpen className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl adventure-title">My Blog</h2>
          </div>
          <p className="text-lg adventure-subtitle">
            Sharing my thoughts on Medium
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="section-card"
            >
              <div className="relative -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-4">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-40 object-cover rounded-t-2xl"
                />
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="w-4 h-4" />
                <span className="font-body">{blog.date}</span>
              </div>

              <h3 className="text-lg font-cartoon text-primary mb-2">{blog.title}</h3>
              <p className="font-body text-sm mb-3">{blog.description}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {blog.tags.map((tag) => (
                  <span key={tag} className="tag-pill text-xs">#{tag}</span>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full gap-2 font-display font-semibold border-border"
                asChild
              >
                <a href={blog.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Read on Medium
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center p-4 bg-secondary/10 rounded-xl"
        >
          <p className="font-display font-semibold text-primary">More articles coming soon!</p>
        </motion.div>
      </div>
    </div>
  );
};
