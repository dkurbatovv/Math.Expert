import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    num: '01',
    title: 'Заявка',
    desc: 'Оставляете заявку на сайте или в Telegram. Мы связываемся для уточнения деталей.',
  },
  {
    num: '02',
    title: 'Диагностика',
    desc: 'Проводим первое бесплатное занятие, определяем уровень и строим план подготовки.',
  },
  {
    num: '03',
    title: 'Обучение',
    desc: 'Регулярные занятия по расписанию, домашние задания и проверка прогресса.',
  },
  {
    num: '04',
    title: 'Экзамен',
    desc: 'Успешная сдача на максимальный балл и поступление в ВУЗ мечты.',
  },
];

export function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-base font-bold text-brand-600 uppercase tracking-widest mb-4">Как мы работаем</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 leading-tight">
            Путь от первого клика до «сотки» на ЕГЭ
          </h3>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="absolute top-8 left-0 w-full h-px bg-slate-100 hidden lg:block" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center lg:text-left"
              >
                <div className="inline-flex w-16 h-16 rounded-full bg-brand-50 border-4 border-white shadow-sm items-center justify-center text-brand-600 font-display font-black text-xl mb-6 relative z-10 transition-transform hover:scale-110">
                  {step.num}
                </div>
                <h4 className="text-xl font-display font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm lg:text-base">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
