import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const allServices = [
  {
    id: 1,
    icon: '🦷',
    title: 'General checkup & cleaning',
    slug: 'preventive-checkup',
    category: 'Preventive',
    image: '/images/services/checkup.png',
    description:
      'Comprehensive dental examination with gentle professional cleaning and polishing. Includes digital X-rays and full health screening.',
    duration: 60,
    price: 150,
    features: [
      'Complete oral examination',
      'Gentle professional scaling',
      'Ultra-low dose digital X-rays',
      'Oral cancer checkup',
      'Personalized hygiene plan',
    ],
  },
  {
    id: 2,
    icon: '✨',
    title: 'Teeth whitening',
    slug: 'cosmetic-whitening',
    category: 'Cosmetic',
    image: '/images/services/whitening.png',
    description:
      'Professional in-office whitening treatments to safely lift deep stains and brighten enamel. Results visible in just one session.',
    duration: 90,
    price: 450,
    features: [
      'Enamel-safe whitening gels',
      'Accelerated LED activation',
      'Up to 8 shades lighter',
      'Minimal post-op sensitivity',
      'Take-home touch-up kit',
    ],
  },
  {
    id: 3,
    icon: '💎',
    title: 'Dental implants',
    slug: 'restorative-implants',
    category: 'Restorative',
    image: '/images/services/implants.png',
    description:
      'Premium permanent tooth replacement using biocompatible titanium implant posts topped with custom porcelain crowns.',
    duration: 120,
    price: null,
    features: [
      'Biocompatible titanium posts',
      'Custom ceramic dental crowns',
      'Advanced 3D guided placement',
      'Bridges and dentures support',
      'Restores full chewing power',
    ],
  },
  {
    id: 4,
    icon: '😊',
    title: 'Invisalign® Clear Aligners',
    slug: 'orthodontics-invisalign',
    category: 'Orthodontics',
    image: '/images/services/invisalign.png',
    description:
      'Clear, removable aligners designed to straighten teeth discreetly. Virtual custom treatment plans with 3D digital impressions.',
    duration: 45,
    price: null,
    features: [
      'Virtually invisible aligners',
      'Removable for easy cleaning',
      'Custom digital mapping',
      'Fewer office check-ins needed',
      'Comfortable plastic materials',
    ],
  },
  {
    id: 5,
    icon: '🔧',
    title: 'Root canal therapy',
    slug: 'restorative-root-canal',
    category: 'Restorative',
    image: '/images/services/root-canal.png',
    description:
      'Gentle endodontic treatment to clean infected roots and save damaged teeth. Performed with high-precision rotary instruments.',
    duration: 90,
    price: 800,
    features: [
      'Fully anesthetized comfort',
      'High-precision rotary tools',
      'Digital infection mapping',
      'Sealed root filling protection',
      'Same-day core restorations',
    ],
  },
  {
    id: 6,
    icon: '🌟',
    title: 'Porcelain veneers',
    slug: 'cosmetic-veneers',
    category: 'Cosmetic',
    image: '/images/services/veneers.png',
    description:
      'Individually custom-crafted porcelain shells bonded to the front of teeth. Instantly covers chips, gaps, and severe stains.',
    duration: 120,
    price: null,
    features: [
      'Vibrant, natural enamel match',
      'Stain-resistant porcelain',
      'Minimally invasive preparation',
      'Transforms shape and color',
      'Long-lasting durability',
    ],
  },
  {
    id: 7,
    icon: '🚨',
    title: 'Emergency dentistry',
    slug: 'general-emergency',
    category: 'Emergency',
    image: '/images/services/emergency.png',
    description:
      'Same-day visits for toothaches, oral trauma, broken crowns, or severe swelling. We act quickly to bring immediate relief.',
    duration: 60,
    price: 200,
    features: [
      'Same-day emergency bookings',
      'Rapid diagnostics & relief',
      'Traumatic injury management',
      'Abscess & swelling drainage',
      'Temporary fixes on site',
    ],
  },
  {
    id: 8,
    icon: '👑',
    title: 'Dental crowns & bridges',
    slug: 'restorative-crowns-bridges',
    category: 'Restorative',
    image: '/images/services/crowns-bridges.png',
    description:
      'High-strength ceramic restorations to reinforce cracked teeth or bridge gaps. Hand-detailed for a seamless blend.',
    duration: 90,
    price: 1200,
    features: [
      'Reinforces structural integrity',
      'Beautiful aesthetic match',
      'Durable ceramic compounds',
      'Bridges fill gaps smoothly',
      'Metal-free modern options',
    ],
  },
];

const categories = ['All', 'Preventive', 'Cosmetic', 'Restorative', 'Orthodontics', 'Emergency'];

function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices =
    selectedCategory === 'All'
      ? allServices
      : allServices.filter((service) => service.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16 bg-cream">
      {/* Hero Section */}
      <section className="py-8 md:py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C19852 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest text-accent uppercase block mb-3">
              Our Treatments
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Complete Dental Care Solutions
            </h1>
            <p className="text-neutral-mid leading-relaxed text-base md:text-lg">
              From routine cleanings and preventive checkups to complex cosmetic makeovers and dental implants, we provide comprehensive, gentle care tailored to you.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white sticky top-20 z-40 border-y border-accent/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap gap-2 md:gap-3 justify-start md:justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-none ${
                  selectedCategory === category
                    ? 'bg-accent text-white border border-accent shadow-sm'
                    : 'bg-cream text-neutral-mid hover:text-accent border border-accent/15'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group relative bg-white border border-accent/15 hover:border-accent hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden"
                style={{ borderLeftWidth: '1px', transition: 'border-left-color 0.4s, border-color 0.4s, box-shadow 0.4s' }}
              >
                {/* Gold left accent bar — grows on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-20" />

                {/* Image Section — taller, cinematic */}
                <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Persistent dark gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent pointer-events-none" />

                  {/* Category pill — top left */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                    <span className="text-[10px] uppercase tracking-widest text-white font-bold bg-accent px-3 py-1 shadow-md">
                      {service.category}
                    </span>
                  </div>

                  {/* Price badge — top right */}
                  <div className="absolute top-4 right-4 z-10">
                    {service.price ? (
                      <div className="bg-white/95 backdrop-blur-sm border border-accent/20 px-3 py-1.5 text-center shadow-md">
                        <span className="text-sm font-bold text-primary block leading-none">${service.price}</span>
                        <span className="text-[9px] text-neutral-mid uppercase tracking-wider">{service.duration} min</span>
                      </div>
                    ) : (
                      <div className="bg-primary/80 backdrop-blur-sm border border-white/10 px-3 py-1.5 text-center">
                        <span className="text-[10px] text-white/80 uppercase tracking-wider">Consult</span>
                      </div>
                    )}
                  </div>

                  {/* Title overlay at image bottom — always visible */}
                  <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-8 z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{service.icon}</span>
                      <h3 className="text-lg font-heading font-semibold text-white leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Hover overlay — feature reveal slides up */}
                  <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10 flex flex-col justify-center px-6 py-6">
                    <p className="text-sm text-white/80 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-white/75">
                          <svg className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer — description + CTA */}
                <div className="px-5 py-5 flex flex-col flex-grow justify-between bg-white">
                  <p className="text-sm text-neutral-mid leading-relaxed mb-5 line-clamp-2">
                    {service.description}
                  </p>
                  <Link
                    to="/booking"
                    className="w-full text-center bg-cream border border-accent/25 hover:bg-accent hover:text-white hover:border-accent text-accent px-5 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 group/btn flex items-center justify-center gap-2"
                  >
                    Book This Treatment
                    <svg className="w-3.5 h-3.5 translate-x-0 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-primary text-white border-t border-accent/15">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-white mb-6">
            Not Sure Which Treatment Is Right for You?
          </h2>
          <p className="text-neutral-light/75 mb-8 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Schedule a comprehensive consult with Dr. Rosen. We will assess your teeth, take digital scans, and map out a gentle, customized treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/booking"
              className="w-full sm:w-auto bg-accent hover:bg-accent-600 text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300"
            >
              Book Consultation
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto border border-white/20 hover:border-white/50 text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
