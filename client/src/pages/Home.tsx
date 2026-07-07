import { motion } from 'framer-motion';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-display-sm md:text-display-md lg:text-display-lg text-neutral-dark mb-6">
              Your Smile, Our{' '}
              <span className="text-primary">Passion</span>
            </h1>
            <p className="text-body-lg md:text-heading-sm text-neutral-mid mb-8 max-w-2xl mx-auto">
              Experience premium dental care in a calming, modern environment.
              We combine cutting-edge technology with a gentle, personalized approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/booking"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors shadow-soft-lg inline-block"
              >
                Book Your Appointment
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-neutral-light transition-colors shadow-soft inline-block border-2 border-primary"
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Placeholder sections for next phase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-heading-xl text-neutral-dark mb-4">Welcome to Phase 1</h2>
          <p className="text-body-lg text-neutral-mid">
            Basic structure is in place. Next phases will add Services, About, Testimonials, and the full booking system.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
