import { motion } from "framer-motion";
import { Music, Headphones } from "lucide-react";

export const MusicPage = () => {
  const favoriteSongs = [
    { title: "Back To Friends", artist: "Sombr", spotifyUri: "0FTmksd2dxiE5e3rWyJXs6" },
    { title: "Call Me Maybe", artist: "Carly Rae Jepsen", spotifyUri: "0LEEBBFdS8qkMGswjODQq8" },
    { title: "Be My Baby", artist: "The Ronettes", spotifyUri: "2G2YzndIA6jeWFPBXhUjh5" },
    { title: "Sure Thing", artist: "Miguel", spotifyUri: "0JXXNGljqupsJaZsgSbMZV" }
  ];

  const favoriteArtists = ["Adele", "The Weeknd", "Lana Del Rey", "Chase Atlantic", "The Neighbourhood", "Sombr"];

  return (
    <div className="min-h-screen p-6 pt-24">
      <div className="container max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <div className="flex items-center justify-center gap-3">
            <Music className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-marker text-primary">Music Corner</h2>
          </div>
          <p className="text-lg font-script text-secondary">
            My soundtrack for coding and creativity
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Headphones className="w-4 h-4" />
            <span className="font-typewriter">Press play to listen on Spotify</span>
          </div>
        </motion.div>

        {/* Songs with Spotify Players */}
        <div className="space-y-6">
          {favoriteSongs.map((song, index) => (
            <motion.div
              key={song.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="section-card"
            >
              <div className="mb-3">
                <h3 className="text-2xl font-marker text-primary">{song.title}</h3>
                <p className="font-typewriter text-secondary">{song.artist}</p>
              </div>

              <div className="rounded-lg overflow-hidden border border-foreground/10">
                <iframe
                  style={{ borderRadius: '8px' }}
                  src={`https://open.spotify.com/embed/track/${song.spotifyUri}?utm_source=generator`}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Favorite Artists */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="section-card"
        >
          <h3 className="text-2xl font-marker text-primary mb-4 text-center">Favorite Artists</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {favoriteArtists.map((artist) => (
              <span key={artist} className="tag-pill">{artist}</span>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center p-4 bg-primary/10 rounded-lg"
        >
          <p className="font-script text-primary italic">
            "Music is the soundtrack to my coding journey"
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-3 gap-4"
        >
          <div className="section-card text-center py-4">
            <p className="text-2xl font-marker text-primary">24/7</p>
            <p className="text-xs font-typewriter text-muted-foreground">Music Mode</p>
          </div>
          <div className="section-card text-center py-4">
            <p className="text-2xl font-marker text-primary">100+</p>
            <p className="text-xs font-typewriter text-muted-foreground">Saved Songs</p>
          </div>
          <div className="section-card text-center py-4">
            <p className="text-2xl font-marker text-primary">∞</p>
            <p className="text-xs font-typewriter text-muted-foreground">Vibes</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}