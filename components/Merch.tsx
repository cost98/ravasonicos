'use client';

import { motion } from 'framer-motion';
import { FaTshirt, FaShoppingCart } from 'react-icons/fa';

export default function Merch() {
  const products = [
    {
      name: 'Camiseta Logo Clásico',
      price: '25€',
      image: null,
      colors: ['Negro', 'Blanco'],
    },
    {
      name: 'Hoodie Astronauta',
      price: '45€',
      image: null,
      colors: ['Negro'],
    },
    {
      name: 'Póster Tour 2026',
      price: '15€',
      image: null,
      colors: ['Full Color'],
    },
    {
      name: 'Gorra Snapback',
      price: '20€',
      image: null,
      colors: ['Negro/Fucsia'],
    },
  ];

  return (
    <section id="merch" className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative">
      <div className="absolute inset-0 bg-grain opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-center mb-4 text-cta drop-shadow-[0_0_20px_rgba(76,175,80,0.3)]">
            MERCHANDISING
          </h2>
          <p className="text-center text-white/70 mb-12 text-lg">
            Lleva el sonido contigo
          </p>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="bg-black/50 border-2 border-white/10 hover:border-cta rounded-lg overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Product Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-cta/20 flex items-center justify-center relative overflow-hidden">
                  <FaTshirt className="text-6xl text-white/30 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-cta/0 group-hover:bg-cta/10 transition-all duration-300"></div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cta transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-secondary font-bold text-xl mb-2">
                    {product.price}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {product.colors.map((color, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-white/10 text-white/60 rounded"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-cta/20 hover:bg-cta text-white hover:text-black border border-cta font-semibold py-2 rounded transition-all duration-300 flex items-center justify-center gap-2">
                    <FaShoppingCart />
                    Añadir
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Shop CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-black/50 border-2 border-cta/30 rounded-lg p-8 inline-block">
              <p className="text-white/70 mb-4">
                Todos los productos están disponibles en nuestros conciertos
              </p>
              <button className="bg-cta hover:bg-cta-600 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cta/50">
                VER TIENDA COMPLETA
              </button>
            </div>
          </motion.div>

          {/* Limited Edition Banner */}
          <motion.div
            className="mt-12 bg-gradient-to-r from-primary via-secondary to-cta p-1 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-black rounded-lg p-6 text-center">
              <p className="text-white font-bold text-lg mb-2">
                🔥 EDICIÓN LIMITADA - TOUR 2026
              </p>
              <p className="text-white/70">
                Solo disponible durante las fechas del tour
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
