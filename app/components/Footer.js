'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle, Send } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-sky-400 via-blue-400 to-slate-400 bg-clip-text text-transparent mb-4">
              ЛУНА №50
            </h3>
            <p className="text-slate-300 text-lg mb-6 max-w-md">
              Уютный отдых в горах Алтая. Откройте для себя комфорт и красоту природы на нашей горной базе отдыха.
            </p>
       
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-6">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">Республика Алтай</p>
                  <p className="text-slate-400 text-sm">Горный Алтай</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">+7 (962) 807-50-50</p>
                  <p className="text-slate-400 text-sm">Круглосуточно</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p className="text-slate-300">luna50.altai@yandex.ru</p>
              </div>
            </div>
          </motion.div>

          {/* Working Hours & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6">Режим работы</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">Круглосуточно</p>
                  <p className="text-slate-400 text-sm">7 дней в неделю</p>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://www.instagram.com/luna50.altai"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://api.whatsapp.com/send/?phone=79628075050&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://t.me/luna50_altai"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
              >
                <Send className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-slate-800 mt-12 pt-8 text-center"
        >
          <p className="text-slate-400">
            © {currentYear} Луна №50. Все права защищены. 
            <span className="mx-2">|</span>
            Создано с ❤️ для незабываемого отдыха в горах Алтая
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
