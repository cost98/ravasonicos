'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause } from 'react-icons/fa';

export default function Music() {
  const [playing, setPlaying] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const tracks = [
    { 
      title: 'Cumbia Eléctrica', 
      duration: '3:42',
      audioUrl: '/cumbia-electrica.mp3',
      artwork: '/artwork1.jpg', // Aggiungi le tue immagini in /public
      gradient: 'from-neon/40 to-purple-500/40',
    },
    { 
      title: 'Noche Tropical', 
      duration: '4:15',
      audioUrl: '/noche-tropical.mp3',
      artwork: '/artwork2.jpg',
      gradient: 'from-blue-500/40 to-neon/40',
    },
    { 
      title: 'Ritmo Salvaje', 
      duration: '3:58',
      audioUrl: '/ritmo-salvaje.mp3',
      artwork: '/artwork3.jpg',
      gradient: 'from-purple-500/40 to-pink-500/40',
    },
  ];

  const handlePlayPause = (index: number) => {
    if (playing === index) {
      audioRef.current?.pause();
      setPlaying(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      audioRef.current = new Audio(tracks[index].audioUrl);
      audioRef.current.play();
      setPlaying(index);
      audioRef.current.onended = () => setPlaying(null);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <section id="music" className="py-24 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-center mb-4 text-white">
            MUSICA
          </h2>
          <div className="w-20 h-1 bg-neon mx-auto mb-16"></div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                className="group relative cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                onClick={() => handlePlayPause(index)}
              >
                {/* Card Container */}
                <div className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
                  playing === index ? 'border-neon shadow-neon-lg scale-105' : 'border-white/10 hover:border-neon/50'
                }`}>
                  
                  {/* Artwork Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient}`}>
                    {/* Placeholder per artwork - sostituisci con Image quando hai le foto */}
                    <div className="w-full h-full flex items-center justify-center text-white/20 text-8xl">
                      ♫
                    </div>
                  </div>

                  {/* Overlay scuro */}
                  <div className={`absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300 ${
                    playing === index ? 'bg-black/20' : ''
                  }`} />

                  {/* Glow effect quando in play */}
                  {playing === index && (
                    <motion.div
                      className="absolute inset-0 bg-neon/20"
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  )}

                  {/* Play/Pause Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                        playing === index 
                          ? 'bg-neon text-black shadow-neon-lg' 
                          : 'bg-white/10 backdrop-blur-sm text-white group-hover:bg-neon group-hover:text-black group-hover:scale-110'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {playing === index ? (
                        <FaPause size={24} />
                      ) : (
                        <FaPlay size={24} className="ml-1" />
                      )}
                    </motion.button>
                  </div>

                  {/* Track Info */}
                  <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <h3 className="text-white font-bold text-xl mb-1">{track.title}</h3>
                    <p className="text-white/60 text-sm">{track.duration}</p>
                  </div>

                  {/* Waveform animation quando in play */}
                  {playing === index && (
                    <div className="absolute bottom-20 inset-x-0 px-6">
                      <div className="flex items-end gap-1 h-12">
                        {[...Array(20)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 bg-neon rounded-full"
                            animate={{
                              height: [`${20 + Math.random() * 80}%`, `${20 + Math.random() * 80}%`],
                            }}
                            transition={{
                              duration: 0.4 + Math.random() * 0.4,
                              repeat: Infinity,
                              repeatType: 'reverse',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
