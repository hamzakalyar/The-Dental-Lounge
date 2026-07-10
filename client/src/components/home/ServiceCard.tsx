import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  slug: string;
  featured?: boolean;
  index?: number;
  image?: string;
  features?: string[];
}

function ServiceCard({ icon, title, description, featured, image, features }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative h-full flex flex-col bg-white border border-accent/15 transition-all duration-300 hover:shadow-soft-lg hover:border-accent/40 rounded-none overflow-hidden"
    >
      {/* Featured Accent Border */}
      {featured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent z-10" />
      )}

      {/* Service Image Header */}
      {image && (
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-accent/10">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

          {/* Hover overlay — feature reveal slides up */}
          {features && features.length > 0 && (
            <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10 flex flex-col justify-center px-6 py-4">
              <ul className="space-y-1.5">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-white/75">
                    <svg className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="p-8 flex-grow flex flex-col justify-between relative">
        {/* Floating Icon Frame overlaying the image */}
        <div className="w-12 h-12 bg-cream border border-accent/25 flex items-center justify-center text-xl mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 -mt-14 relative z-10 shadow-sm">
          {icon}
        </div>

        <div className="flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-heading font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm text-neutral-mid leading-relaxed mb-6">
              {description}
            </p>
          </div>

          {/* Learn More link */}
          <div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent group-hover:text-primary transition-colors duration-300"
            >
              Explore Service
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
      </div>
    </motion.div>
  );
}

export default ServiceCard;
