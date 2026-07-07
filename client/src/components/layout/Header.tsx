import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-surface shadow-soft sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-heading font-bold text-primary hover:text-accent transition-colors"
            aria-label="Aesthetic Dental Clinic - Home"
          >
            🦷 Aesthetic Dental
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-neutral-dark hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary-600 transition-colors shadow-soft hover:shadow-soft-lg"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-dark hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block text-neutral-dark hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/booking"
                  className="block bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary-600 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Header;
