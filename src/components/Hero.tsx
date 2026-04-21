import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_-20%,#dbeafe_0%,transparent_70%)] opacity-50" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-brand-200 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles size={14} />
              <span>Средний балл учеников — 87+</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.1] mb-6 text-balance">
              Подготовка к ОГЭ и ЕГЭ по математике с{' '}
              <span className="text-brand-600 relative inline-block">
                гарантией
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-brand-400" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C30.6667 3.33333 89.3333 1.1 198 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{' '}
              результата
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Повышу успеваемость, помогу поверить в свои силы и сдать сложнейшие экзамены на высокий балл благодаря проверенной методике.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-200"
              >
                Записаться на занятие
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4 text-sm text-slate-500 font-medium px-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`}
                      alt="Student"
                      className="w-8 h-8 rounded-full border-2 border-white ring-2 ring-brand-50"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <span>150+ успешных кейсов</span>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                'Индивидуальный план',
                'Доступ 24/7',
                'Пробники ежемесячно'
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <CheckCircle2 size={18} className="text-brand-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-brand-100 border-4 border-white">
              <img
                src="https://picsum.photos/seed/math-tutor/800/1000"
                alt="Репетитор по математике"
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent hidden lg:block" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hidden lg:block">
                <p className="text-white text-lg font-medium leading-snug">
                  "Моя цель — не просто научить решать задачи, а привить любовь к логике и математическому мышлению."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold">
                    А.К.
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Алексей Кузнецов</p>
                    <p className="text-white/70 text-xs">Ведущий преподаватель</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-600 rounded-3xl -z-10 rotate-12" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-brand-200 rounded-full -z-10" />
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 p-4 bg-white rounded-2xl shadow-xl border border-brand-50 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                  <Sparkles size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Результат</p>
                  <p className="text-xl font-display font-bold text-slate-900">+35 баллов</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
