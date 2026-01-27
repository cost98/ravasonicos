'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaYoutube, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, url: '#' },
    { name: 'TikTok', icon: FaTiktok, url: '#' },
    { name: 'YouTube', icon: FaYoutube, url: '#' },
  ];

  const quickLinks = [
    { name: 'Tour', href: '#tour' },
    { name: 'Musica', href: '#music' },
    { name: 'Contatti', href: '#contact' },
    { name: 'Press Kit', href: '#' },
  ];

  return (
    <footer className="bg-black border-t-2 border-primary/30 relative">
      <div className="absolute inset-0 bg-grain opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-display font-bold text-primary mb-4">
              RAVASONICOS
            </h3>
            <p className="text-white/60 mb-4">
              Il suono che vibra. Rock Latino dal cuore.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-white/60 hover:text-primary transition-all duration-300 transform hover:scale-125"
                  aria-label={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-secondary mb-4">
              Link Rapidi
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors duration-300"
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-secondary mb-4">
              Contatti
            </h4>
            <ul className="space-y-2 text-white/60">
              <li>
                <span className="text-white/40">Booking:</span><br />
                <a href="mailto:booking@ravasonicos.com" className="hover:text-primary transition-colors">
                  booking@ravasonicos.com
                </a>
              </li>
              <li>
                <span className="text-white/40">Stampa:</span><br />
                <a href="mailto:press@ravasonicos.com" className="hover:text-primary transition-colors">
                  press@ravasonicos.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white/40 text-sm text-center md:text-left">
            © {currentYear} Ravasonicos. Tutti i diritti riservati.
          </p>
          
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Termini d&apos;Uso
            </a>
          </div>

          <p className="text-white/40 text-sm flex items-center gap-2">
            Fatto con <FaHeart className="text-primary text-xs" /> per il rock
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
