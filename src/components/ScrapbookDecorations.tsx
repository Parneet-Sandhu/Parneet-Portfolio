import { motion } from "framer-motion";

export const PushPin = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`absolute text-3xl ${className}`}
    initial={{ scale: 0, rotate: 0 }}
    animate={{ scale: 1, rotate: 45 }}
    transition={{ delay: 0.5, type: "spring" }}
  >
    📌
  </motion.div>
);

export const PaperClip = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`absolute text-2xl ${className}`}
    initial={{ scale: 0, rotate: 0 }}
    animate={{ scale: 1, rotate: -15 }}
    transition={{ delay: 0.6, type: "spring" }}
  >
    📎
  </motion.div>
);

export const WashiTape = ({ 
  className = "", 
  color = "primary" 
}: { 
  className?: string;
  color?: "primary" | "accent" | "secondary";
}) => {
  const colorClasses = {
    primary: "from-primary/30 via-primary/40 to-primary/30",
    accent: "from-accent/30 via-accent/40 to-accent/30",
    secondary: "from-secondary/30 via-secondary/40 to-secondary/30",
  };

  return (
    <motion.div
      className={`absolute h-6 bg-gradient-to-r ${colorClasses[color]} shadow-sm ${className}`}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 0.4, duration: 0.3 }}
      style={{ transformOrigin: "left" }}
    />
  );
};

export const FloatingSticker = ({
  emoji,
  className = "",
  delay = 0,
}: {
  emoji: string;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={`absolute text-4xl sticker-shadow ${className}`}
    initial={{ scale: 0, rotate: -20, opacity: 0 }}
    animate={{ 
      scale: 1, 
      rotate: [0, 5, -5, 0],
      opacity: 1,
    }}
    transition={{ 
      delay,
      duration: 0.5,
      rotate: { 
        delay: delay + 0.5,
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" 
      }
    }}
  >
    {emoji}
  </motion.div>
);

export const DoodleUnderline = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute left-0 right-0 ${className}`}
    height="8"
    viewBox="0 0 200 8"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M 5 4 Q 25 2, 45 4 T 85 4 T 125 4 T 165 4 T 195 4"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    />
  </svg>
);

export const ScrapbookCard = ({ 
  children, 
  className = "",
  rotation = 0,
}: { 
  children: React.ReactNode;
  className?: string;
  rotation?: number;
}) => (
  <motion.div
    className={`relative bg-card border-0 shadow-scrapbook torn-edge ${className}`}
    style={{ 
      transform: `rotate(${rotation}deg)`,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    }}
    initial={{ scale: 0.8, opacity: 0, y: 20 }}
    animate={{ scale: 1, opacity: 1, y: 0 }}
    whileHover={{ 
      scale: 1.02, 
      rotate: rotation * 1.2,
      transition: { duration: 0.2 }
    }}
  >
    {children}
  </motion.div>
);
