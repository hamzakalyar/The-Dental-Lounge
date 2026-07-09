import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const featuredServices = [
  {
    icon: '✨',
    title: 'Teeth Whitening',
    description:
      'Professional in-office teeth whitening treatments for a brighter, more confident smile. Fast, safe, and highly effective.',
    slug: 'cosmetic-whitening',
    featured: true,
    image: '/images/services/whitening.png',
  },
  {
    icon: '🦷',
    title: 'General Checkup',
    description:
      'Comprehensive dental examinations with professional cleaning and polishing. Includes oral cancer screening and digital X-rays.',
    slug: 'preventive-checkup',
    featured: true,
    image: '/images/services/checkup.png',
  },
  {
    icon: '💎',
    title: 'Dental Implants',
    description:
      'Permanent tooth replacement solution with premium titanium implants and custom porcelain crowns. Natural look, feel, and function.',
    slug: 'restorative-implants',
    featured: true,
    image: '/images/services/implants.png',
  },
  {
    icon: '😊',
    title: 'Invisalign®',
    description:
      'Clear aligner orthodontic treatment to straighten teeth discreetly. Custom treatment plans with advanced 3D scanning.',
    slug: 'orthodontics-invisalign',
    featured: false,
    image: '/images/services/invisalign.png',
  },
  {
    icon: '🌟',
    title: 'Porcelain Veneers',
    description:
      'Custom-crafted thin porcelain shells to transform your smile. Perfect for covering chips, gaps, and severe discoloration.',
    slug: 'cosmetic-veneers',
    featured: false,
    image: '/images/services/veneers.png',
  },
  {
    icon: '🚨',
    title: 'Emergency Care',
    description:
      'Same-day emergency dental services for urgent pain, swelling, tooth trauma, or infections. Your comfort is our priority.',
    slug: 'general-emergency',
    featured: false,
    image: '/images/services/emergency.png',
  },
];

function ServicesPreview() {
  return (
    <section className="py-24 bg-cream border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase block mb-3">
            Expert Treatments
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
            Comprehensive Dental Care
          </h2>
          <p className="text-neutral-mid leading-relaxed text-base md:text-lg">
            From routine checkups to specialized cosmetic procedures, we offer a full range of top-tier services using state-of-the-art diagnostic technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} index={index} />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 border-2 border-accent bg-accent hover:bg-transparent hover:text-accent text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
          >
            View All Services
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300"
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

export default ServicesPreview;
