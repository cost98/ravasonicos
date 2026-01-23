'use client';

import { motion } from 'framer-motion';
import { FaPlay, FaCalendar } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Subtle grain texture */}
      <div className="absolute inset-0 bg-grain"></div>

      {/* Logo as background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Image
          src="/logo.jpg"
          alt="Background Logo"
          width={1200}
          height={400}
          className="object-contain blur-sm"
        />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark/80 to-dark"></div>

      {/* Subtle animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-8"
        >
          <Image
            src="/logo.jpg"
            alt="Jubimm y Los Ravasónicos Logo"
            width={500}
            height={170}
            className="mx-auto drop-shadow-[0_0_40px_rgba(0,255,136,0.3)] brightness-110 rounded-none border-0"
            style={{ border: 'none', outline: 'none' }}
            priority
          />
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-neutral-300 font-light mb-12 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Electronic Cumbia for Dancefloors & Festivals
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <button
            onClick={() => document.querySelector('#music')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-neon hover:bg-neon/90 text-dark font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-neon hover:shadow-neon-lg flex items-center gap-3"
          >
            <FaPlay className="group-hover:scale-110 transition-transform" size={16} />
            LISTEN NOW
          </button>
          <button
            onClick={() => document.querySelector('#tour')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-neon bg-transparent hover:bg-neon/10 text-neon font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
          >
            <FaCalendar size={16} />
            TOUR DATES
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{
          delay: 2,
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="w-6 h-10 border-2 border-neon/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-2 bg-neon rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
