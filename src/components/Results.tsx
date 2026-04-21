import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Марина С.',
    result: 'ЕГЭ: 92 балла',
    text: 'Пришла к Алексею за полгода до ЕГЭ с уровнем 60 баллов. Результат превзошел ожидания! Все четко, без лишней воды, очень много дельных лайфхаков.',
    placeholder: 'https://picsum.photos/seed/review1/400/400',
  },
  {
    name: 'Иван Петров',
    result: 'ОГЭ: Оценка 5',
    text: 'Математика всегда была слабым местом. Благодаря занятиям перестал бояться геометрии и сдал экзамен на отлично. Огромное спасибо!',
    placeholder: 'https://picsum.photos/seed/review2/400/400',
  },
  {
    name: 'Елена К.',
    result: 'ЕГЭ: 85 баллов',
    text: 'Очень удобный формат онлайн-занятий. Понятные конспекты и крутая поддержка в чате. Сдавать было совсем не страшно.',
    placeholder: 'https://picsum.photos/seed/review3/400/400',
  },
];

export function Results() {
  return (
    <section id="results" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <h2 className="text-base font-bold text-brand-600 uppercase tracking-widest mb-4">Результаты</h2>
            <h3 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 leading-tight">
              Истории успеха моих учеников
            </h3>
          </div>
          <div className="flex items-center gap-2 bg-brand-50 px-6 py-3 rounded-2xl border border-brand-100">
            <MessageSquare className="text-brand-600" />
            <span className="font-bold text-slate-800">100+ положительных отзывов</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-slate-50 rounded-[40px] border border-slate-100 relative hover:bg-white hover:shadow-2xl hover:shadow-brand-100 transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-brand-200">
                <Quote size={48} />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={review.placeholder}
                  alt={review.name}
                  className="w-16 h-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-lg">{review.name}</h4>
                  <p className="text-brand-600 font-bold text-sm tracking-tight">{review.result}</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed relative z-10 italic">"{review.text}"</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 p-8 sm:p-12 bg-brand-600 rounded-[40px] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="relative z-10">
                <h4 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">Готовы стать следующим в списке поступивших?</h4>
                <p className="text-brand-50/80 text-lg">Запишитесь на первое пробное занятие уже сегодня — это бесплатно!</p>
            </div>
            <a href="#contact" className="relative z-10 shrink-0 bg-white text-brand-600 px-10 py-5 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-transform shadow-xl shadow-brand-700/50">
                Хочу результат
            </a>
            {/* Decoration */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 right-0 w-80 h-80 bg-brand-400/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
