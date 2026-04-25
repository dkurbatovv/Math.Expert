import './index.css';
import { createIcons, icons } from 'lucide';

document.addEventListener("DOMContentLoaded", () => {
  // Initialize icons
  createIcons({
    icons
  });

  // Navbar Scroll
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('bg-white/80', 'backdrop-blur-md', 'py-3', 'shadow-sm', 'border-b', 'border-brand-100');
      nav.classList.remove('bg-transparent', 'py-5');
    } else {
      nav.classList.remove('bg-white/80', 'backdrop-blur-md', 'py-3', 'shadow-sm', 'border-b', 'border-brand-100');
      nav.classList.add('bg-transparent', 'py-5');
    }
  });

  // Mobile Menu
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  let isMenuOpen = false;

  mobileMenuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      mobileMenu.classList.remove('hidden');
      menuIcon.setAttribute('data-lucide', 'x');
    } else {
      mobileMenu.classList.add('hidden');
      menuIcon.setAttribute('data-lucide', 'menu');
    }
    createIcons({ icons });
  });

  document.querySelectorAll('#mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
          isMenuOpen = false;
          mobileMenu.classList.add('hidden');
          menuIcon.setAttribute('data-lucide', 'menu');
          createIcons({ icons });
      });
  });

  // FAQ Accordion
  window.toggleFaq = function(button) {
    const content = button.nextElementSibling;
    const iconContainer = button.querySelector('.faq-icon-container');
    const icon = button.querySelector('.faq-icon');
    
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.setAttribute('data-lucide', 'plus');
      iconContainer.classList.remove('bg-brand-600', 'text-white', 'rotate-180');
      iconContainer.classList.add('bg-slate-200', 'text-slate-500');
      button.parentElement.classList.remove('bg-white');
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.setAttribute('data-lucide', 'minus');
      iconContainer.classList.add('bg-brand-600', 'text-white', 'rotate-180');
      iconContainer.classList.remove('bg-slate-200', 'text-slate-500');
      button.parentElement.classList.add('bg-white');
    }
    createIcons({ icons });
  };

  // Scroll Animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-scroll').forEach(el => observer.observe(el));
});
