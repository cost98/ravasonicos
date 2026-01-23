'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaTiktok, FaYoutube, FaSpotify } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Qui implementare l'invio del form (EmailJS, Formspree, ecc.)
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, url: '#', color: 'hover:text-[#E4405F]' },
    { name: 'TikTok', icon: FaTiktok, url: '#', color: 'hover:text-white' },
    { name: 'YouTube', icon: FaYoutube, url: '#', color: 'hover:text-[#FF0000]' },
    { name: 'Spotify', icon: FaSpotify, url: '#', color: 'hover:text-[#1DB954]' },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-black relative">
      <div className="absolute inset-0 bg-grain opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-center mb-4 text-primary drop-shadow-[0_0_20px_rgba(233,30,99,0.3)]">
            CONTACTO
          </h2>
          <p className="text-center text-white/70 mb-12 text-lg">
            Únete a la revolución sónica
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-black/50 border-2 border-white/20 focus:border-primary rounded-lg text-white outline-none transition-all duration-300"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-black/50 border-2 border-white/20 focus:border-primary rounded-lg text-white outline-none transition-all duration-300"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    required
                    className="w-full px-4 py-3 bg-black/50 border-2 border-white/20 focus:border-primary rounded-lg text-white outline-none transition-all duration-300"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="">Selecciona...</option>
                    <option value="booking">Booking / Contratación</option>
                    <option value="press">Prensa / Media</option>
                    <option value="general">Consulta General</option>
                    <option value="fan">Fan Mail</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 border-2 border-white/20 focus:border-primary rounded-lg text-white outline-none transition-all duration-300 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cta hover:bg-cta-600 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cta/50"
                >
                  ENVIAR MENSAJE
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Booking Info */}
              <div className="bg-black/50 border-2 border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <FaEnvelope />
                  Booking & Contratación
                </h3>
                <p className="text-white/80 mb-2">
                  Para conciertos, festivales y eventos privados:
                </p>
                <a
                  href="mailto:booking@ravasonicos.com"
                  className="text-primary hover:text-primary-400 font-semibold transition-colors"
                >
                  booking@ravasonicos.com
                </a>
              </div>

              {/* Press Info */}
              <div className="bg-black/50 border-2 border-secondary/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">
                  Prensa & Media
                </h3>
                <p className="text-white/80 mb-2">
                  Para entrevistas y material promocional:
                </p>
                <a
                  href="mailto:press@ravasonicos.com"
                  className="text-primary hover:text-primary-400 font-semibold transition-colors"
                >
                  press@ravasonicos.com
                </a>
              </div>

              {/* Social Media */}
              <div className="bg-black/50 border-2 border-cta/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">
                  Síguenos
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`text-3xl text-white/60 ${social.color} transition-all duration-300 transform hover:scale-125`}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  📬 Newsletter
                </h3>
                <p className="text-white/80 mb-4 text-sm">
                  Recibe noticias, fechas de tour y contenido exclusivo
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="flex-1 px-4 py-2 bg-black/50 border border-white/20 rounded text-white text-sm outline-none focus:border-primary transition-all"
                  />
                  <button className="bg-primary hover:bg-primary-600 text-white font-bold px-4 py-2 rounded transition-all">
                    OK
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
