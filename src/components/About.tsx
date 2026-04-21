import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, Clock } from 'lucide-react';

export function About() {
  const stats = [
    { label: 'Лет опыта', value: '5+', icon: Clock },
    { label: 'Учеников', value: '300+', icon: GraduationCap },
    { label: 'Средний балл', value: '87', icon: Award },
    { label: 'Курсов', value: '12', icon: BookOpen },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-base font-bold text-brand-600 uppercase tracking-widest mb-4">О преподавателе</h2>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Индивидуальный подход и вера в возможности каждого ученика
            </h3>
            
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                Меня зовут Алексей, и я помогаю школьникам преодолеть страх перед математикой уже более 5 лет. За это время я разработал собственную методику, которая позволяет систематизировать знания даже при подготовке «с нуля».
              </p>
              <p>
                Мое образование — МГУ имени М.В. Ломоносова (механико-математический факультет). Я сам прошел через все этапы подготовки и знаю все «подводные камни» экзаменов изнутри.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 bg-brand-50 rounded-2xl border border-brand-100">
                  <p className="text-2xl font-bold text-brand-700 mb-1">МГУ</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Образование</p>
                </div>
                <div className="p-4 bg-brand-50 rounded-2xl border border-brand-100">
                  <p className="text-2xl font-bold text-brand-700 mb-1">Top-5</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Рейтинг Profi</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl hover:shadow-brand-100 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600 mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon size={28} />
                  </div>
                  <div className="text-3xl font-display font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
