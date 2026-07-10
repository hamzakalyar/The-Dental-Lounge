import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '@/utils/constants';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-neutral-light border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">
              The
            </h3>
            <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-6">
              Dental Lounge
            </p>
            <p className="text-sm text-neutral-light/70 leading-relaxed mb-6">
              Experience warm, high-tech dental care tailored to your unique needs in Torrance, CA. From preventive care to cosmetic enhancements, we design healthy, beautiful smiles.
            </p>
            <div className="flex gap-4">
              {/* Gold Social Links */}
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-hamza-imtiaz-9378502a6/' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url !== '#' ? "_blank" : undefined}
                  rel={social.url !== '#' ? "noopener noreferrer" : undefined}
                  className="text-xs uppercase tracking-wider text-accent hover:text-white transition-colors duration-300 font-semibold"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 md:offset-1">
            <h4 className="text-white font-heading text-lg font-semibold mb-6 border-b border-accent/20 pb-2">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-neutral-light/70 hover:text-accent transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-light/70 hover:text-accent transition-colors duration-300">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-light/70 hover:text-accent transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-neutral-light/70 hover:text-accent transition-colors duration-300">
                  Book Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Treatments Column */}
          <div className="md:col-span-3">
            <h4 className="text-white font-heading text-lg font-semibold mb-6 border-b border-accent/20 pb-2">
              Treatments
            </h4>
            <ul className="space-y-3 text-sm text-neutral-light/70">
              <li>General & Preventive Care</li>
              <li>BioClear Method Treatments</li>
              <li>Invisalign® Clear Aligners</li>
              <li>Porcelain Veneers & Smile Makeovers</li>
              <li>Gentle Root Canal Therapy</li>
              <li>Wisdom Teeth Extractions</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3">
            <h4 className="text-white font-heading text-lg font-semibold mb-6 border-b border-accent/20 pb-2">
              Location & Hours
            </h4>
            <ul className="space-y-4 text-sm text-neutral-light/70">
              <li className="flex gap-2">
                <span>📍</span>
                <span>
                  {CONTACT_INFO.address.street}, {CONTACT_INFO.address.city}<br />
                  {CONTACT_INFO.address.state} {CONTACT_INFO.address.zip}
                </span>
              </li>
              <li className="flex gap-2">
                <span>📞</span>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} className="hover:text-accent transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex gap-2">
                <span>✉️</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-accent transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="pt-2 border-t border-white/5">
                <span className="block font-semibold text-white mb-1">Clinic Hours:</span>
                Mon – Fri: 8:00 AM – 5:00 PM<br />
                Sat (By Appointment): 9:00 AM – 2:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-light/50">
          <p>&copy; {currentYear} The Dental Lounge. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
