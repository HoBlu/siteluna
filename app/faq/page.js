'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Layout from '../components/Layout';

const faqData = [
  {
    question: "Где находится база?",
    answer: "Наша база отдыха ЛУНА 50 находится по адресу: Республика Алтай, Село Ая, улица Советская 50. Мы расположены в живописном месте на берегу реки Катунь, в окружении горных пейзажей Алтая."
  },
  {
    question: "Что есть на базе?",
    answer: "На нашей базе отдыха есть: уютные домики различной вместимости, русская баня, бассейн, мангальные зоны для барбекю, Wi-Fi, парковка и многое другое для комфортного отдыха."
  },
  {
    question: "Стоимость?",
    answer: "Стоимость проживания зависит от выбранного типа домика, сезона и срока пребывания. Для получения точной стоимости свяжитесь с нами."
  },
  {
    question: "Почему стоит выбрать нас?",
    answer: "Нас выбирают за: живописную природу Горного Алтая, уютную домашнюю атмосферу, качественный сервис, близость к популярным достопримечательностям, индивидуальный подход к каждому гостю, идеальное расположение и возможность уединиться с природой. Мы стремимся сделать ваш отдых незабываемым!"
  },
  {
    question: "Какой минимальный срок проживания?",
    answer: "Минимальный срок проживания на нашей базе составляет сутки. Это позволяет нашим гостям полноценно отдохнуть и насладиться красотами Алтая."
  },
  {
    question: "Можно ли с животными?",
    answer: "На данный момент политика базы не предусматривает проживание с домашними животными. Это связано с обеспечением комфорта всех наших гостей и соблюдением санитарных норм."
  },
  {
    question: "Как добраться?",
    answer: "До нас можно добраться на автомобиле по Чуйскому тракту до села Ая, затем повернуть на улицу Советская. Ближайший аэропорт находится в Горно-Алтайске (около 1 часа езды)."
  },
  {
    question: "Какие удобства в домиках?",
    answer: "В наших домиках есть: удобные кровати с качественным постельным бельем, мебель для отдыха, посуда и кухонная утварь."
  },
  {
    question: "Есть ли Wi-Fi?",
    answer: "Да, на территории базы предоставляется бесплатный Wi-Fi. Скорость интернета позволяет комфортно пользоваться мессенджерами и социальными сетями, хотя для \"цифрового детокса\" рекомендуем больше времени проводить на природе!"
  },
  {
    question: "Есть ли парковка?",
    answer: "Да, у нас есть бесплатная охраняемая парковка для автомобилей наших гостей. Парковочные места находятся в непосредственной близости от домиков."
  },
  {
    question: "Какие есть развлечения?",
    answer: "На территории есть: бассейн, баня, мангальные зоны. Рядом с базой множество пешеходных маршрутов и достопримечательностей Алтая."
  },
  {
    question: "Можно ли организовать мероприятия?",
    answer: "Обсудите детали с администратором."
  },
  {
    question: "Есть ли скидки и акции?",
    answer: "Следите за нашими акциями в социальных сетях или уточняйте актуальные предложения при бронировании."
  },
  {
    question: "Время заезда и выезда?",
    answer: "Стандартное время заезда: с 15:00, выезда: до 12:00. При наличии свободных домиков возможен ранний заезд или поздний выезд по договоренности с администрацией."
  },
  {
    question: "Условия отмены бронирования?",
    answer: "Подробные условия обсуждаются при бронировании."
  }
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="neumorphism rounded-2xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/50 transition-colors"
      >
        <h3 className="text-lg font-semibold text-gray-800 pr-4">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          {isOpen ? (
            <Minus className="w-5 h-5 text-purple-600" />
          ) : (
            <Plus className="w-5 h-5 text-purple-600" />
          )}
        </motion.div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Частые вопросы
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Найдите ответы на самые популярные вопросы о нашей базе отдыха
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItems.has(index)}
                  onToggle={() => toggleItem(index)}
                />
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="neumorphism rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Не нашли ответ на свой вопрос?
              </h2>
              <p className="text-gray-600 mb-6">
                Свяжитесь с нами, и мы с радостью ответим на все ваши вопросы!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
                >
                  Позвонить: +7 (962) 807-50-50
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
                >
                  Написать на почту
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
