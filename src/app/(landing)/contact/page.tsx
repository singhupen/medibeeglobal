'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { useCaseModal } from '@/context/case-modal-context';

export default function ContactPage() {
  const { openCaseModal } = useCaseModal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-primary-500 text-white pt-24 pb-12 lg:pt-28 lg:pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-accent-400 font-bold text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-3 mb-6 leading-tight">
            We're Here for You & Your Family
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Reach out directly to our Phnom Penh office, message us on Telegram or WhatsApp, or submit your medical records for a confidential consultation.
          </p>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Phnom Penh Office</h2>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Visit us in person or arrange a private consultation with our medical coordinators.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-card space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Head Office</p>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      #111, St. 09B, Thmorda Village,<br />
                      Sangkat Kontouk, Khan Kombol,<br />
                      Phnom Penh, Cambodia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Direct Phone Line</p>
                    <a href="tel:+855010707404" className="text-primary-600 font-semibold text-sm hover:underline mt-1 block">
                      +855-010707404
                    </a>
                    <p className="text-xs text-gray-400 mt-0.5">Khmer, English & Chinese spoken</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Email Inquiry</p>
                    <a href="mailto:care@medibeeglobal.com" className="text-primary-600 font-semibold text-sm hover:underline mt-1 block">
                      care@medibeeglobal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-500">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Operating Hours</p>
                    <p className="text-gray-500 text-sm mt-1">Monday – Saturday: 8:00 AM – 6:00 PM</p>
                    <p className="text-xs text-accent-500 font-semibold mt-0.5">24/7 Emergency Line for Travel Patients</p>
                  </div>
                </div>
              </div>

              {/* Instant Messaging Channels */}
              <div className="bg-primary-950 text-white rounded-3xl p-8 shadow-card">
                <h3 className="font-bold text-lg mb-2">Instant Chat</h3>
                <p className="text-white/70 text-sm mb-6">
                  Chat with a case manager right now for quick answers.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white/10 hover:bg-accent-400 hover:text-primary-950 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm"
                  >
                    <Send className="w-4 h-4" /> Telegram
                  </a>
                  <a
                    href="https://wa.me"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white/10 hover:bg-accent-400 hover:text-primary-950 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm"
                  >
                    <MessageSquare className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Quick Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-card">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Send an Inquiry</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Our coordinators typically reply within 2 to 4 business hours.
                    </p>
                  </div>
                  <button
                    onClick={openCaseModal}
                    className="hidden sm:inline-flex bg-primary-50 text-primary-700 hover:bg-primary-100 font-bold px-4 py-2 rounded-full text-xs transition-colors cursor-pointer"
                  >
                    Open Case Intake Form →
                  </button>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully</h4>
                    <p className="text-gray-500 max-w-md mx-auto mb-6 text-sm">
                      Thank you for contacting Medibeeglobal. A case manager will contact you shortly via phone or email.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-primary-500 text-white font-bold px-6 py-2.5 rounded-full hover:bg-primary-600 transition-colors text-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. Sokha Chan"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number (Telegram) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+855 12 345 678"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="sokha@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Treatment / Specialty Needed
                        </label>
                        <input
                          type="text"
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          placeholder="e.g. Heart Bypass, Knee Surgery, Cancer"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        How Can We Help? *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Please describe your current diagnosis, medical questions, or travel timeline..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                      <p className="text-xs text-gray-400">
                        🔒 All health information is kept strictly confidential under medical privacy standards.
                      </p>
                      <button
                        type="submit"
                        className="w-full sm:w-auto bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 py-3.5 rounded-full shadow-soft hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
                      >
                        Send Inquiry
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
