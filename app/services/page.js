'use client';

import { motion } from 'framer-motion';
import { Bed, Users, Wifi, Coffee, Bath, Wind, TreePine, Waves, Home, Thermometer, Flame, Car } from 'lucide-react';
import Layout from '../components/Layout';

const accommodationTypes = [
  {
    id: 1,
    title: "НОМЕРА В БОЛЬШОМ ДОМЕ",
    description: "3 просторных номера на первом этаже. Каждый номер рассчитан на комфортное размещение до 4 человек. Перед каждым номером — индивидуальная терраса со столиком.",
    image: "/image/family-suite.jpg",
    gradient: "from-blue-400 to-purple-500"
  },
  {
    id: 2,
    title: "ОТДЕЛЬНЫЕ ДОМИКИ",
    description: "Уютные Гостевые дома с террасой и всеми удобствами номеров основного здания. Идеальный выбор для тех, кто ценит уединение и приватность.",
    image: "/image/guest-house.jpg",
    gradient: "from-green-400 to-emerald-500"
  }
];

const roomAmenities = [
  { icon: <Bed className="w-5 h-5" />, text: "Двуспальная кровать" },
  { icon: <Wind className="w-5 h-5" />, text: "Теплый пол в ванной" },
  { icon: <Coffee className="w-5 h-5" />, text: "Микроволновка" },
  { icon: <Coffee className="w-5 h-5" />, text: "Мини-холодильник" },
  { icon: <Users className="w-5 h-5" />, text: "Диван или Двухъярусную кровать" },
  { icon: <Bath className="w-5 h-5" />, text: "Водонагреватель" },
  { icon: <Bath className="w-5 h-5" />, text: "Душевая и санузел" },
  { icon: <Wifi className="w-5 h-5" />, text: "Wi-Fi" }
];

const additionalServices = [
  {
    title: "БАНЯ",
    description: "На территории базы расположена баня, где вы можете расслабиться и восстановить силы после активного дня.",
    icon: <Flame className="w-8 h-8" />,
    gradient: "from-red-400 to-orange-500"
  },
  {
    title: "МАНГАЛЬНЫЕ ЗОНЫ",
    description: "Специально оборудованные места для барбекю позволят вам насладиться приготовлением еды на открытом огне в кругу близких.",
    icon: <Home className="w-8 h-8" />,
    gradient: "from-orange-400 to-red-500"
  },
  {
    title: "БЛИЗОСТЬ К МАГАЗИНАМ",
    description: "База отдыха расположена недалеко от магазинов, где вы сможете приобрести все необходимое для комфортного отдыха.",
    icon: <Car className="w-8 h-8" />,
    gradient: "from-blue-400 to-cyan-500"
  }
];

export default function ServicesPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              УСЛУГИ И СЕРВИС
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комфорт и уют на уникальной Базе отдыха ЛУНА №50
            </p>
          </motion.div>

          {/* Accommodation Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">РАЗМЕЩЕНИЕ</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Мы предлагаем комфортное размещение с комфортными условиями.
            </p>

            <div className="space-y-16">
              {accommodationTypes.map((type, index) => (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative overflow-hidden rounded-3xl neumorphism"
                    >
                      <img
                        src={type.image}
                        alt={type.title}
                        className="w-full h-80 lg:h-96 object-cover"
                      />
                      <div className={`absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r ${type.gradient} text-white font-semibold text-sm`}>
                        {type.title}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{type.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {type.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Room Amenities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Каждый номер включает в себя</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {roomAmenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl neumorphism hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-400 to-pink-500 text-white">
                    {amenity.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{amenity.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pool Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="neumorphism rounded-3xl p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">БАССЕЙН</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Просторный бассейн чаша бассейна имеет две зоны — для взрослых и детей, что делает его идеальным местом для семейного отдыха.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="glass p-4 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 mb-2">16×8</div>
                      <div className="text-sm text-gray-600">Площадь метров</div>
                    </div>
                    <div className="glass p-4 rounded-xl">
                      <div className="text-lg font-semibold text-gray-800 mb-2">Отдельные зоны</div>
                      <div className="text-sm text-gray-600">для взрослых и детей</div>
                    </div>
                    <div className="glass p-4 rounded-xl">
                      <div className="text-lg font-semibold text-gray-800 mb-2">Зона отдыха</div>
                      <div className="text-sm text-gray-600">шезлонги и лежаки</div>
                    </div>
                    <div className="glass p-4 rounded-xl">
                      <div className="text-lg font-semibold text-gray-800 mb-2">Подогрев</div>
                      <div className="text-sm text-gray-600">и фильтрация</div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="text-6xl lg:text-8xl font-bold text-blue-500/20 absolute -top-4 -right-4">
                      16×8
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-blue-600">
                      БАССЕЙН
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="neumorphism rounded-3xl p-8 text-center"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} text-white mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
