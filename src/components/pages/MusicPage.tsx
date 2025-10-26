import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Music, Play, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrapbookCard, PushPin, WashiTape, PaperClip, FloatingSticker } from "@/components/ScrapbookDecorations";

export const MusicPage = () => {
  const playlists = [
    {
      name: "Coding Vibes 💻",
      description: "Lo-fi beats and chill music for productive coding sessions",
      emoji: "🎵",
      tracks: ["Lofi Study", "Chill Beats", "Focus Flow", "Coding Zen"],
    },
    {
      name: "Energy Boost ⚡",
      description: "Upbeat tracks to keep the energy high during projects",
      emoji: "🎸",
      tracks: ["Electric Dreams", "Power Code", "Debug Dance", "Compile Party"],
    },
    {
      name: "Creative Mode 🎨",
      description: "Inspiring music for design and creative work",
      emoji: "🎹",
      tracks: ["Design Flow", "Creative Spark", "Innovation Beat", "Pixel Perfect"],
    },
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
          <h2 className="text-5xl md:text-6xl font-handwriting font-bold text-primary flex items-center justify-center gap-3">
            <Music className="w-12 h-12 animate-wiggle" />
            Music Corner 🎶
          </h2>
          <p className="text-xl text-muted-foreground font-display">
            My soundtrack for coding and creativity
          </p>
        </motion.div>

        {/* Playlists */}
        <div className="space-y-6">
          {playlists.map((playlist, index) => (
            <motion.div
              key={playlist.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
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
                  emoji={["🎵", "🎶", "🎸"][index % 3]} 
                  className={`-top-4 ${index % 2 === 0 ? '-right-4' : '-left-4'}`} 
                  delay={0.4 + index * 0.1} 
                />
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Playlist Cover */}
                  <div className="w-full md:w-48 h-48 bg-primary/10 rounded-2xl flex items-center justify-center text-8xl border-4 border-primary/20">
                    {playlist.emoji}
                  </div>

                  {/* Playlist Info */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-3xl font-handwriting font-bold text-primary mb-2">
                        {playlist.name}
                      </h3>
                      <p className="text-foreground font-display">
                        {playlist.description}
                      </p>
                    </div>

                    {/* Track List */}
                    <div className="space-y-2">
                      {playlist.tracks.map((track, trackIndex) => (
                        <motion.div
                          key={track}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 + trackIndex * 0.05 }}
                          className="flex items-center gap-3 p-2 bg-background rounded-lg hover:bg-accent/10 transition-colors"
                        >
                          <Play className="w-4 h-4 text-primary" />
                          <span className="font-display text-foreground flex-1">
                            {track}
                          </span>
                          <Heart className="w-4 h-4 text-accent hover:fill-accent transition-all cursor-pointer" />
                        </motion.div>
                      ))}
                    </div>

                    <Button className="bg-primary hover:bg-primary/90 gap-2">
                      <Play className="w-5 h-5" />
                      Play Playlist
                  </Button>
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
            <h3 className="text-3xl font-handwriting font-bold text-primary mb-6 text-center">
              Favorite Artists 🎤
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {favoriteArtists.map((artist, index) => (
                <motion.span
                  key={artist}
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 bg-card border-2 border-primary/30 rounded-full text-primary font-display font-semibold hover:scale-110 hover:bg-primary/10 transition-all cursor-default"
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
          <p className="text-2xl font-handwriting text-primary italic">
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
            <p className="text-3xl font-handwriting font-bold text-primary mb-1">
              24/7
            </p>
            <p className="text-xs font-display text-muted-foreground">
              Music Mode
            </p>
          </Card>
          <Card className="p-4 text-center bg-card border-2 border-accent/20">
            <p className="text-3xl font-handwriting font-bold text-primary mb-1">
              100+
            </p>
            <p className="text-xs font-display text-muted-foreground">
              Saved Songs
            </p>
          </Card>
          <Card className="p-4 text-center bg-card border-2 border-accent/20">
            <p className="text-3xl font-handwriting font-bold text-primary mb-1">
              ∞
            </p>
            <p className="text-xs font-display text-muted-foreground">
              Vibes
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
