import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Music, Play, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrapbookCard, PushPin, WashiTape, PaperClip, FloatingSticker } from "@/components/ScrapbookDecorations";

export const MusicPage = () => {
  const favoriteSongs = [
    {
      title: "Call Me Maybe",
      artist: "Carly Rae Jepsen",
      videoId: "fWNaR-rxAic",
      emoji: "💕"
    },
    {
      title: "Be My Baby",
      artist: "The Ronettes",
      videoId: "jSPpbOGnFgk",
      emoji: "🎀"
    },
    {
      title: "Sure Thing",
      artist: "Miguel",
      videoId: "Q3EjYP3O7lA",
      emoji: "✨"
    }
  ];

  const favoriteArtists = [
    "Imagine Dragons",
    "The Weeknd",
    "Billie Eilish",
    "Daft Punk",
    "ODESZA",
    "Porter Robinson",
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
            <Music className="w-12 h-12 animate-wiggle" />
            Music Corner 🎶
          </h2>
          <p className="text-xl text-muted-foreground font-body">
            My soundtrack for coding and creativity
          </p>
        </motion.div>

        {/* Favorite Songs */}
        <div className="space-y-6">
          {favoriteSongs.map((song, index) => (
            <motion.div
              key={song.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              className="relative"
            >
              <ScrapbookCard 
                className="p-6 bg-card shadow-scrapbook hover:shadow-paper transition-all"
                rotation={[-0.5, 0.5, -1][index % 3]}
              >
                {index % 2 === 0 ? (
                  <>
                    <PushPin className="top-4 right-6" />
                    <PaperClip className="top-6 left-6" />
                  </>
                ) : (
                  <WashiTape className="top-0 left-1/3 w-1/3" color="accent" />
                )}
                
                <FloatingSticker 
                  emoji={song.emoji} 
                  className={`-top-4 ${index % 2 === 0 ? '-right-4' : '-left-4'}`} 
                  delay={0.4 + index * 0.1} 
                />
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-3xl font-elegant font-bold text-primary mb-2">
                      {song.title}
                    </h3>
                    <p className="text-xl font-body text-secondary">
                      {song.artist}
                    </p>
                  </div>

                  {/* YouTube Embed */}
                  <div className="aspect-video w-full rounded-lg overflow-hidden border-4 border-primary/20 shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${song.videoId}`}
                      title={song.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </ScrapbookCard>
            </motion.div>
          ))}
        </div>

        {/* Favorite Artists */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="p-6 md:p-8 bg-accent/10 border-4 border-accent/30 shadow-xl">
            <h3 className="text-3xl font-elegant font-bold text-primary mb-6 text-center">
              Favorite Artists 🎤
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {favoriteArtists.map((artist, index) => (
                <motion.span
                  key={artist}
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 bg-card border-2 border-primary/30 rounded-full text-primary font-body font-semibold hover:scale-110 hover:bg-primary/10 transition-all cursor-default"
                >
                  {artist}
                </motion.span>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Music Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center p-6 bg-primary/10 rounded-2xl border-2 border-primary/30"
        >
          <p className="text-2xl font-elegant text-primary italic">
            "Music is the soundtrack to my coding journey" 🎧✨
          </p>
        </motion.div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-3 gap-4"
        >
          <Card className="p-4 text-center bg-card border-2 border-accent/20">
            <p className="text-3xl font-elegant font-bold text-primary mb-1">
              24/7
            </p>
            <p className="text-xs font-body text-muted-foreground">
              Music Mode
            </p>
          </Card>
          <Card className="p-4 text-center bg-card border-2 border-accent/20">
            <p className="text-3xl font-elegant font-bold text-primary mb-1">
              100+
            </p>
            <p className="text-xs font-body text-muted-foreground">
              Saved Songs
            </p>
          </Card>
          <Card className="p-4 text-center bg-card border-2 border-accent/20">
            <p className="text-3xl font-elegant font-bold text-primary mb-1">
              ∞
            </p>
            <p className="text-xs font-body text-muted-foreground">
              Vibes
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
