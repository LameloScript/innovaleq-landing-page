'use client';

import { useState } from 'react';
import { ContactProps } from '../types';

export default function Contact({ minitext, heading, subtitle, contactInfo, form }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Une erreur est survenue');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Erreur de connexion au serveur');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

          <h2 className="text-2xl md:text-5xl lg:text-6xl font-black text-[#f6a42b] mb-6 md:mb-8 leading-tight" style={{fontFamily: 'Bebas Neue, cursive'}}>
            {heading}
          </h2>

          <p className="text-sm md:text-lg leading-relaxed text-white/80 max-w-3xl mx-auto" style={{fontFamily: 'Poppins, sans-serif'}}>
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl md:text-3xl font-bold text-[#f6a42b] mb-6 md:mb-8" style={{fontFamily: 'Bebas Neue, cursive'}}>
              INFORMATIONS DE CONTACT
            </h3>

            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2" style={{fontFamily: 'Bebas Neue, cursive'}}>
                      {info.title}
                    </h4>
                    <p className="text-white/70 text-xs md:text-base" style={{fontFamily: 'Poppins, sans-serif'}}>
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-12">
              <h4 className="text-base md:text-xl font-bold text-white mb-4 md:mb-6" style={{fontFamily: 'Bebas Neue, cursive'}}>
                SUIVEZ-NOUS
              </h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.082.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 23.998 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <h3 className="text-xl md:text-3xl font-bold text-[#f6a42b] mb-6 md:mb-8" style={{fontFamily: 'Bebas Neue, cursive'}}>
              {form.title}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-medium text-white mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm md:text-base placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="Votre nom complet"
                  style={{fontFamily: 'Poppins, sans-serif'}}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-medium text-white mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm md:text-base placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="votre@email.com"
                  style={{fontFamily: 'Poppins, sans-serif'}}
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-white mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm md:text-base focus:outline-none focus:border-white/40 transition-colors"
                  style={{fontFamily: 'Poppins, sans-serif'}}
                  required
                >
                  <option value="">Sélectionner un sujet</option>
                  {form.subjects.map((subject, index) => (
                    <option key={index} value={subject} className="bg-black text-white">
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-white mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm md:text-base placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors resize-none"
                  placeholder="Décrivez votre projet..."
                  style={{fontFamily: 'Poppins, sans-serif'}}
                  required
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm" style={{fontFamily: 'Poppins, sans-serif'}}>
                  Message envoyé avec succès ! Nous vous répondrons bientôt.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm" style={{fontFamily: 'Poppins, sans-serif'}}>
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#f6a42b] text-white px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg font-semibold hover:bg-[#e59422] transition-all duration-300 rounded-lg flex items-center justify-center gap-2 md:gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{fontFamily: 'Poppins, sans-serif'}}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                {!isSubmitting && (
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}