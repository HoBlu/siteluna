'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';

const galleryImages = [
  { id: 1, src: '/image/gallery-1.jpg', title: 'Природа Алтая' },
  { id: 2, src: '/image/gallery-2.jpg', title: 'Виды базы' },
  { id: 3, src: '/image/gallery-3.jpg', title: 'Баня' },
  { id: 4, src: '/image/gallery-4.jpg', title: 'Территория' },
  { id: 5, src: '/image/gallery-5.jpg', title: 'Отдых' },
  { id: 6, src: '/image/gallery-6.jpg', title: 'Бассейн' },
  { id: 7, src: '/image/gallery-7.jpg', title: 'Номера' },
  { id: 8, src: '/image/gallery-8.jpg', title: 'Уют' },
  { id: 9, src: '/image/hero-bg.jpg', title: 'Главный вид' },
  { id: 10, src: '/image/guest-house.jpg', title: 'Гостевой дом' },
  { id: 11, src: '/image/family-suite.jpg', title: 'Семейный люкс' },
  { id: 12, src: '/image/gallery-11.jpg', title: 'Детали' },
  // Accommodation - Family Suite
  { id: 13, src: '/image/family-suite-10jpg.jpg', title: 'Семейный номер' },
  { id: 14, src: '/image/family-suite-1jpg.jpg', title: 'Интерьер номера' },
  { id: 15, src: '/image/family-suite-2jpg.jpg', title: 'Спальня' },
  { id: 16, src: '/image/family-suite-3jpg.jpg', title: 'Комфорт' },
  { id: 17, src: '/image/family-suite-4jpg.jpg', title: 'Детали интерьера' },
  { id: 18, src: '/image/family-suite-5jpg.jpg', title: 'Зона отдыха' },
  { id: 19, src: '/image/family-suite-6jpg.jpg', title: 'Удобства' },
  { id: 20, src: '/image/family-suite-7jpg.jpg', title: 'Ванная комната' },
  { id: 21, src: '/image/family-suite-8jpg.jpg', title: 'Вид из номера' },
  { id: 22, src: '/image/family-suite-9jpg.jpg', title: 'Уютная атмосфера' },
  // Accommodation - Guest House
  { id: 23, src: '/image/gost-suite-interior.jpg', title: 'Интерьер домика' },
  { id: 24, src: '/image/gost-suite-kitchen.jpg', title: 'Кухня в домике' },
  { id: 25, src: '/image/gost-suite-terrace.jpg', title: 'Терраса домика' },
  { id: 26, src: '/image/gost-suite-bathroom.jpg', title: 'Санузел' },
  { id: 27, src: '/image/gost-suite-view.jpg', title: 'Вид с террасы' },
  // Services & Amenities
  { id: 28, src: '/image/baza3.jpg', title: 'Домики' },
  { id: 29, src: '/image/tv.jpg', title: 'Удобства' },
  { id: 30, src: '/image/baza4.jpg', title: 'Зимний вид' },
  { id: 31, src: '/image/doma.jpg', title: 'Наши домики' },
  { id: 32, src: '/image/kitcchen.jpg', title: 'Кухня' },
  { id: 33, src: '/image/2-etaj.jpg', title: 'Беседка' },
  { id: 34, src: '/image/poll3.jpg', title: 'Бассейн (общий вид)' },
  { id: 35, src: '/image/poll2.jpg', title: 'Бассейн (теплая вода)' },
  { id: 36, src: '/image/photo_2026-01-27_18-23-35.jpg', title: 'Зона отдыха у бассейна' },
  { id: 37, src: '/image/IMG_20250711_184546.jpg', title: 'Баня снаружи' },
  { id: 38, src: '/image/par.jpg', title: 'Парная' },
  { id: 39, src: '/image/IMG_20250711_183526 (2).jpg', title: 'Комната отдыха' },
  // Activities and Surroundings
  { id: 41, src: '/image/4c6b5763a479eec7da7ad6ab54701b3a.jpg', title: 'Сплавы' },
  { id: 42, src: '/image/img_66139f42a42c2_936.jpg', title: 'Конные прогулки' },
  { id: 43, src: '/image/alt_birkat_02.jpg', title: 'Аквапарк' },
  { id: 44, src: '/image/4.jpg', title: 'Квадроциклы' },
  { id: 45, src: '/image/d36e4620743af6f53599ec6757e860ce.jpg', title: 'Джип-туры' },
  { id: 46, src: '/image/ozeroaya.jpg', title: 'Озеро Ая' },
  { id: 47, src: '/image/palec.jpg', title: 'Чёртов палец' },
  { id: 48, src: '/image/majerok.jpg', title: 'Манжерок' },
  // Territory and Other Services
  { id: 50, src: '/image/summer-kitchen.png', title: 'Летняя кухня' },
  { id: 51, src: '/image/mangal.jpg', title: 'Мангал' },
  { id: 52, src: '/image/conference.jpg', title: 'Конференц-зал' },
  { id: 53, src: '/image/2etaj4.jpg', title: 'Зал для мероприятий' },
  { id: 54, src: '/image/2etaj2.jpg', title: 'Банкетная зона' },
  { id: 55, src: '/image/dom2.jpg', title: 'Территория базы' },
  { id: 56, src: '/image/IMG_20250720_180346.jpg', title: 'Природа вокруг' }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Фотогалерея
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Посмотрите, как выглядит наша база отдыха и убедитесь в красоте горной природы Алтая
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-2xl neumorphism aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                    </div>
                  </div>

                  {/* Plus icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <div className="w-4 h-0.5 bg-white absolute"></div>
                        <div className="w-0.5 h-4 bg-white absolute"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-white/70 text-sm mt-1">
                {currentIndex + 1} из {galleryImages.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </Layout>
  );
}
