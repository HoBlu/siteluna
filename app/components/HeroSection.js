'use client';

import { motion } from 'framer-motion';
import { Calendar, Phone, MapPin, Home, Waves, Flame } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          {/* Fallback image if video doesn't load */}
          <Image src="/image/hero-bg.jpg" alt="Луна №50" fill className="object-cover" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white px-4 max-w-7xl mx-auto">
        <div className="flex items-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-2xl"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.span 
                className="block bg-gradient-to-r from-sky-300 via-blue-300 to-slate-300 bg-clip-text text-transparent text-center font-wade"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                ЛУНА №50
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-emerald-300 via-sky-300 to-blue-300 bg-clip-text text-transparent mt-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                БАЗА ОТДЫХА
              </motion.span>
            </motion.h1>
          </motion.div>
        </div>
      </div>

      {/* Quick Info - Centered */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10 flex flex-wrap justify-center gap-6 sm:gap-8 text-sm text-white/80"
      >
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Горный Алтай</span>
        </div>
        <div className="flex items-center gap-2">
          <Home className="w-4 h-4" />
          <span>Уютные домики</span>
        </div>
        <div className="flex items-center gap-2">
          <Waves className="w-4 h-4" />
          <span>Бассейн с подогревом</span>
        </div>
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4" />
          <span>Русская баня</span>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
