import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    const isActive = location.pathname === to;
    if (isActive) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'instant' });
      // Small delay to allow scroll before reload
      setTimeout(() => window.location.reload(), 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-accent/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="The Dental Lounge - Home"
          >
            <img src="/logo.png" alt="The Dental Lounge Logo" className="h-10 w-10 object-contain group-hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="text-2xl font-semibold tracking-wide text-primary font-heading group-hover:text-accent transition-colors duration-300">
                The
              </span>
              <span className="text-xs font-semibold tracking-widest text-accent uppercase leading-none mt-1">
                Dental Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={(e) => handleNavClick(e, link.to)}
                  className="relative px-4 py-2 group"
                >
                  <span
                    className={`relative z-10 text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isActive
                        ? 'text-accent'
                        : 'text-primary/80 group-hover:text-accent'
                    }`}
                  >
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent"
                      transition={{ type: 'spring', duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + Contact */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Phone Number */}
            <a
              href="tel:03020000973"
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 group"
            >
              <svg
                className="w-4 h-4 text-accent group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm font-semibold tracking-wide">0302-0000973</span>
            </a>

            {/* Book Appointment Button */}
            <Link
              to="/booking"
              className="border-2 border-accent bg-accent hover:bg-transparent hover:text-accent text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-none shadow-sm"
            >
              Book Online
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative p-2 rounded-lg hover:bg-neutral-light transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 rounded-full bg-primary"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 rounded-full bg-primary"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 rounded-full bg-primary"
              />
            </div>
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
              className="lg:hidden overflow-hidden border-t border-accent/10 bg-white"
            >
              <div className="py-6 space-y-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.to;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`block px-4 py-3 font-medium transition-colors ${
                        isActive
                          ? 'bg-cream-dark text-accent'
                          : 'text-primary hover:bg-cream-light hover:text-accent'
                      }`}
                      onClick={(e) => {
                        handleNavClick(e, link.to);
                        setIsMenuOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                {/* Mobile Phone */}
                <a
                  href="tel:03020000973"
                  className="flex items-center gap-3 px-4 py-3 text-primary hover:text-accent transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-sm font-semibold">0302-0000973</span>
                </a>

                {/* Mobile Book Button */}
                <Link
                  to="/booking"
                  className="block mt-4 bg-accent hover:bg-accent-600 text-white px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-wider transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Online
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

export default Header;
