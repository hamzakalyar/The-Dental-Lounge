import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-neutral-light mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              🦷 Aesthetic Dental
            </h3>
            <p className="text-sm text-neutral-mid">
              Premium dental care with a personal touch. Experience modern dentistry in a calming environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-mid hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-mid hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-mid hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-neutral-mid hover:text-accent transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-neutral-mid">
              <li>General Dentistry</li>
              <li>Cosmetic Dentistry</li>
              <li>Orthodontics</li>
              <li>Dental Implants</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-neutral-mid text-sm">
              <li>📍 123 Dental Avenue, Suite 100</li>
              <li>📞 (555) 123-4567</li>
              <li>✉️ info@aestheticdental.com</li>
              <li className="pt-2">
                <span className="block font-semibold text-white">Hours:</span>
                Mon-Fri: 8:00 AM - 6:00 PM<br />
                Sat: 9:00 AM - 2:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-mid/20 mt-8 pt-8 text-center text-sm text-neutral-mid">
          <p>&copy; {currentYear} Aesthetic Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
