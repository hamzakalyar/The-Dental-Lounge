import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServicesPreview from '@/components/home/ServicesPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import CTASection from '@/components/home/CTASection';

function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  const marqueePhrases = [
    'A Serene Sanctuary for Dental Wellness',
    'Veneers, Implants, & Clear Aligners',
    'Advanced Digital Scanning & 3D Imaging',
    'Creating Radiant, Healthy Smiles',
    'Emergency Care When You Need It',
    'Modern Aesthetics, Gentle Care',
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] pt-32 pb-20 md:pb-32 flex items-center bg-cream overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
          {/* Overlay to ensure premium cream theme and text readability */}
          <div className="absolute inset-0 bg-cream/10" />
        </div>

        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 opacity-[0.02] z-10 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C19852 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />




        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading and Text */}
            <div className="lg:col-span-7 -mt-6 md:-mt-12 lg:-mt-16 -ml-2 md:-ml-6 lg:-ml-12 z-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl text-left"
              >
                {/* Intro Tag: Accessible Charcoal text with gold left-border line */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-4 bg-accent" />
                  <span className="text-[11px] font-medium tracking-[0.25em] text-primary/70 uppercase block">
                    Welcome to The Dental Lounge
                  </span>
                </div>

                {/* Main Heading: Bold and dark with soft white text drop-shadow to pop from video */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-primary mb-6 leading-[1.15] tracking-[-0.01em] drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                  Comfortable, High-Tech Dental Care for All Ages
                </h1>

                {/* Subtitle */}
                <p className="text-primary/60 text-base md:text-lg mb-10 leading-relaxed font-light tracking-wide">
                  Experience a warm, patient-first approach to general and cosmetic dentistry. In our clinic, your comfort is just as important as your oral health. Enjoy calming amenities while we design your healthy, radiant smile.
                </p>

                {/* Call-to-Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/booking"
                    className="bg-accent hover:bg-accent-600 text-white px-8 py-4 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-none shadow-md text-center"
                  >
                    Book Online
                  </Link>

                  <a
                    href="tel:03020000973"
                    className="border border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-none text-center"
                  >
                    Call 0302-0000973
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Split Image Bento */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="relative w-full max-w-sm"
              >
                {/* Main bento card container */}
                <div className="relative bg-white border border-accent/20 p-3 shadow-2xl">
                  {/* Gold accent corners */}
                  <div className="absolute top-1 left-1 w-5 h-5 border-t-2 border-l-2 border-accent z-10" />
                  <div className="absolute top-1 right-1 w-5 h-5 border-t-2 border-r-2 border-accent z-10" />
                  <div className="absolute bottom-1 left-1 w-5 h-5 border-b-2 border-l-2 border-accent z-10" />
                  <div className="absolute bottom-1 right-1 w-5 h-5 border-b-2 border-r-2 border-accent z-10" />

                  {/* Top image: Clinic Exterior — taller */}
                  <div className="relative overflow-hidden mb-2 aspect-[16/10] border border-accent/10">
                    <img
                      src="/images/clinic_exterior.png"
                      alt="The Dental Lounge Exterior"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
                    {/* Open Now pill */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-green-200 px-3 py-1 rounded-full shadow-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-[10px] font-semibold text-green-700 uppercase tracking-wide">Open Now</span>
                    </div>
                  </div>

                  {/* Bottom image: Treatment Room */}
                  <div className="relative overflow-hidden aspect-[16/9] border border-accent/10">
                    <img
                      src="/images/clinic_treatment_room.png"
                      alt="The Dental Lounge Treatment Room"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent pointer-events-none" />
                    {/* Caption tag */}
                    <div className="absolute bottom-3 left-3 bg-primary/80 backdrop-blur-sm px-3 py-1.5">
                      <p className="text-[10px] font-semibold text-accent uppercase tracking-widest">State-of-the-Art Clinic</p>
                    </div>
                  </div>
                </div>

                {/* Floating Review Badge — bottom right of bento */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="absolute -bottom-5 -right-5 bg-white border border-accent/25 shadow-xl px-4 py-3 flex items-center gap-3 z-20"
                >
                  <div className="text-center">
                    <div className="text-accent text-sm tracking-tight">★★★★★</div>
                    <div className="text-[10px] font-semibold text-primary mt-0.5">500+ Reviews</div>
                    <div className="text-[9px] text-neutral-mid">Google & Yelp</div>
                  </div>
                  <div className="w-px h-10 bg-accent/20" />
                  <div className="text-center">
                    <div className="text-2xl font-heading font-bold text-primary">4.9</div>
                    <div className="text-[9px] text-neutral-mid uppercase tracking-widest">Rating</div>
                  </div>
                </motion.div>

                {/* Floating years badge — top left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="absolute -top-4 -left-4 bg-accent text-white px-3 py-2 shadow-lg z-20 text-center"
                >
                  <div className="text-xl font-heading font-bold leading-none">15+</div>
                  <div className="text-[9px] uppercase tracking-widest leading-tight mt-0.5">Years<br/>Experience</div>
                </motion.div>

              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Line Marquee Ticker */}
      <div className="bg-white py-6 my-10 border-y border-accent/15 overflow-hidden relative select-none">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 35,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-16 text-lg md:text-xl font-heading text-primary"
          style={{ width: 'fit-content' }}
        >
          {/* Duplicate the array to create a seamless loop */}
          {[...marqueePhrases, ...marqueePhrases].map((phrase, i) => (
            <div key={i} className="flex items-center gap-16">
              <span>{phrase}</span>
              <span className="text-accent font-light">/</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Intro Welcome Block */}
      <section className="py-24 border-t border-accent/10" style={{ backgroundColor: '#D9C9B0' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/3] border border-accent/20 p-3 bg-white">
                <div className="w-full h-full overflow-hidden border border-accent/15">
                  <img
                    src="/images/clinic_lobby.png"
                    alt="The Dental Lounge Lobby"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase block mb-3">
                A Modern Dental Practice
              </span>
              <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6 leading-tight">
                A Different Kind of Dental Experience
              </h2>
              <div className="space-y-4 text-neutral-mid leading-relaxed text-sm md:text-base">
                <p>
                  At The Dental Lounge, we believe in patient-centric clinical excellence. Led by Dr. Karen Rosen, our state-of-the-art office combines advanced diagnosis equipment with relaxing touches to redefine what it means to visit the dentist.
                </p>
                <p>
                  We realize that many patients feel anxious about dental procedures. That is why we designed our clinic around comforts. From warm scented towels and ceiling-mounted televisions to weighted blankets and noise-canceling headphones, we make sure you feel pampered and completely at ease.
                </p>
                <p className="font-semibold text-primary">
                  We look forward to welcoming you and your family to our clinic!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <ServicesPreview />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

export default Home;
