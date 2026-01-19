'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/image/hero-video.mp4" type="video/mp4" />
          <Image src="/image/hero-bg.jpg" alt="Луна №50" fill className="object-cover" />
        </video>
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Hero Content - Left Aligned */}
      <div className="absolute inset-0 flex items-center z-20">
        <div className="max-w-7xl mx-auto w-full px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="max-w-2xl"
          >
            
            

            {/* Main Title - match subtitle tint */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight drop-shadow-2xl"
              style={{
                color: 'rgba(255,255,255,0.9)',
                WebkitTextFillColor: 'rgba(255,255,255,0.9)',
                WebkitBackgroundClip: 'unset',
                background: 'none',
              }}
            >
              ЛУНА №50
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-2xl lg:text-3xl text-white/90 font-light mb-8 max-w-xl"
            >
              Премиум база отдыха
              <br />
              в сердце Горного Алтая
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-lg text-white/80 mb-12 max-w-lg leading-relaxed"
            >
              Откройте для себя идеальное сочетание роскоши и природы. Уютные домики из кедра, теплый бассейн, аутентичная баня и величественные пейзажи реки Катунь.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-8 mt-16 pt-8 border-t border-white/30"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Телефон</p>
                  <p className="text-white font-semibold">+7 (962) 807-50-50</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Адрес</p>
                  <p className="text-white font-semibold">село Ая, ул. Советская 50</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-white/70 text-sm font-semibold tracking-widest">ПРОКРУТИТЬ</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-2.5 bg-white/70 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-96 h-96 bg-blue-50/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-1/4 w-80 h-80 bg-green-50/10 rounded-full blur-3xl pointer-events-none"
      />
    </section>
  );
}
