import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { ScrapbookCard, PushPin, WashiTape, PaperClip, FloatingSticker } from "@/components/ScrapbookDecorations";

export const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! ✨",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      link: "mailto:your.email@example.com",
      color: "text-primary",
      bgColor: "bg-primary/10",
      handle: "your.email@example.com",
    },
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com/yourusername",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      handle: "@yourusername",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://linkedin.com/in/yourprofile",
      color: "text-accent",
      bgColor: "bg-accent/10",
      handle: "Your Name",
    },
    {
      name: "Twitter",
      icon: Twitter,
      link: "https://twitter.com/yourusername",
      color: "text-primary",
      bgColor: "bg-primary/10",
      handle: "@yourusername",
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
          <h2 className="text-5xl md:text-6xl font-handwriting font-bold text-primary">
            Let's Connect! 💌
          </h2>
          <p className="text-xl text-muted-foreground font-display">
            Have a project in mind? Want to collaborate? Just say hi!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <ScrapbookCard className="p-6 md:p-8 bg-card shadow-scrapbook" rotation={-1}>
              <PushPin className="top-4 right-6" />
              <WashiTape className="top-0 left-1/4 w-1/2 rotate-1" color="primary" />
              <FloatingSticker emoji="✉️" className="-top-6 -left-6" delay={0.4} />
              
              {/* Spiral binding effect */}
              <div className="absolute left-0 top-0 bottom-0 w-6 flex flex-col items-center justify-around py-8">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-full bg-muted border border-muted-foreground/20"></div>
                ))}
              </div>
              <h3 className="text-3xl font-handwriting font-bold text-primary mb-6">
                Send me a message ✉️
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-display font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-2 border-accent/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-display font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-2 border-accent/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-display font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project or just say hi! 👋"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="border-2 border-accent/30 focus:border-primary resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </ScrapbookCard>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="p-6 md:p-8 bg-primary/10 border-4 border-primary/30 shadow-xl">
              <h3 className="text-3xl font-handwriting font-bold text-primary mb-6">
                Find me on 🌐
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-4 p-4 ${social.bgColor} rounded-xl border-2 border-accent/20 hover:border-${social.color.split("-")[1]}/50 transition-all`}
                    >
                      <Icon className={`w-6 h-6 ${social.color}`} />
                      <div className="flex-1">
                        <p className="font-display font-semibold text-foreground">
                          {social.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {social.handle}
                        </p>
                      </div>
                      <span className="text-xl">→</span>
                    </motion.a>
                  );
                })}
              </div>
            </Card>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Card className="p-6 bg-accent/10 border-4 border-accent/30 shadow-xl text-center">
                <p className="text-2xl font-handwriting font-bold text-primary mb-2">
                  Currently Available! ✨
                </p>
                <p className="text-foreground font-display">
                  Open for internships, freelance projects, and collaborations!
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Response Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center p-6 bg-card rounded-2xl border-2 border-accent/20"
        >
          <p className="text-lg font-handwriting text-primary">
            ⚡ I usually respond within 24 hours! Looking forward to hearing from you! 💫
          </p>
        </motion.div>
      </div>
    </div>
  );
};
