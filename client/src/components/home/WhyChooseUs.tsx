import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: '🏆',
    title: 'Award-Winning Care',
    description: 'Dr. Karen Rosen (DDS) brings over 15 years of clinical excellence and patient-first dedication.',
  },
  {
    icon: '🔬',
    title: 'Advanced Diagnostics',
    description: 'Intraoral scanners, digital X-rays, and 3D imaging for precise and gentle treatments.',
  },
  {
    icon: '😌',
    title: 'Anxiety-Free Comforts',
    description: 'TVs on the ceilings, noise-canceling headphones, and weighted blankets to help you relax.',
  },
  {
    icon: '💰',
    title: 'Direct Cost Breakdown',
    description: 'No hidden fees. We provide clear, itemized quotes before starting any dental procedure.',
  },
  {
    icon: '🛡️',
    title: 'Insurance Friendly',
    description: 'We maximize your PPO insurance benefits and offer flexible financing (like Cherry).',
  },
  {
    icon: '🕒',
    title: 'Flexible Bookings',
    description: 'Same-day emergency support and easy online booking available 24/7.',
  },
];

const col1Features: FeatureItem[] = [
  {
    icon: '🏆',
    title: 'Award-Winning Care',
    description: 'Dr. Karen Rosen (DDS) brings over 15 years of clinical excellence and patient-first dedication.',
  },
  {
    icon: '🔬',
    title: 'Advanced Diagnostics',
    description: 'Intraoral scanners, digital X-rays, and 3D imaging for precise and gentle treatments.',
  },
  {
    icon: '😌',
    title: 'Anxiety-Free Comforts',
    description: 'TVs on the ceilings, noise-canceling headphones, and weighted blankets to help you relax.',
  },
  {
    icon: '🏆',
    title: 'Award-Winning Care',
    description: 'Dr. Karen Rosen (DDS) brings over 15 years of clinical excellence and patient-first dedication.',
  },
  {
    icon: '🔬',
    title: 'Advanced Diagnostics',
    description: 'Intraoral scanners, digital X-rays, and 3D imaging for precise and gentle treatments.',
  },
  {
    icon: '😌',
    title: 'Anxiety-Free Comforts',
    description: 'TVs on the ceilings, noise-canceling headphones, and weighted blankets to help you relax.',
  },
];

const col2Features: FeatureItem[] = [
  {
    icon: '💰',
    title: 'Direct Cost Breakdown',
    description: 'No hidden fees. We provide clear, itemized quotes before starting any dental procedure.',
  },
  {
    icon: '🛡️',
    title: 'Insurance Friendly',
    description: 'We maximize your PPO insurance benefits and offer flexible financing (like Cherry).',
  },
  {
    icon: '🕒',
    title: 'Flexible Bookings',
    description: 'Same-day emergency support and easy online booking available 24/7.',
  },
  {
    icon: '💰',
    title: 'Direct Cost Breakdown',
    description: 'No hidden fees. We provide clear, itemized quotes before starting any dental procedure.',
  },
  {
    icon: '🛡️',
    title: 'Insurance Friendly',
    description: 'We maximize your PPO insurance benefits and offer flexible financing (like Cherry).',
  },
  {
    icon: '🕒',
    title: 'Flexible Bookings',
    description: 'Same-day emergency support and easy online booking available 24/7.',
  },
];

const col3Features: FeatureItem[] = [
  {
    icon: '🕒',
    title: 'Flexible Bookings',
    description: 'Same-day emergency support and easy online booking available 24/7.',
  },
  {
    icon: '🏆',
    title: 'Award-Winning Care',
    description: 'Dr. Karen Rosen (DDS) brings over 15 years of clinical excellence and patient-first dedication.',
  },
  {
    icon: '🔬',
    title: 'Advanced Diagnostics',
    description: 'Intraoral scanners, digital X-rays, and 3D imaging for precise and gentle treatments.',
  },
  {
    icon: '🕒',
    title: 'Flexible Bookings',
    description: 'Same-day emergency support and easy online booking available 24/7.',
  },
  {
    icon: '🏆',
    title: 'Award-Winning Care',
    description: 'Dr. Karen Rosen (DDS) brings over 15 years of clinical excellence and patient-first dedication.',
  },
  {
    icon: '🔬',
    title: 'Advanced Diagnostics',
    description: 'Intraoral scanners, digital X-rays, and 3D imaging for precise and gentle treatments.',
  },
];

function WhyChooseUs() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <section className="py-16 bg-white border-t border-accent/10 relative overflow-hidden">
      {/* Inject pure CSS animations for bulletproof performance and reliability */}
      <style>{`
        @keyframes marqueeScrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marqueeScrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-marquee-up {
          animation: marqueeScrollUp 25s linear infinite;
        }
        .animate-marquee-down {
          animation: marqueeScrollDown 25s linear infinite;
        }
      `}</style>

      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #C19852 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase block mb-3">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
            A Patient-First Dental Experience
          </h2>
          <p className="text-neutral-mid leading-relaxed text-base md:text-lg">
            We balance clinical precision with premium patient comforts. Experience dental visits designed to keep you relaxed, informed, and completely at ease.
          </p>
        </div>

        {/* Responsive Layout */}
        
        {/* Mobile Layout (Static grid list + Video card) */}
        <div className="md:hidden space-y-6">
          <div className="relative w-full aspect-[4/3] bg-white border border-accent/20 p-3 shadow-soft">
            <div className="w-full h-full overflow-hidden border border-accent/15 relative bg-cream">
              <video
                src="/videos/why-choose-us.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-accent" />
            <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-accent" />
            <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-accent" />
            <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-accent" />
          </div>

          <div className="grid grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-cream border border-accent/25 p-7 hover:border-accent hover:shadow-md hover:bg-white transition-all duration-300 group">
                <div className="w-12 h-12 bg-white border border-accent/30 flex items-center justify-center text-xl mb-5 group-hover:border-accent group-hover:shadow-sm transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-base font-heading font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-mid leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout (Dynamic Vertical Marquee Bento Grid with Enlarged Center column) */}
        <div className="hidden md:grid grid-cols-12 gap-8 h-[600px] overflow-hidden relative">
          
          {/* Top and Bottom Fade Gradient Masks */}
          <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

          {/* Left Column: Moving UP (col-span-3) */}
          <div className="col-span-3 overflow-hidden h-full">
            <div className="flex flex-col gap-6 animate-marquee-up">
              {col1Features.map((feature, i) => (
                <div key={i} className="bg-cream border border-accent/25 p-7 shadow-sm hover:border-accent hover:shadow-lg hover:bg-white hover:border-l-4 hover:-translate-y-1 transition-all duration-300 group cursor-default">
                  <div className="w-12 h-12 bg-white border border-accent/30 flex items-center justify-center text-xl mb-5 group-hover:border-accent group-hover:shadow-sm transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-heading font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral-mid leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column: Moving DOWN with Center Static Video Overlay (col-span-6 - twice as wide!) */}
          <div className="col-span-6 overflow-hidden h-full relative px-2">
            {/* Background Moving DOWN Container */}
            <div className="flex flex-col gap-6 animate-marquee-down opacity-30">
              {col2Features.map((feature, i) => (
                <div key={i} className="bg-cream border border-accent/25 p-7 shadow-sm">
                  <div className="w-12 h-12 bg-white border border-accent/30 flex items-center justify-center text-xl mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-heading font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral-mid leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Static Video Overlay: Centered over the column (Enlarged) */}
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-20 bg-white border border-accent/20 p-4 shadow-xl">
              <div className="w-full aspect-[4/3] overflow-hidden border border-accent/15 relative bg-cream">
                <video
                  ref={videoRef}
                  src="/videos/why-choose-us.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
              </div>
              <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-accent" />
              <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-accent" />
              <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-accent" />
              <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-accent" />
            </div>
          </div>

          {/* Right Column: Moving UP (col-span-3) */}
          <div className="col-span-3 overflow-hidden h-full">
            <div className="flex flex-col gap-6 animate-marquee-up">
              {col3Features.map((feature, i) => (
                <div key={i} className="bg-cream border border-accent/25 p-7 shadow-sm hover:border-accent hover:shadow-lg hover:bg-white hover:border-l-4 hover:-translate-y-1 transition-all duration-300 group cursor-default">
                  <div className="w-12 h-12 bg-white border border-accent/30 flex items-center justify-center text-xl mb-5 group-hover:border-accent group-hover:shadow-sm transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-heading font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral-mid leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="text-center mt-20">
          <Link
            to="/about"
            className="inline-flex items-center gap-3 border-2 border-accent bg-transparent hover:bg-accent hover:text-white text-accent px-8 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
          >
            Meet Our Doctor
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
