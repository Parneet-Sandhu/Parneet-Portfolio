import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { name: "Email", icon: Mail, link: "mailto:parneetsandhu20003@gmail.com", handle: "parneetsandhu20003@gmail.com" },
    { name: "GitHub", icon: Github, link: "https://github.com/Parneet-Sandhu", handle: "Parneet-Sandhu" },
    { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/parneetsandhu/", handle: "Parneet Kaur Sandhu" },
    { name: "Phone", icon: Mail, link: "tel:7717477651", handle: "77174-77651" },
  ];

  return (
    <div className="min-h-screen p-6 pt-24">
      <div className="container max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <h2 className="text-4xl md:text-5xl font-marker text-primary">Let's Connect!</h2>
          <p className="text-lg font-script text-secondary">
            Have a project in mind? Want to collaborate? Just say hi!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="section-card"
          >
            <h3 className="text-2xl font-marker text-primary mb-4">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-typewriter mb-1">Your Name</label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="font-typewriter border-foreground/20"
                />
              </div>
              <div>
                <label className="block text-sm font-typewriter mb-1">Your Email</label>
                <Input
                  type="email"
                  placeholder="abc@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="font-typewriter border-foreground/20"
                />
              </div>
              <div>
                <label className="block text-sm font-typewriter mb-1">Your Message</label>
                <Textarea
                  placeholder="Tell me about your project or just say hi!"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="font-typewriter border-foreground/20 resize-none"
                />
              </div>
              <Button type="submit" className="w-full bg-primary font-typewriter gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="section-card">
              <h3 className="text-2xl font-marker text-primary mb-4">Find me on</h3>
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-card rounded-lg border border-foreground/10 hover:bg-card/80 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                      <div className="flex-1">
                        <p className="font-typewriter font-semibold text-sm">{social.name}</p>
                        <p className="text-xs text-muted-foreground font-typewriter">{social.handle}</p>
                      </div>
                      <span className="text-muted-foreground">→</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="section-card text-center">
              <p className="text-xl font-marker text-primary mb-1">Currently Available!</p>
              <p className="font-typewriter text-sm">Open for internships, freelance, and collaborations!</p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center p-4 bg-secondary/10 rounded-lg"
        >
          <p className="font-script text-primary">
            I usually respond within 24 hours!
          </p>
        </motion.div>
      </div>
    </div>
  );
};