'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaSpotify, FaYoutube, FaApple, FaDownload } from 'react-icons/fa';

export default function Music() {
  const [playing, setPlaying] = useState<number | null>(null);

  const tracks = [
    { 
      title: 'Cumbia Eléctrica', 
      duration: '3:42',
      tags: ['#Dancefloor', '#Festival'],
    },
    { 
      title: 'Noche Tropical', 
      duration: '4:15',
      tags: ['#Chill', '#LateNight'],
    },
    { 
      title: 'Ritmo Salvaje', 
      duration: '3:58',
      tags: ['#Dancefloor', '#Peak'],
    },
  ];

  return (
    <section id="music" className="py-24 px-4 bg-dark-lighter relative overflow-hidden">
      <div className="absolute inset-0 bg-grain"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-3 text-white">
            MUSIC
          </h2>
          <div className="w-20 h-1 bg-neon mx-auto mb-16"></div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Spotify Embed Player */}
            <div className="lg:col-span-2">
              <div className="bg-dark-card border border-neutral-800 rounded-lg p-6 mb-6">
                <h3 className="text-white font-bold text-xl mb-4">Featured Tracks</h3>
                {/* Sostituisci con il tuo Spotify Artist/Album/Playlist ID */}
                <iframe
                  title="Spotify Music Player"
                  src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4SBhb3fqCJd"
                  width="100%"
                  height="380"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>

              {/* Tracklist visuale sotto */}
              <div className="space-y-3">
                {tracks.map((track, index) => (
                <motion.div
                  key={index}
                  className={`bg-dark-card border border-neutral-800 hover:border-neon/50 rounded-lg p-5 transition-all duration-300 cursor-pointer group ${playing === index ? 'border-neon' : ''}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  onClick={() => setPlaying(playing === index ? null : index)}
                >
                  <div className="flex items-center gap-4">
                    {/* Play button */}
                    <button 
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${playing === index ? 'bg-neon text-dark animate-glow' : 'bg-neutral-800 text-neon group-hover:bg-neon group-hover:text-dark'}`}
                    >
                      {playing === index ? <FaPause size={16} /> : <FaPlay size={14} className="ml-0.5" />}
                    </button>

                    {/* Track info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold text-lg mb-1">{track.title}</h3>
                      <div className="flex gap-2 flex-wrap">
                        {track.tags.map((tag, i) => (
                          <span key={i} className="text-xs text-neon/70">{tag}</span>
                        ))}
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="text-neutral-500 font-mono text-sm">
                      {track.duration}
                    </div>
                  </div>

                  {/* Waveform (placeholder when playing) */}
                  {playing === index && (
                    <motion.div 
                      className="mt-4 flex items-center gap-0.5 h-12"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {[...Array(50)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 bg-neon/30 rounded-full"
                          animate={{
                            height: [
                              `${20 + Math.random() * 80}%`,
                              `${20 + Math.random() * 80}%`,
                            ],
                          }}
                          transition={{
                            duration: 0.5 + Math.random() * 0.5,
                            repeat: Infinity,
                            repeatType: 'reverse',
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
              </div>
            </div>

            {/* Album Card */}
            <motion.div
              className="bg-dark-card border border-neutral-800 rounded-lg p-6 h-fit sticky top-24"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Album cover placeholder */}
              <div className="aspect-square bg-gradient-to-br from-neon/20 to-neon/5 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-neon/50 text-6xl">♫</span>
              </div>

              <h3 className="text-white font-bold text-xl mb-2">EP Vol. 1</h3>
              <p className="text-neutral-400 text-sm mb-6">2026</p>

              {/* Platform buttons */}
              <div className="space-y-3 mb-6">
                <a href="#" className="flex items-center gap-3 text-neutral-300 hover:text-neon transition-colors py-2">
                  <FaSpotify size={20} />
                  <span>Spotify</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-neutral-300 hover:text-neon transition-colors py-2">
                  <FaApple size={20} />
                  <span>Apple Music</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-neutral-300 hover:text-neon transition-colors py-2">
                  <FaYoutube size={20} />
                  <span>YouTube</span>
                </a>
              </div>

              {/* Press Kit */}
              <button className="w-full bg-neutral-800 hover:bg-neon hover:text-dark text-neon font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                <FaDownload size={14} />
                PRESS KIT
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
