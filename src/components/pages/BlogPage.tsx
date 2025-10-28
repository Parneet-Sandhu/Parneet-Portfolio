import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrapbookCard, PushPin, WashiTape, FloatingSticker } from "@/components/ScrapbookDecorations";

export const BlogPage = () => {
  const blogs = [
    {
      title: "My First Blog Post",
      description: "An exciting journey into AI and Machine Learning. Exploring the fundamentals and sharing insights from my learning experience.",
      date: "Coming Soon",
      image: "📝",
      link: "#", // User will add actual Medium link
      tags: ["AI", "Machine Learning", "Tech"],
    },
    {
      title: "My Second Blog Post",
      description: "Deep dive into Data Science and its real-world applications. Discussing projects, challenges, and solutions.",
      date: "Coming Soon",
      image: "🤖",
      link: "#", // User will add actual Medium link
      tags: ["Data Science", "Python", "Analytics"],
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
            <BookOpen className="w-12 h-12" />
            My Blog ✍️
          </h2>
          <p className="text-xl text-muted-foreground font-body">
            Sharing my thoughts and experiences on Medium
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? -2 : 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              className="relative"
            >
              <ScrapbookCard 
                className="p-6 bg-card shadow-scrapbook hover:shadow-paper transition-all h-full"
                rotation={index % 2 === 0 ? -1.5 : 1.5}
              >
                <PushPin className="top-4 right-6" />
                <WashiTape 
                  className="top-0 left-1/4 w-1/2 rotate-1" 
                  color={index % 2 === 0 ? "primary" : "accent"} 
                />
                
                <FloatingSticker 
                  emoji={index === 0 ? "✨" : "💫"} 
                  className="-top-4 -right-4" 
                  delay={0.4 + index * 0.1} 
                />
                
                {/* Blog Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-6 torn-edge shadow-sticker">
                  <span className="text-8xl">{blog.image}</span>
                </div>

                <div className="space-y-4">
                  {/* Title */}
                  <h3 className="text-2xl font-elegant font-bold text-primary">
                    {blog.title}
                  </h3>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-muted-foreground font-body text-sm">
                    <Calendar className="w-4 h-4" />
                    {blog.date}
                  </div>

                  {/* Description */}
                  <p className="text-foreground font-body leading-relaxed">
                    {blog.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-body font-semibold border border-primary/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2 border-primary/30 hover:bg-primary/10 mt-4 font-body"
                    asChild
                  >
                    <a href={blog.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Read on Medium
                    </a>
                  </Button>
                </div>

                {/* Corner stickers */}
                <div className="absolute bottom-2 left-2 text-2xl opacity-30 sticker-shadow">📖</div>
                <div className="absolute top-16 left-2 text-xl opacity-30 sticker-shadow">💡</div>
              </ScrapbookCard>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border-2 border-primary/20"
        >
          <p className="text-xl font-elegant text-primary mb-4">
            📚 More articles coming soon! 
          </p>
          <p className="text-base font-body text-muted-foreground">
            Follow me on Medium to stay updated with my latest posts
          </p>
        </motion.div>
      </div>
    </div>
  );
};
