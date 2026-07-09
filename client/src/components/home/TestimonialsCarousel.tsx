import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    service: 'Teeth Whitening',
    rating: 5,
    quote: 'The teeth whitening treatment exceeded my expectations! Dr. Rosen and the team made me feel so comfortable throughout the entire process.',
    avatar: '👩',
  },
  {
    id: 2,
    name: 'James Rodriguez',
    service: 'Dental Implants',
    rating: 5,
    quote: 'After years of being self-conscious about my smile, I finally got dental implants here. The results are life-changing!',
    avatar: '👨',
  },
  {
    id: 3,
    name: 'Emily Thompson',
    service: 'General Checkup',
    rating: 5,
    quote: 'The most gentle and thorough dental cleaning I have ever had. The hygienist was patient with my dental anxiety.',
    avatar: '👩‍🦰',
  },
  {
    id: 4,
    name: 'Michael Chen',
    service: 'Invisalign®',
    rating: 5,
    quote: 'The Invisalign treatment here has completely transformed my smile. The team provided clear guidance every step of the way.',
    avatar: '👨‍💼',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    service: 'Porcelain Veneers',
    rating: 5,
    quote: 'My new veneers look absolutely natural! The attention to detail and craftsmanship is outstanding. Highly recommend!',
    avatar: '👩',
  },
  {
    id: 6,
    name: 'David Park',
    service: 'Emergency Care',
    rating: 5,
    quote: 'They saw me same-day for a dental emergency. Professional, caring, and pain-free treatment. Thank you for the excellent care!',
    avatar: '👨',
  },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[380px] h-[300px] bg-white border border-accent/10 p-8 flex flex-col justify-between hover:shadow-soft hover:border-accent/30 transition-all duration-300 rounded-none">
      <div>
        {/* Star Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-accent"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <p className="text-sm text-neutral-mid leading-relaxed italic mb-6">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Patient info */}
      <div className="flex items-center gap-3 pt-4 border-t border-accent/5">
        <div className="w-10 h-10 bg-cream border border-accent/15 flex items-center justify-center text-lg rounded-full">
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="font-heading font-semibold text-primary text-sm">{testimonial.name}</h4>
          <span className="text-[10px] uppercase tracking-wider text-accent font-semibold">{testimonial.service}</span>
        </div>
      </div>
    </div>
  );
}

function TestimonialsCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const cardWidth = 380 + 24; // card width + gap
  const totalWidth = testimonials.length * cardWidth;

  return (
    <section className="py-14 border-t border-accent/10 overflow-hidden relative" style={{ backgroundColor: '#D9C9B0' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase block mb-3">
            Patient Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
            What Our Patients Say
          </h2>
          <p className="text-neutral-mid leading-relaxed">
            Discover why hundreds of families in Torrance trust The Dental Lounge for their smile transformations.
          </p>
        </div>
      </div>

      {/* Marquee Carousel */}
      {prefersReducedMotion ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      ) : (
        <div
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <motion.div
              animate={isPaused ? {} : { x: [-totalWidth, 0] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-6"
              style={{ width: 'fit-content' }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </motion.div>
          </div>

          {/* Vignette Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-cream to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cream to-transparent pointer-events-none" />
        </div>
      )}
    </section>
  );
}

export default TestimonialsCarousel;
