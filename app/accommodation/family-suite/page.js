'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bed, 
  Users, 
  Wifi, 
  Coffee, 
  Bath, 
  Wind, 
  TreePine,
  Microwave,
  Droplets,
  ArrowLeft,
  MapPin,
  Star,
  Calendar,
  Phone,
  Mail,
  Send
} from 'lucide-react';
import Link from 'next/link';

const housePhotos = [
  "/image/family-suite.jpg",
  "/image/family-suite-interior.jpg",
];

const amenities = [
  { icon: <Bed className="w-5 h-5" />, text: "Двуспальная кровать", description: "Комфортная кровать размера Queen Size" },
  { icon: <Users className="w-5 h-5" />, text: "Диван", description: "Дополнительное спальное место для гостей" },
  { icon: <Wind className="w-5 h-5" />, text: "Теплый пол", description: "Подогрев пола во всем доме" },
  
  { icon: <Microwave className="w-5 h-5" />, text: "Микроволновка", description: "Для быстрого приготовления еды" },
  { icon: <Droplets className="w-5 h-5" />, text: "Водонагреватель", description: "Круглосуточная горячая вода" },
  { icon: <TreePine className="w-5 h-5" />, text: "Собственная терраса", description: "Терраса с прекрасным видом на природу" },
  { icon: <Wifi className="w-5 h-5" />, text: "Wi-Fi", description: "Бесплатный высокоскоростной интернет" }
];

export default function FamilySuitePage() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showFullGallery, setShowFullGallery] = useState(false);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % housePhotos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + housePhotos.length) % housePhotos.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src="/image/family-suite.jpg" 
            alt="Семейный номер" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
        </motion.div>

        {/* Back Button */}
        <motion.div 
          className="absolute top-8 left-8 z-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/" className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Назад</span>
          </Link>
        </motion.div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div 
            className="text-center text-white px-4 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div 
              className="inline-block px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full text-white font-bold text-sm mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              СЕМЕЙНЫЙ ЛЮКС У БАССЕЙНА
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Семейный номер в большом доме
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Просторный номер с современными удобствами для семей и дружных компаний
            </p>

            <div className="flex items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>Премиум размещение</span>
              </div>
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>До 4 гостей</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Description & Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                О размещении
              </h2>
              
              <div className="prose prose-lg text-gray-700 mb-8">
                <p className="text-lg leading-relaxed mb-6">
                 Добро пожаловать в наш уютный номер, расположенный в просторном коттедже у бассейна.
                  Этот современный, уютный номер площадью 25 кв.м идеально подходит для отдыха
                  от городской суеты и погружения в природу.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
Уютный номер из кедра, спрятанный среди величественных гор, словно теплая пристань у бурлящей реки, где аромат дерева смешивается
                  с прохладой горного воздуха. Внутри — мягкий свет, теплые полы и все, что нужно для полного расслабления: удобная двуспальная кровать, двухъярусный уголок для гостей,
                  душ с горячей водой, мини-холодильник для свежих завтраков. А с террасы — вид, от которого замирает сердце: река, вечно бегущая к горизонту, и небо, меняющее краски с
                  восходом и закатом. Здесь время замедляет шаг, а душа отдыхает.                </p>

                <p className="text-lg leading-relaxed">
 Особого внимания заслуживает просторная терраса, где вы сможете наслаждаться утренним
                  кофе под пение птиц или провести вечер в уютной атмосфере.                </p>
              </div>

              {/* Key Features */}
             
            </motion.div>

            {/* Right Column - Amenities */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Удобства и услуги</h3>
              
              <div className="grid gap-4">
                {amenities.map((amenity, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {amenity.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{amenity.text}</h4>
                      <p className="text-sm text-gray-600">{amenity.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Галерея фотографий
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Посмотрите на наш семейный номер изнутри и снаружи
            </p>
          </motion.div>

          {/* Main Photo Display */}
          <motion.div 
            className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-96 md:h-[500px]">
              <img 
                src={housePhotos[currentPhotoIndex]} 
                alt={`Семейный номер - фото ${currentPhotoIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Photo Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                {currentPhotoIndex + 1} / {housePhotos.length}
              </div>
            </div>
          </motion.div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {housePhotos.map((photo, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentPhotoIndex(index)}
                className={`relative h-20 md:h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                  currentPhotoIndex === index 
                    ? 'ring-4 ring-purple-500 scale-105' 
                    : 'hover:scale-105 hover:ring-2 hover:ring-purple-300'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <img 
                  src={photo} 
                  alt={`Миниатюра ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {currentPhotoIndex === index && (
                  <div className="absolute inset-0 bg-purple-500/20"></div>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Стоимость проживания
            </h2>
            <p className="text-lg text-gray-600">
              Цены указаны за сутки проживания
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 1-2 гостя */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">1-2 гостя</h3>
                
                <div className="text-3xl font-bold text-green-600 mb-2">6500₽</div>
                <p className="text-sm text-gray-500">за сутки</p>
              </div>
            </motion.div>

            {/* 3-4 гостя */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-200 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">3-4 гостя</h3>
                
                <div className="text-3xl font-bold text-purple-600 mb-2">8500₽</div>
                <p className="text-sm text-gray-500">за сутки</p>
              </div>
            </motion.div>

            {/* 5+ гостей */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">5+ гостей</h3>
                <p className="text-gray-600 mb-4">С дополнительным местом</p>
                <div className="text-3xl font-bold text-blue-600 mb-2">9500₽</div>
                <p className="text-sm text-gray-500">за сутки</p>
              </div>
            </motion.div>
          </div>

          {/* Pricing Note */}
          <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
           
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-blue-300">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Готовы забронировать?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для бронирования семейного номера и получения дополнительной информации
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="tel:+79628075050"
                className="flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Позвонить
              </motion.a>
              
              <motion.a
                href="https://t.me/luna50_manager"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-5 h-5" />
                Написать в Телеграм
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
