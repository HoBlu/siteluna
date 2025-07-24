'use client';

import { motion } from 'framer-motion';
import { Waves, Home, Thermometer, TreePine, Users, Flame } from 'lucide-react';
import { useState, useEffect } from 'react';

const services = [
  {
    id: 1,
    title: "Террасы и столовая",
    description: "В разработке",
    icon: <Home className="w-8 h-8" />,
    status: "В разработке",
    gradient: "from-blue-400 to-blue-600"
  },
  {
    id: 2,
    title: "Горная река",
    description: "Прогулки вдоль Катуни. Наслаждайтесь шумом воды и свежестью горного воздуха.",
    icon: <Waves className="w-8 h-8" />,
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    id: 3,
    title: "Комфортный климат",
    description: "Системы отопления для любого времени года. Тёплые полы, современные системы вентиляции обеспечивают комфортное пребывание в любое время года. Ощутите настоящий домашний уют вдали от дома.",
    icon: <Thermometer className="w-8 h-8" />,
    gradient: "from-orange-400 to-red-500"
  },
  {
    id: 4,
    title: "Уютные домики",
    description: "Отдельные домики с отдельной террасой. Полностью оборудованные домики с двуспальной кроватью, двухъярусной кроватью, тёплыми полами и всеми удобствами. Вечерние прогулки по освещенным дорожкам подарят незабываемые впечатления.",
    icon: <TreePine className="w-8 h-8" />,
    gradient: "from-green-400 to-emerald-600"
  },
  {
    id: 5,
    title: "Просторный бассейн с подогревом",
    description: "Просторный бассейн с зонами для взрослых и детей. Комфортная зона отдыха с шезлонгами и лежаками. Бассейн - это не только возможность освежиться в жаркий день, но и отличное возможность для общения и создания ярких воспоминаний.",
    icon: <Users className="w-8 h-8" />,
    gradient: "from-purple-400 to-pink-500"
  },
  {
    id: 6,
    title: "Бани",
    description: "Стоимость: 2000 рублей в час, Минимальное время бронирования: 2 часа. Наслаждайтесь настоящим банным отдыхом в окружении живописной природы. Идеальное место для расслабления после активного дня.",
    icon: <Flame className="w-8 h-8" />,
    price: "2000 ₽/час",
    minTime: "Минимум 2 часа",
    gradient: "from-red-400 to-orange-500"
  }
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            ЛУНА №50
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Уютный отдых в горах
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Откройте для себя комфорт и красоту природы на нашей горной базе отдыха
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              className="group"
            >
              <div className="neumorphism rounded-3xl p-8 h-full relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                    {service.title}
                  </h3>
                  
                  {service.status && (
                    <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
                      {service.status}
                    </div>
                  )}

                  {service.price && (
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-green-600">{service.price}</span>
                      <p className="text-sm text-gray-500 mt-1">{service.minTime}</p>
                    </div>
                  )}

                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
