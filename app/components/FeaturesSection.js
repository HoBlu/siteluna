'use client';

import { motion } from 'framer-motion';
import { Heart, Volume2, Smartphone, MapPin, TreePine, Baby, Sparkles } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Продуманные до мелочей",
    description: "Мы позаботились о каждой детали, чтобы ваше пребывание было максимально комфортным и запоминающимся.",
    icon: <Heart className="w-8 h-8" />,
    gradient: "from-sky-400 to-blue-500"
  },
  {
    id: 2,
    title: "Уединение и спокойствие",
    description: "Наши домики расположены в живописных местах, вдали от городского шума и суеты, обеспечивая полный релакс.",
    icon: <Volume2 className="w-8 h-8" />,
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    id: 3,
    title: "Современные удобства",
    description: "Каждый домик оборудован всем необходимым для комфортного отдыха, включая Wi-Fi и современную технику.",
    icon: <Smartphone className="w-8 h-8" />,
    gradient: "from-slate-400 to-slate-600"
  },
  {
    id: 4,
    title: "Идеальное расположение",
    description: "Удобное расположение, в пешей доступности к продуктовым магазинам.",
    icon: <MapPin className="w-8 h-8" />,
    gradient: "from-emerald-400 to-emerald-600"
  },
  {
    id: 5,
    title: "Живописная природа и чистейший воздух",
    description: "Уединение и тишина — то, чего так не хватает в городе.",
    icon: <TreePine className="w-8 h-8" />,
    gradient: "from-sky-400 to-emerald-500"
  },
  {
    id: 6,
    title: "Анимация для детей планируется в ближайшем будущем",
    description: "Творческие мастер-классы и игры на свежем воздухе для детей любого возраста. Профессиональный присмотр за детьми, чтобы вы могли отдохнуть без забот.",
    icon: <Baby className="w-8 h-8" />,
    status: "Скоро",
    gradient: "from-slate-400 to-slate-500"
  },
  {
    id: 7,
    title: "Чистота, порядок и забота в деталях",
    description: "Мы следим за каждой мелочью — от свежего белья до уютных мелочей. Заботимся о вашем комфорте: преимущество аккумуляторная техника, которая не потревожит ваш отдых.",
    icon: <Sparkles className="w-8 h-8" />,
    gradient: "from-blue-400 to-sky-500"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sky-500 via-blue-500 to-slate-500 bg-clip-text text-transparent">
            Особенности
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Наша база отдыха создана с особым вниманием к деталям для вашего максимального комфорта
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              className="group relative"
            >
              <div className="neumorphism rounded-3xl p-8 h-full relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Status badge for coming soon features */}
                {feature.status && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                    {feature.status}
                  </div>
                )}

                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Готовы испытать все эти удобства на себе? Забронируйте свой идеальный отдых уже сегодня!
          </p>
         
        </motion.div>
      </div>
    </section>
  );
}
