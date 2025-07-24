'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Bed, Users, Wifi, Coffee, Bath, Wind, TreePine, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { Microwave, Droplets } from 'lucide-react';

const accommodations = [
  {
    id: 1,
    type: "ГОСТЕВОЙ ДОМ",
    title: "Гостевой Дом",
    description: "Гостевой дом, выполненный из кедра, представляет собой гармоничное сочетание комфорта и природы.",
    image: "/image/guest-house.jpg",
    link: "/accommodation/guest-house",
    amenities: [
      { icon: <Bed className="w-4 h-4" />, text: "Двуспальная кровать" },
      { icon: <Users className="w-4 h-4" />, text: "Двухъярусная кровать" },
      { icon: <Wind className="w-4 h-4" />, text: "Теплый пол в ванной" },
      { icon: <Coffee className="w-4 h-4" />, text: "Мини-холодильник" },
      { icon: <Microwave className="w-4 h-4" />, text: "Микроволновка" },
      { icon: <Droplets className="w-4 h-4" />, text: "Водонагреватель" },
      { icon: <Bath className="w-4 h-4" />, text: "Душевая и санузел" },
      { icon: <Wifi className="w-4 h-4" />, text: "Wi-Fi" }
    ],
    gradient: "from-green-400 to-emerald-600"
  },
  {
    id: 2,
    type: "СЕМЕЙНЫЙ ЛЮКС У БАССЕЙНА",
    title: "Семейный номер",
    description: "Просторный дом с современными удобствами для семей и дружных компаний.",
    image: "/image/family-suite.jpg",
    link: "/accommodation/family-suite",
    amenities: [
      { icon: <Bed className="w-4 h-4" />, text: "Двуспальная кровать" },
      { icon: <Users className="w-4 h-4" />, text: "Диван" },
      { icon: <Wind className="w-4 h-4" />, text: "Теплый пол" },
      { icon: <Coffee className="w-4 h-4" />, text: "Кухонная зона" },
      { icon: <Microwave className="w-4 h-4" />, text: "Микроволновка" },
      { icon: <Droplets className="w-4 h-4" />, text: "Водонагреватель" },
      { icon: <TreePine className="w-4 h-4" />, text: "Терраса" },
      { icon: <Wifi className="w-4 h-4" />, text: "Wi-Fi" }
    ],
    gradient: "from-purple-400 to-pink-500"
  }
];

export default function AccommodationSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % accommodations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + accommodations.length) % accommodations.length);
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="py-12 sm:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Размещение
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Выберите идеальный вариант для вашего отдыха
          </p>
        </motion.div>

        {/* Desktop: Card Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 sm:gap-8">
          {accommodations.map((accommodation, index) => (
            <motion.div
              key={accommodation.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="neumorphism rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500">
                {/* Image */}
                <div className="relative">
                  <motion.img
                    src={accommodation.image}
                    alt={accommodation.title}
                    className="w-full h-72 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Type badge */}
                  <div className={`absolute top-4 left-4 px-3 py-2 rounded-full bg-gradient-to-r ${accommodation.gradient} text-white font-semibold text-sm backdrop-blur-sm`}>
                    {accommodation.type}
                  </div>
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {accommodation.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {accommodation.description}
                  </p>

                  {/* Amenities */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Удобства</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {accommodation.amenities.map((amenity, amenityIndex) => (
                        <motion.div
                          key={amenityIndex}
                          className="flex items-center gap-3 p-3 rounded-xl glass hover:shadow-md transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${accommodation.gradient} text-white flex-shrink-0`}>
                            {amenity.icon}
                          </div>
                          <span className="text-gray-700 font-medium text-sm">{amenity.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Link href={accommodation.link}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full px-6 py-3 rounded-xl bg-gradient-to-r ${accommodation.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                      >
                        Подробнее
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: New Modern Carousel */}
        <div className="lg:hidden">
          {/* Swipeable Carousel Container */}
          <div 
            className="relative"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="overflow-hidden rounded-3xl">
              <motion.div
                className="flex"
                animate={{ x: `${-currentSlide * 100}%` }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {accommodations.map((accommodation, index) => (
                  <div key={accommodation.id} className="w-full flex-shrink-0">
                    <motion.div 
                      className="bg-white rounded-3xl shadow-xl overflow-hidden mx-2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Hero Image Section */}
                      <div className="relative h-64">
                        <img
                          src={accommodation.image}
                          alt={accommodation.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        
                        {/* Floating Badge */}
                        <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full bg-gradient-to-r ${accommodation.gradient} text-white font-bold text-xs backdrop-blur-sm shadow-lg`}>
                          {accommodation.type}
                        </div>
                        
                        {/* Title Section */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-bold text-white mb-1">
                            {accommodation.title}
                          </h3>
                          <p className="text-white/90 text-sm">
                            {accommodation.description}
                          </p>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-5">
                        {/* Amenities Header */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${accommodation.gradient}`}></div>
                          <h4 className="text-lg font-bold text-gray-800">Удобства и услуги</h4>
                        </div>

                        {/* Amenities Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          {accommodation.amenities.map((amenity, amenityIndex) => (
                            <motion.div
                              key={amenityIndex}
                              className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <div className={`p-2 rounded-xl bg-gradient-to-r ${accommodation.gradient} text-white shadow-md`}>
                                {amenity.icon}
                              </div>
                              <span className="text-gray-700 font-medium text-xs leading-tight">
                                {amenity.text}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Bottom Action Area */}
                        <div className="mt-6 pt-4 border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${accommodation.gradient}`}></div>
                              <span className="text-sm text-gray-600">Готов к заселению</span>
                            </div>
                            <Link href={accommodation.link}>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-2 rounded-full bg-gradient-to-r ${accommodation.gradient} text-white font-semibold text-sm shadow-lg`}
                              >
                                Подробнее
                              </motion.button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Side Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:shadow-xl transition-all duration-300 shadow-lg z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:shadow-xl transition-all duration-300 shadow-lg z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Pills - moved to bottom */}
          <div className="flex justify-center mt-6">
            <div className="flex bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg">
              {accommodations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {index === 0 ? 'Гостевой Дом' : 'Семейный номер'}
                </button>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2">
              {accommodations.map((_, index) => (
                <div key={index} className="flex items-center">
                  <button
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-8'
                        : 'bg-gray-300'
                    }`}
                  />
                  {index < accommodations.length - 1 && (
                    <div className="w-4 h-0.5 bg-gray-200 mx-1"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
