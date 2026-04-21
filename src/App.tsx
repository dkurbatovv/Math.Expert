/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { Results } from './components/Results';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Results />
        <Process />
        <Pricing />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
