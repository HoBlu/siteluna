'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Send } from 'lucide-react';
import Layout from '../components/Layout';

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Телефон",
    value: "+7 (962) 807-50-50",
    description: "Звоните круглосуточно",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "E-mail",
    value: "luna50.altai@yandex.ru",
    description: "Ответим в течение часа",
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Адрес",
    value: "Горный Алтай, с. Ая, улица Советская 50",
    description: "Республика Алтай",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Время работы",
    value: "Круглосуточно",
    description: "7 дней в неделю",
    gradient: "from-orange-400 to-red-500"
  }
];

const socialLinks = [
  {
    name: "WhatsApp",
    icon: <MessageCircle className="w-6 h-6" />,
    gradient: "from-green-400 to-green-600",
    href: "https://api.whatsapp.com/send/?phone=79628075050&text&type=phone_number&app_absent=0"
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-6 h-6" />,
    gradient: "from-pink-400 to-rose-500",
    href: "https://www.instagram.com/luna50.altai"
  }
];

export default function ContactsPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Как нас найти?
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Контактная информация
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="neumorphism rounded-3xl p-6 text-center group"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${contact.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {contact.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{contact.title}</h3>
                <p className="text-gray-900 font-semibold mb-1">{contact.value}</p>
                <p className="text-sm text-gray-600">{contact.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Map and Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="neumorphism rounded-3xl overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Мы на карте</h2>
                <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center mb-4">
                  <iframe 
                    src="https://yandex.ru/maps/11235/altai-krai/house/sovetskaya_ulitsa_50/bEwYfgZkSEYAQFtrfXV1dHxkYg==/?ll=85.815381%2C51.944491&z=16.6"
                    width="100%" 
                    height="100%" 
                    frameBorder="0"
                    className="rounded-2xl"
                    title="Карта расположения базы отдыха Луна №50"
                  />
                </div>
                <motion.a
                  href="https://yandex.ru/maps/11235/altai-krai/house/sovetskaya_ulitsa_50/bEwYfgZkSEYAQFtrfXV1dHxkYg==/?ll=85.815381%2C51.944491&z=16.6"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-teal-400 to-blue-500 text-white py-3 rounded-xl font-semibold text-center block hover:shadow-lg transition-all duration-300"
                >
                  Показать на карте
                </motion.a>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              {/* Location Details */}
              <div className="neumorphism rounded-3xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-400 to-pink-500 text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  Расположение
                </h3>
                <p className="text-gray-600 mb-2">
                  <strong>Село Ая, ул. Советская 50</strong>
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Наша база отдыха расположена в живописном селе Ая, на берегу реки Катунь. 
                  Удобный подъезд на автомобиле, рядом магазины и достопримечательности Горного Алтая.
                </p>
              </div>

              {/* Social Media */}
              <div className="neumorphism rounded-3xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Мы в социальных сетях</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r ${social.gradient} text-white hover:shadow-lg transition-all duration-300`}
                    >
                      {social.icon}
                      <span className="font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="neumorphism rounded-3xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Свяжитесь с нами</h3>
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Позвонить сейчас
                  </motion.button>
                  <motion.a
                    href="https://t.me/luna50_manager"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-400 to-purple-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Написать в Телеграм
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
