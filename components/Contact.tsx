'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

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
    alert('Grazie per il tuo messaggio! Ti contatteremo presto.');
  };

  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, url: '#', color: 'hover:text-[#E4405F]' },
    { name: 'TikTok', icon: FaTiktok, url: '#', color: 'hover:text-white' },
    { name: 'YouTube', icon: FaYoutube, url: '#', color: 'hover:text-[#FF0000]' },

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
            CONTATTI
          </h2>
          <p className="text-center text-white/70 mb-12 text-lg">
            Unisciti alla rivoluzione sonica
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
                    Nome
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
                    Oggetto
                  </label>
                  <select
                    id="subject"
                    required
                    className="w-full px-4 py-3 bg-black/50 border-2 border-white/20 focus:border-primary rounded-lg text-white outline-none transition-all duration-300"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="">Seleziona...</option>
                    <option value="booking">Booking / Ingaggio</option>
                    <option value="press">Stampa / Media</option>
                    <option value="general">Richiesta Generale</option>
                    <option value="fan">Messaggi Fan</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Messaggio
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
                  className="w-full bg-black border-2 border-neon text-neon font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:bg-neon hover:text-black hover:scale-105 shadow-lg shadow-neon/30"
                >
                  INVIA MESSAGGIO
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
              {/* Contact Info */}
              <div className="bg-black/50 border-2 border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <FaEnvelope />
                  Contattaci
                </h3>
                <p className="text-white/80 mb-2">
                  Per booking, interviste e richieste generali:
                </p>
                <a
                  href="mailto:ravasonicos@gmail.com"
                  className="text-primary hover:text-primary-400 font-semibold transition-colors"
                >
                  ravasonicos@gmail.com
                </a>
              </div>

              {/* Social Media */}
              <div className="bg-black/50 border-2 border-cta/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">
                  Seguici
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
