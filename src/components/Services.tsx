import React from 'react';
import { motion } from 'motion/react';
import { Target, Zap, TrendingUp, Users } from 'lucide-react';

const services = [
  {
    title: 'Подготовка к ЕГЭ',
    desc: 'Профильный и базовый уровни. Разбор всех частей, фокус на 2-ю часть и сложные задачи.',
    icon: Target,
    labels: ['База', 'Профиль'],
    price: 'от 2500₽/час',
  },
  {
    title: 'Подготовка к ОГЭ',
    desc: 'Устранение пробелов, подготовка к типовым заданиям и психологическая настройка.',
    icon: Zap,
    labels: ['9 класс'],
    price: 'от 2000₽/час',
  },
  {
    title: 'Повышение успеваемости',
    desc: 'Помощь с текущей программой, подготовка к контрольным работам и ВПР.',
    icon: TrendingUp,
    labels: ['5-11 классы'],
    price: 'от 1800₽/час',
  },
  {
    title: 'Групповые занятия',
    desc: 'Мини-группы до 4 человек. Атмосфера поддержки и здоровая конкуренция.',
    icon: Users,
    labels: ['Онлайн'],
    price: 'от 1200₽/час',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-base font-bold text-brand-600 uppercase tracking-widest mb-4">Услуги и форматы</h2>
        <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 leading-tight">
          Найдем подходящий формат <br className="hidden sm:block" /> для ваших целей
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-brand-100 shadow-sm hover:shadow-xl hover:shadow-brand-100 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 mb-6">
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-display font-bold text-slate-900 mb-2">{service.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {service.labels.map(l => (
                  <span key={l} className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-[10px] font-bold uppercase tracking-wider">{l}</span>
                ))}
              </div>
              
              <div className="pt-6 border-top border-slate-100 mt-auto">
                <p className="text-xs font-bold text-slate-400 uppercase mb-1">Стоимость</p>
                <p className="text-xl font-display font-bold text-brand-600">{service.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
