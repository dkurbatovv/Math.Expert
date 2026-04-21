import React from 'react';
import { Rocket, Instagram, Send, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-brand-600 p-2 rounded-lg text-white">
                <Rocket size={24} />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                MathExpert
              </span>
            </div>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              Профессиональная подготовка к государственным экзаменам по математике. Учим понимать, а не зубрить.
            </p>
            <div className="flex gap-4">
              {[Instagram, Send, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all transform hover:-translate-y-1">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 col-span-2">
            <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-400">Навигация</h5>
            <ul className="space-y-4">
              {['Главная', 'Обо мне', 'Услуги', 'Результаты'].map(item => (
                <li key={item}><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 col-span-2">
            <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-400">Помощь</h5>
            <ul className="space-y-4">
              {['FAQ', 'Стоимость', 'Контакты', 'Договор оферты'].map(item => (
                    <li key={item}><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-400">Подписка на дайджест</h5>
            <p className="text-slate-400 text-sm mb-6">Получайте полезные материалы и разборы задач каждую неделю.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Ваш email"
                className="bg-slate-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 w-full"
              />
              <button className="bg-brand-600 px-6 py-3 rounded-xl font-bold text-sm hover:bg-brand-700 transition-colors">OK</button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2026 MathExpert. Все права защищены.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Cookie policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
