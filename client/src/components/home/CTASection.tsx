import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function CTASection() {
  return (
    <section className="py-24 bg-white text-primary relative overflow-hidden border-t border-accent/15">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #C19852 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <span className="inline-block bg-cream border border-accent/25 text-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
            Get Started Today
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
            Ready to Smile with Confidence?
          </h2>

          {/* Description */}
          <p className="text-neutral-mid mb-10 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Schedule your visit today at The Dental Lounge and experience high-quality clinical care in a completely stress-free setting.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/booking"
              className="w-full sm:w-auto bg-accent hover:bg-accent-600 text-white px-8 py-4 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-none shadow-md"
            >
              Book Online
            </Link>

            <a
              href="tel:03020000973"
              className="w-full sm:w-auto border border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-none flex items-center justify-center gap-2"
            >
              Call 0302-0000973
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-neutral-mid/70 text-xs">
            {['✓ Insurance Accepted', '✓ Patient Financing Available', '✓ Emergency Appointments', '✓ Gentle Sedation Options'].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="font-medium"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
