import React from 'react';
import { TestimonialsColumn } from '../ui/testimonials-columns-1';

const testimonials = [
  {
    text: "Marty Singer is a case study in exceptional customer service with his uncanny ability to diffuse difficult situations with a combination of humor and competence. Sales and service professionals can learn new ways to serve their customers by adopting Marty's core values of preparedness and integrity in action.",
    name: 'Dominic Rapini',
    role: 'Apple, Inc.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face&q=80',
  },
  {
    text: "I have known Marty Singer for about twenty years. I respected his knowledge, his patience with me as a customer, and his accommodating style. My relationship with Marty began as a customer. Now, I'm pleased to call him my friend.",
    name: 'Marvin Scott',
    role: 'Author / Senior Correspondent, PIX11 News',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&q=80',
  },
  {
    text: "Since meeting Marty in 2002, he has been nothing but a joy to work with. Available no matter the time of day, Marty is extremely helpful and willing to accommodate me and my entire family. He provides unparalleled attention unlike any I have had the pleasure of receiving.",
    name: 'Julie Banderas',
    role: 'Host, FOX News Channel',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&q=80',
  },
  {
    text: "Marty is always pleasant to work with. His easy going demeanor and customer service qualities are something I admire and respect. We've had a long standing relationship and I can always count on him to give me the right answers.",
    name: 'Craig Kallman',
    role: 'Chairman, Atlantic Records',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&q=80',
  },
  {
    text: "I have worked with Marty Singer for 15 years. Unlike many, Marty is always available with a friendly tip or quick advice. He understands that successful public relations involves building and nurturing long-term relationships. I almost never write recommendations for PR folks, but it is a pleasure to do one, unsolicited, for Marty.",
    name: 'Sree Sreenivasan',
    role: 'Former NYC Chief Digital Officer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face&q=80',
  },
  {
    text: "I have worked with Marty for many years as Vice President of JVC East Coast Sales. His dedication, knowledge, integrity and professionalism are among his many attributes.",
    name: 'Bob Nizza',
    role: 'Regional Manager, Audio Technica',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&h=80&fit=crop&crop=face&q=80',
  },
  {
    text: "Marty is a very Special person. He cares about his customers. He was always responsive to my questions and concerns and personally got involved with any issues I encountered. Marty's business sense and knowledge of what the client requires is exceptional.",
    name: 'Cousin Brucie',
    role: 'Radio Legend',
    image: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=80&h=80&fit=crop&crop=face&q=80',
  },
  {
    text: "Knowing Marty from the days when we did business with J&R Music World, he was always someone I highly respected and enjoyed meeting with. He was always extremely knowledgeable and helpful.",
    name: 'Craig Smalley',
    role: 'Client',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&h=80&fit=crop&crop=face&q=80',
  },
];

const col1 = testimonials.slice(0, 3);
const col2 = testimonials.slice(3, 6);
const col3 = testimonials.slice(6, 8);

const Testimonials = () => (
  <section
    id="testimonials"
    className="relative overflow-hidden"
    style={{ backgroundColor: '#F7F9FC' }}
  >
    <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)' }} />

    <div className="max-w-7xl mx-auto px-8 md:px-16 pt-20 pb-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#C9A84C' }} />
            <span className="text-xs font-inter font-semibold tracking-widest uppercase" style={{ color: '#C9A84C' }}>
              Happy Clients
            </span>
          </div>
          <h2
            className="font-playfair font-bold leading-none"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#050D1A', letterSpacing: '-0.03em' }}
          >
            What they say.
          </h2>
        </div>
        <p className="font-inter text-sm max-w-xs md:text-right" style={{ color: '#A0AEC0' }}>
          Real words from real people who've experienced the Marty Singer difference.
        </p>
      </div>
    </div>

    {/* Scrolling columns with fade mask */}
    <div
      className="flex justify-center gap-5 px-8 md:px-16 mt-10 pb-0"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        maxHeight: '720px',
        overflow: 'hidden',
      }}
    >
      <TestimonialsColumn testimonials={col1} duration={22} />
      <TestimonialsColumn testimonials={col2} duration={28} className="hidden md:block" />
      <TestimonialsColumn testimonials={col3} duration={18} className="hidden lg:block" />
    </div>
  </section>
);

export default Testimonials;
