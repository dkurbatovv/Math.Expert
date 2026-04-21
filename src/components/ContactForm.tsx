import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Send, Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Минимум 2 символа'),
  phone: z.string().min(10, 'Введите корректный номер'),
  exam: z.enum(['OGE', 'EGE', 'OTHER']),
  grade: z.string().min(1, 'Укажите класс'),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    console.log('Sending data:', data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert('Заявка успешно отправлена! Я свяжусь с вами в ближайшее время.');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-base font-bold text-brand-600 uppercase tracking-widest mb-4">Контакты</h2>
            <h3 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 leading-tight mb-8">
              Давайте обсудим <br /> ваше будущее
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-brand-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Позвонить</p>
                  <a href="tel:+79998887766" className="text-xl font-display font-bold text-slate-900 hover:text-brand-600 transition-colors">+7 (999) 888-77-66</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-brand-100 flex items-center justify-center text-[#229ED9] group-hover:bg-[#229ED9] group-hover:text-white transition-all duration-300 shadow-sm">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Telegram</p>
                  <a href="https://t.me/placeholder" className="text-xl font-display font-bold text-slate-900 hover:text-[#229ED9] transition-colors">@math_expert</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-brand-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:info@math.ru" className="text-xl font-display font-bold text-slate-900 hover:text-brand-600 transition-colors">alex.math@mail.ru</a>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-brand-100 rounded-2xl border border-brand-200">
                <p className="text-brand-800 font-medium">Бесплатный разбор вашей ситуации при записи до конца недели!</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 sm:p-12 rounded-[40px] border border-brand-100 shadow-2xl shadow-brand-100"
          >
            <h4 className="text-2xl font-display font-bold text-slate-900 mb-8">Оставить заявку</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Ваше имя</label>
                  <input
                    {...register('name')}
                    placeholder="Имя"
                    className={`w-full px-5 py-4 bg-slate-50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${errors.name ? 'border-red-300' : 'border-slate-100'}`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500 font-medium">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Телефон</label>
                  <input
                    {...register('phone')}
                    placeholder="+7 (___) ___ __ __"
                    className={`w-full px-5 py-4 bg-slate-50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${errors.phone ? 'border-red-300' : 'border-slate-100'}`}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500 font-medium">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Экзамен</label>
                    <select
                        {...register('exam')}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all appearance-none"
                    >
                        <option value="EGE">ЕГЭ (11 класс)</option>
                        <option value="OGE">ОГЭ (9 класс)</option>
                        <option value="OTHER">Успеваемость</option>
                    </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Класс</label>
                  <input
                    {...register('grade')}
                    placeholder="7-11 класс"
                    className={`w-full px-5 py-4 bg-slate-50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${errors.grade ? 'border-red-300' : 'border-slate-100'}`}
                  />
                  {errors.grade && <p className="mt-1 text-xs text-red-500 font-medium">{errors.grade.message}</p>}
                </div>
              </div>

              <button
                disabled={isSubmitting}
                className="w-full bg-brand-600 text-white font-bold py-5 rounded-2xl hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95 shadow-lg shadow-brand-200 flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Отправка...' : <>Отправить заявку <Send size={20} /></>}
              </button>
              <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                Нажимая на кнопку, вы соглашаетесь с условиями <br /> обработки персональных данных.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
