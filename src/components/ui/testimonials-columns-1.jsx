import React from 'react';
import { motion } from 'framer-motion';

export const TestimonialsColumn = ({ className, testimonials, duration = 10 }) => (
  <div className={className} style={{ overflow: 'hidden' }}>
    <motion.div
      animate={{ translateY: '-50%' }}
      transition={{ duration, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
      className="flex flex-col gap-5 pb-5"
    >
      {[...Array(2)].map((_, index) => (
        <React.Fragment key={index}>
          {testimonials.map(({ text, image, name, role }, i) => (
            <div
              key={i}
              className="p-7 max-w-xs w-full"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(201,168,76,0.2)',
                boxShadow: '0 4px 24px rgba(5,13,26,0.06)',
                borderRadius: '2px',
              }}
            >
              <p className="font-inter text-sm leading-relaxed mb-6" style={{ color: '#4A5568' }}>
                "{text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="flex-shrink-0 flex items-center justify-center font-playfair font-bold text-sm"
                  style={{
                    width: '38px',
                    height: '38px',
                    backgroundColor: '#050D1A',
                    color: '#C9A84C',
                    borderRadius: '2px',
                  }}
                >
                  {name.charAt(0)}
                </div>
                <div>
                  <div className="font-inter font-semibold text-sm" style={{ color: '#050D1A' }}>{name}</div>
                  <div className="font-inter text-xs mt-0.5" style={{ color: '#A0AEC0' }}>{role}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);
