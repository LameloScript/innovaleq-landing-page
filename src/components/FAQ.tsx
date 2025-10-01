'use client';

import { useState } from 'react';
import { FAQProps } from '../types';

export default function FAQ({ minitext, heading, subtitle, questions }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="w-full max-w-[200px] mx-auto py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-4xl shadow-lg shadow-black/10 mb-4">
            <span className="text-white/80 text-xs md:text-sm font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>
              {minitext}
            </span>
          </div>

          <h2 className="text-2xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8 leading-tight" style={{fontFamily: 'Bebas Neue, cursive'}}>
            {heading}
          </h2>

          <p className="text-sm md:text-lg leading-relaxed text-white/80 max-w-3xl mx-auto" style={{fontFamily: 'Poppins, sans-serif'}}>
            {subtitle}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Colonne gauche - 3 premières questions */}
          <div className="space-y-4">
            {questions.slice(0, 3).map((faq, index) => (
              <div key={index} className="border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm overflow-hidden">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-4 md:p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                >
                  <h3 className="text-base md:text-xl font-bold text-white pr-3 md:pr-4" style={{fontFamily: 'Bebas Neue, cursive'}}>
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 md:w-6 md:h-6 text-white/80 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className="text-white/70 leading-relaxed text-xs md:text-base" style={{fontFamily: 'Poppins, sans-serif'}}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Colonne droite - 3 questions suivantes */}
          <div className="space-y-4">
            {questions.slice(3, 6).map((faq, index) => (
              <div key={index + 3} className="border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm overflow-hidden">
                <button
                  onClick={() => toggleQuestion(index + 3)}
                  className="w-full p-4 md:p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                >
                  <h3 className="text-base md:text-xl font-bold text-white pr-3 md:pr-4" style={{fontFamily: 'Bebas Neue, cursive'}}>
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 md:w-6 md:h-6 text-white/80 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index + 3 ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`transition-all duration-300 ${openIndex === index + 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className="text-white/70 leading-relaxed text-xs md:text-base" style={{fontFamily: 'Poppins, sans-serif'}}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}