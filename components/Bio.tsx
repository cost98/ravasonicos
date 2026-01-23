'use client';

import { motion } from 'framer-motion';
import { FaGuitar, FaDrum, FaMicrophone, FaDownload } from 'react-icons/fa';

export default function Bio() {
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
            LA BANDA
          </h2>
          <p className="text-center text-white/70 mb-12 text-lg max-w-3xl mx-auto">
            Ravasonicos funde la potencia de los ritmos latinos con el alma del rock años 90. 
            Chitarre distorte y testi che colpiscono dritto al cuore.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Placeholder */}
            <motion.div
              className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-cta/20 rounded-lg border-2 border-primary/50 flex items-center justify-center overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-8">
                <FaGuitar className="text-6xl text-primary/50 mx-auto mb-4" />
                <p className="text-white/60">Band Photo</p>
                <p className="text-white/40 text-sm mt-2">
                  Agregar foto promocional
                </p>
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
                  Nacidos en el underground del rock latino, Ravasonicos trae de vuelta 
                  la energía cruda y auténtica de los años 90.
                </p>
                <p>
                  Con guitarras distorsionadas, ritmos que hacen vibrar el suelo y letras 
                  que hablan directo al corazón, cada show es una experiencia que no se olvida.
                </p>
                <p className="text-primary font-semibold">
                  &ldquo;El sonido que vibra&rdquo; no es solo un slogan, es una promesa.
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

          {/* Press Kit Download */}
          <motion.div
            className="bg-gradient-to-r from-primary/10 via-secondary/10 to-cta/10 border-2 border-primary/30 rounded-lg p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Press Kit Electrónico
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Para promotores, medios y profesionales de la industria. 
              Descarga nuestro EPK completo con fotos, bio y ficha técnica.
            </p>
            <button className="bg-secondary hover:bg-secondary-600 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto shadow-lg shadow-secondary/50">
              <FaDownload />
              DESCARGAR EPK (PDF)
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
