import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import NYCSkyline from '../components/ui/NYCSkyline';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus('sending');
    // Simulate form submission (replace with real endpoint)
    await new Promise((r) => setTimeout(r, 1400));
    setStatus('success');
  };

  const inputClass = (field) =>
    `w-full px-4 py-3.5 font-inter text-sm rounded-sm border transition-colors duration-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-0 ${
      errors[field]
        ? 'border-red-400 bg-red-50/30'
        : 'border-gray-200 focus:border-primary-600'
    }`;

  const labelClass = 'block font-inter text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5';

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFFFF' }}>
      <Header />

      <main role="main" className="flex-1">

        {/* Hero header */}
        <div className="relative overflow-hidden pt-24 pb-0" style={{ backgroundColor: '#050D1A' }}>
          {/* Grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
          {/* Center glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 100%, rgba(16,85,204,0.15) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 max-w-5xl mx-auto px-6 pt-8 pb-14 text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs font-inter text-white/30 mb-8">
              <Link to="/" className="hover:text-gold-400 transition-colors duration-200">Home</Link>
              <span>·</span>
              <span style={{ color: '#C9A84C' }}>Contact</span>
            </div>

            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
              <span className="text-gold-500 text-xs font-inter font-semibold tracking-widest uppercase">
                Get In Touch
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
            </div>

            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Let's Open<br />
              <span style={{ color: '#C9A84C' }}>New Doors</span>
            </h1>
            <p className="font-inter text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
              Whether you're a business looking to grow or an executive seeking the right connection — one conversation with Marty can change everything.
            </p>
          </div>

          {/* Skyline at bottom of hero header */}
          <div className="relative z-10">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
            <NYCSkyline className="w-full block" opacity={0.5} />
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

            {/* Form — 3/5 width */}
            <div className="lg:col-span-3">
              {status === 'success' ? (
                <div
                  className="text-center py-16 px-8 rounded-sm border"
                  style={{ backgroundColor: '#F7F9FC', borderColor: '#E2E8F0' }}
                >
                  <div
                    className="w-16 h-16 rounded-sm flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: '#C9A84C', color: '#050D1A' }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-playfair font-bold text-3xl mb-3" style={{ color: '#050D1A' }}>
                    Message Received!
                  </h2>
                  <p className="font-inter text-gray-500 mb-6 leading-relaxed">
                    Thank you for reaching out. Marty will personally respond within 24 hours.
                  </p>
                  <div className="flex items-center justify-center gap-3 text-sm font-inter text-gray-400 mb-8">
                    <span>In the meantime, feel free to call:</span>
                    <a href="tel:917-309-9905" className="font-semibold hover:text-gold-500 transition-colors" style={{ color: '#050D1A' }}>
                      917-309-9905
                    </a>
                  </div>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 font-inter font-semibold text-sm rounded-sm transition-colors duration-200"
                    style={{ backgroundColor: '#050D1A', color: '#C9A84C' }}
                  >
                    ← Back to Home
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                  <h2 className="font-playfair font-bold text-2xl md:text-3xl mb-2" style={{ color: '#050D1A' }}>
                    Send Marty a Message
                  </h2>
                  <p className="font-inter text-sm text-gray-500 mb-8">
                    Fill out the form below and Marty will be in touch within 24 hours.
                  </p>

                  {/* Name + Company row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass('name')}
                        placeholder="Your full name"
                        autoComplete="name"
                        aria-required="true"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        style={{ color: '#050D1A' }}
                      />
                      {errors.name && (
                        <p id="name-error" role="alert" className="mt-1.5 text-xs font-inter text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClass}>Company / Organization</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        className={inputClass('company')}
                        placeholder="Your company (optional)"
                        autoComplete="organization"
                        style={{ color: '#050D1A' }}
                      />
                    </div>
                  </div>

                  {/* Email + Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass('email')}
                        placeholder="you@example.com"
                        autoComplete="email"
                        aria-required="true"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        style={{ color: '#050D1A' }}
                      />
                      {errors.email && (
                        <p id="email-error" role="alert" className="mt-1.5 text-xs font-inter text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass('phone')}
                        placeholder="+1 (555) 000-0000"
                        autoComplete="tel"
                        style={{ color: '#050D1A' }}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-4">
                    <label htmlFor="subject" className={labelClass}>How Can Marty Help?</label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={`${inputClass('subject')} appearance-none cursor-pointer`}
                      style={{ color: form.subject ? '#050D1A' : '#9CA3AF' }}
                    >
                      <option value="" disabled>Select a topic...</option>
                      <option value="retail">Retail Connections</option>
                      <option value="reputation">Online Reputation Management</option>
                      <option value="executive">Executive Customer Affairs</option>
                      <option value="fortune500">Fortune 500 Introduction</option>
                      <option value="partnership">Strategic Partnership</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label htmlFor="message" className={labelClass}>
                      Your Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className={`${inputClass('message')} resize-none`}
                      placeholder="Tell Marty about your situation, what doors you're trying to open, and what you're hoping to achieve..."
                      aria-required="true"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      style={{ color: '#050D1A' }}
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="mt-1.5 text-xs font-inter text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 font-inter font-semibold text-base rounded-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#C9A84C', color: '#050D1A' }}
                    onMouseEnter={(e) => { if (status !== 'sending') e.currentTarget.style.backgroundColor = '#D4B96B'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#C9A84C'; }}
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  <p className="mt-4 font-inter text-xs text-gray-400 text-center">
                    Your information is kept strictly confidential and never shared.
                  </p>
                </form>
              )}
            </div>

            {/* Info sidebar — 2/5 width */}
            <div className="lg:col-span-2 space-y-6">

              {/* Contact info card */}
              <div
                className="p-7 rounded-sm border"
                style={{ backgroundColor: '#050D1A', borderColor: 'rgba(201,168,76,0.2)' }}
              >
                <h3 className="font-playfair font-bold text-xl text-white mb-6">
                  Direct Contact
                </h3>

                <div className="space-y-5">
                  {[
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ),
                      label: 'Phone',
                      value: '917-309-9905',
                      href: 'tel:917-309-9905',
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                      label: 'Email',
                      value: 'marty@martybsolutions.com',
                      href: 'mailto:marty@martybsolutions.com',
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                      label: 'Location',
                      value: 'New York City, NY',
                      href: null,
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: 'rgba(201,168,76,0.12)', color: '#C9A84C' }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-inter text-xs font-semibold uppercase tracking-wider text-white/30 mb-0.5">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-inter text-sm text-white/80 hover:text-gold-400 transition-colors duration-200 break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="font-inter text-sm text-white/80">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Availability note */}
                <div
                  className="mt-6 pt-6 border-t flex items-center gap-3"
                  style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <span className="font-inter text-xs text-white/40">
                    Available 7 days a week · Responds within 24 hours
                  </span>
                </div>
              </div>

              {/* Social links card */}
              <div
                className="p-7 rounded-sm border"
                style={{ backgroundColor: '#F7F9FC', borderColor: '#E2E8F0' }}
              >
                <h3 className="font-inter font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: '#050D1A' }}>
                  Connect Online
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'LinkedIn', url: 'https://linkedin.com/in/martysingernyc', desc: 'Professional profile' },
                    { name: 'Facebook', url: 'https://www.facebook.com/martybsolutions/', desc: 'Marty B Solutions' },
                    { name: 'Instagram', url: 'https://www.instagram.com/martybsolutions/', desc: '@martybsolutions' },
                  ].map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2.5 px-3 rounded-sm border transition-all duration-200 group"
                      style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0'; }}
                    >
                      <div>
                        <div className="font-inter font-semibold text-sm" style={{ color: '#050D1A' }}>{s.name}</div>
                        <div className="font-inter text-xs text-gray-400">{s.desc}</div>
                      </div>
                      <svg className="w-4 h-4 text-gray-300 group-hover:text-gold-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quote card */}
              <div
                className="p-7 rounded-sm border relative overflow-hidden"
                style={{ backgroundColor: '#0A1628', borderColor: 'rgba(201,168,76,0.15)' }}
              >
                <div
                  className="absolute top-4 left-5 font-playfair text-6xl leading-none"
                  style={{ color: 'rgba(201,168,76,0.15)' }}
                  aria-hidden="true"
                >
                  "
                </div>
                <p className="font-playfair italic text-white/70 text-base leading-relaxed relative z-10 mt-4">
                  Your next big opportunity is already in my network. Let's talk.
                </p>
                <div className="mt-4 font-inter text-xs font-semibold uppercase tracking-wider" style={{ color: '#C9A84C' }}>
                  — Marty Singer
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
