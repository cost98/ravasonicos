'use client';

import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

export default function Tour() {
  return (
    <section id="tour" className="py-20 px-4 bg-black relative">
      <div className="absolute inset-0 bg-grain opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-center mb-4 text-secondary drop-shadow-[0_0_20px_rgba(255,235,59,0.3)]">
            DATE TOUR
          </h2>
          <p className="text-center text-white/70 mb-12 text-lg">
            Vivi l&apos;esperienza dal vivo
          </p>

          {/* Coming Soon Message */}
          <motion.div
            className="border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm rounded-lg p-12 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="max-w-2xl mx-auto">
              <FaCalendarAlt className="text-6xl text-secondary mx-auto mb-6 animate-pulse" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Nuove Date in Arrivo!
              </h3>
              <p className="text-white/70 text-lg mb-8">
                Stiamo preparando qualcosa di speciale per voi. Le prossime date del tour saranno annunciate presto. 
                Seguiteci sui social per rimanere aggiornati!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contact"
                  className="bg-cta hover:bg-cta-600 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cta/30"
                >
                  Contattaci per Booking
                </a>
                <span className="text-white/50 text-sm">oppure</span>
                <a
                  href="mailto:ravasonicos@gmail.com"
                  className="bg-black border-2 border-neon text-neon font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:bg-neon hover:text-black hover:scale-105 shadow-lg shadow-neon/30"
                >
                  Richiedi una Data
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
