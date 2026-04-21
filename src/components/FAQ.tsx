import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Сколько длится подготовка?',
    a: 'Все индивидуально. Кому-то достаточно 3 месяца для повторения, а кому-то нужен год для системного изучения. Оптимально начинать за 10-12 месяцев до экзамена.',
  },
  {
    q: 'Можно ли подготовиться с нуля?',
    a: 'Да! Моя методика специально построена так, чтобы постепенно переходить от простых тем к сложным. Главное — дисциплина и выполнение домашних заданий.',
  },
  {
    q: 'Что если ученик пропустил занятие?',
    a: 'Мы стараемся переносить уроки на другое время. Главное — предупредить за 24 часа. Все материалы пропущенного урока остаются в доступе.',
  },
  {
    q: 'Какой формат занятий?',
    a: 'Я провожу занятия онлайн через Zoom или Google Meet с использованием интерактивной онлайн-доски Miro. Это полноценный эффект присутствия.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-brand-600 uppercase tracking-widest mb-4">Чаво</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">Вопросы и ответы</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-100 rounded-[2rem] overflow-hidden bg-slate-50/50">
              <button
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left hover:bg-white transition-colors group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-display font-bold text-slate-900 text-lg sm:text-xl pr-4">{faq.q}</span>
                <div className={`p-2 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-brand-600 text-white rotate-180' : 'bg-slate-200 text-slate-500'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-8 pb-8 text-slate-600 leading-relaxed text-sm sm:text-base border-t border-slate-100/50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
