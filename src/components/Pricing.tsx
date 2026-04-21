import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Разовое занятие',
    price: '2 500',
    unit: 'час',
    features: ['Проверка ДЗ', 'Конспект урока', 'Поддержка в чате'],
    button: 'Записаться',
    highlight: false,
  },
  {
    name: 'Пакет «Интенсив»',
    price: '18 000',
    unit: '8 занятий',
    desc: 'Выгода: 2 000₽',
    features: ['Все из разового', 'Доп. материалы', 'Родительский контроль', 'Личный куратор'],
    button: 'Выбрать пакет',
    highlight: true,
  },
  {
    name: 'Группа 4 чел.',
    price: '1 200',
    unit: 'занятие',
    features: ['Записи уроков', 'Работа на онлайн-доске', 'Мини-группа до 4 чел.'],
    button: 'Вступить в группу',
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-brand-600 uppercase tracking-widest mb-4">Цены и абонементы</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 leading-tight">
            Прозрачная стоимость <br className="hidden sm:block" /> без скрытых доплат
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-10 rounded-[40px] flex flex-col h-full bg-white transition-all duration-300 border ${
                plan.highlight 
                  ? 'border-brand-500 shadow-2xl shadow-brand-100 scale-105 z-10 relative overflow-hidden' 
                  : 'border-slate-100'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-brand-500 text-white px-6 py-2 rounded-bl-3xl font-bold text-xs uppercase tracking-widest">
                  Самый популярный
                </div>
              )}
              <h4 className="text-xl font-display font-bold text-slate-900 mb-2">{plan.name}</h4>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-display font-black text-slate-900">{plan.price}₽</span>
                <span className="text-slate-500 font-medium">/ {plan.unit}</span>
              </div>
              
              {plan.desc && <p className="text-brand-600 font-bold mb-6 text-sm underline underline-offset-4">{plan.desc}</p>}

              <ul className="space-y-4 mb-10 flex-grow pt-6 border-t border-slate-50">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-slate-600 text-sm">
                    <Check className="text-brand-600 shrink-0" size={18} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-4 rounded-full font-bold text-center transition-all ${
                  plan.highlight
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-200 hover:bg-brand-700'
                    : 'bg-slate-100 text-slate-900 hover:bg-brand-50 hover:text-brand-700'
                }`}
              >
                {plan.button}
              </a>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-12 text-slate-500 text-sm italic">
          * Первое диагностическое занятие проводится бесплатно при покупке пакета.
        </p>
      </div>
    </section>
  );
}
