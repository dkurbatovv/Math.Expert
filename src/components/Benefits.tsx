import React from 'react';
import { motion } from 'motion/react';
import { BookMarked, Eye, BrainCircuit, CalendarCheck, HeartHandshake, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    title: 'Индивидуальный план',
    desc: 'Программа подбирается после бесплатного диагностического урока.',
    icon: BookMarked,
  },
  {
    title: 'Понятный язык',
    desc: 'Объясняю даже самые абстрактные темы на жизненных примерах.',
    icon: BrainCircuit,
  },
  {
    title: 'Авторская методика',
    desc: 'Комбинация лучших техник подготовки и личных разработок.',
    icon: ShieldCheck,
  },
  {
    title: 'Регулярные пробники',
    desc: 'Пишем зачеты раз в месяц для контроля прогресса и снятия стресса.',
    icon: Eye,
  },
  {
    title: 'Гибкий график',
    desc: 'Возможность переносов и подбора удобного времени.',
    icon: CalendarCheck,
  },
  {
    title: 'Всегда на связи',
    desc: 'Отвечаю на вопросы ученика в Telegram вне уроков.',
    icon: HeartHandshake,
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-brand-900 text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-800 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-600 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-brand-400 font-bold uppercase tracking-widest mb-4">Почему выбирают меня</h2>
          <h3 className="text-3xl sm:text-5xl font-display font-bold leading-tight">
            Больше, чем просто сухие формулы
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-800 flex items-center justify-center text-brand-400">
                <benefit.icon size={26} />
              </div>
              <div>
                <h4 className="text-xl font-display font-bold mb-3">{benefit.title}</h4>
                <p className="text-brand-100/70 leading-relaxed">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
