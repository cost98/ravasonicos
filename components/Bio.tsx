'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaGuitar, FaDrum, FaMicrophone } from 'react-icons/fa';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Bio() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const bandPhotos = [
    '/images/band1.webp',
    '/images/band2.webp',
    '/images/band3.webp',
    '/images/band4.webp',
    '/images/band5.webp',
  ];

  // Posizioni personalizzate per ogni foto
  const photoPositions = [
    'object-center',
    'object-top', 
    'object-top',
    'object-center',
    'object-top',
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % bandPhotos.length);
    }, 3500); // Cambia foto ogni 3.5 secondi

    return () => clearInterval(interval);
  }, [isAutoPlay, bandPhotos.length]);

  const goToImage = (index: number) => {
    setIsAutoPlay(false);
    setSelectedImage(index);
  };

  return (
    <section id="bio" className="py-20 px-4 bg-black relative">
      <div className="absolute inset-0 bg-grain opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-center mb-4 text-secondary drop-shadow-[0_0_20px_rgba(255,235,59,0.3)]">
            LA BAND
          </h2>
          <p className="text-center text-white/70 mb-12 text-lg max-w-3xl mx-auto">
            Rock Latino anni &apos;90 che batte forte nel cuore del nuovo millennio. 
            Un viaggio sonoro dove i riff potenti incontrano l&apos;anima vibrante del soul colombiano, italiano e latinoamericano.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Main Carousel */}
              <div className="aspect-square relative rounded-lg overflow-hidden border-2 border-primary/50 shadow-[0_0_30px_rgba(255,0,255,0.2)] group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={bandPhotos[selectedImage]}
                      alt="Ravasonicos Band"
                      fill
                      className={`object-cover ${photoPositions[selectedImage]} grayscale transition-all duration-500`}
                      priority={selectedImage === 0}
                      quality={80}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}

                {/* Auto-play indicator */}
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm transition-all ${
                      isAutoPlay 
                        ? 'bg-neon/80 text-black' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {isAutoPlay ? '▶ Auto' : '⏸ Paused'}
                  </button>
                </div>
              </div>

              {/* Dots Navigation */}
              <div className="flex justify-center gap-2">
                {bandPhotos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className="group relative"
                  >
                    <div className={`w-12 h-2 rounded-full transition-all ${
                      selectedImage === index
                        ? 'bg-neon shadow-[0_0_10px_rgba(255,0,255,0.5)]'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}>
                      {/* Progress bar for auto-play */}
                      {selectedImage === index && isAutoPlay && (
                        <motion.div
                          className="h-full bg-white/50 rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 3.5, ease: 'linear' }}
                        />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4 text-white/80 text-lg">
                <p>
                  Nati dalla passione per il rock latinoamericano degli anni &apos;90, 
                  <span className="text-neon font-semibold"> Ravasonicos</span> porta avanti l&apos;eredità 
                  delle band leggendarie con uno sguardo contemporaneo.
                </p>
                <p>
                  Il nostro nome unisce <span className="text-secondary font-semibold">&quot;Ravanelli&quot;</span> (dall&apos;energia 
                  ravanellante del rock) e <span className="text-secondary font-semibold">&quot;Sonicos&quot;</span> (dal 
                  suono che viaggia fino al profondo dell&apos;anima), creando un ponte tra passato e presente.
                </p>
                <p>
                  Con chitarre distorte, ritmi che fanno vibrare il suolo e testi 
                  che parlano dritto al cuore, ogni show è un&apos;esperienza indimenticabile.
                </p>
                <p className="text-primary font-semibold text-xl">
                  &ldquo;El sonido que vibra&rdquo; non è solo uno slogan, è una promessa.
                </p>
              </div>

              {/* Band Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <FaMicrophone className="text-3xl text-secondary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">10+</p>
                  <p className="text-white/60 text-sm">Canciones</p>
                </div>
                <div className="text-center">
                  <FaDrum className="text-3xl text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">50+</p>
                  <p className="text-white/60 text-sm">Shows</p>
                </div>
                <div className="text-center">
                  <FaGuitar className="text-3xl text-cta mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">5K+</p>
                  <p className="text-white/60 text-sm">Fans</p>
                </div>
              </div>
            </motion.div>
          </div>


        </motion.div>
      </div>
    </section>
  );
}
