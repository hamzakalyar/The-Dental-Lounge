import { motion } from 'framer-motion';
import { useState } from 'react';
import { format } from 'date-fns';

const services = [
  'General checkup & cleaning',
  'Teeth whitening',
  'Dental implants',
  'Invisalign® Clear Aligners',
  'Root canal therapy',
  'Porcelain veneers',
  'Emergency dentistry',
  'Crowns & bridges',
];

const timeSlots = ['Morning (8AM - 12PM)', 'Afternoon (12PM - 5PM)', 'Evening (5PM - 8PM)'];

function Booking() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = format(new Date(), 'yyyy-MM-dd');

  return (
    <div className="min-h-screen pt-16 bg-cream">
      {/* Main Booking Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C19852 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          


          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Text & Visuals */}
            <div className="lg:col-span-5 h-full flex flex-col pt-2 lg:pt-8">
              <div className="mb-8">
                <span className="text-xs font-semibold tracking-widest text-accent uppercase block mb-3">
                  Online Bookings
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
                  Schedule Your Visit
                </h1>
                <p className="text-neutral-mid leading-relaxed text-base md:text-lg">
                  Take the first step toward a healthier, more confident smile. Request an appointment below, and our coordinator will confirm your time slot shortly.
                </p>
              </div>

              <div className="relative group hidden lg:block pb-8">
                <div className="absolute inset-0 bg-accent/20 translate-x-4 translate-y-4 rounded-sm transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                <div className="relative z-10 w-full overflow-hidden rounded-sm border border-accent/15 shadow-xl">
                  <img
                    src="/images/clinic_lobby.png"
                    alt="The Dental Lounge Clinic"
                    className="w-full h-full object-cover aspect-[4/5] transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay text / badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 border border-accent/10 shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-sm font-heading font-semibold text-primary mb-1">Modern & Relaxing</p>
                    <p className="text-xs text-neutral-mid leading-relaxed">Experience a serene environment designed to eliminate dental anxiety.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              {/* Booking Form Wrapper */}
              <div className="border border-accent/15 p-8 md:p-10 bg-white shadow-lg rounded-sm relative">
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/40" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/40" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/40" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/40" />

                <div className="mb-8 text-center" id="booking-form-top">
                  <h2 className="text-2xl font-heading text-primary mb-2">
                    Request an Appointment
                  </h2>
                  <p className="text-sm text-neutral-mid">
                    Please complete the form below. Starred (*) fields are required.
                  </p>
                </div>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-accent/10 border border-accent/30 text-accent px-6 py-4 mb-8 text-sm text-center"
                  >
                    <strong>Booking Request Sent!</strong> Thank you for your request. Our coordinator will contact you shortly to confirm your time slot.
                  </motion.div>
                )}

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitStatus('submitting');
                    
                    // Simulate network request for the demo
                    setTimeout(() => {
                      setSubmitStatus('success');
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        service: '',
                        preferredDate: '',
                        preferredTime: '',
                        message: '',
                      });
                      
                      // Scroll to top of the form to ensure they see the message
                      const formTop = document.getElementById('booking-form-top');
                      if (formTop) {
                        formTop.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }

                      // Hide success message after 5 seconds
                      setTimeout(() => setSubmitStatus('idle'), 5000);
                    }, 1500);
                  }}
                  className="space-y-6"
                >
                  {/* Personal Info */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-accent border-b border-accent/10 pb-1">
                      1. Patient Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="firstName" className="block text-xs font-semibold uppercase tracking-wide text-primary mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-white border border-accent/20 focus:border-accent outline-none text-sm rounded-none shadow-sm"
                          placeholder="Jane"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-xs font-semibold uppercase tracking-wide text-primary mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-white border border-accent/20 focus:border-accent outline-none text-sm rounded-none shadow-sm"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-accent border-b border-accent/10 pb-1">
                      2. Contact Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-primary mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                          title="Please enter a valid email address (e.g., jane@example.com)"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-white border border-accent/20 focus:border-accent outline-none text-sm rounded-none shadow-sm"
                          placeholder="jane@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wide text-primary mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-white border border-accent/20 focus:border-accent outline-none text-sm rounded-none shadow-sm"
                          placeholder="0302-0000973"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Appointment Preferences */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-accent border-b border-accent/10 pb-1">
                      3. Time & Treatment
                    </h3>
                    <div className="space-y-5">
                      {/* Service Needed */}
                      <div>
                        <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wide text-primary mb-1">
                          Service Needed *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-white border border-accent/20 focus:border-accent outline-none text-sm rounded-none shadow-sm"
                        >
                          <option value="">Select a treatment...</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Date & Time slots */}
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="preferredDate" className="block text-xs font-semibold uppercase tracking-wide text-primary mb-1">
                            Preferred Date *
                          </label>
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            required
                            min={today}
                            value={formData.preferredDate}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-white border border-accent/20 focus:border-accent outline-none text-sm rounded-none shadow-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="preferredTime" className="block text-xs font-semibold uppercase tracking-wide text-primary mb-1">
                            Preferred Time of Day *
                          </label>
                          <select
                            id="preferredTime"
                            name="preferredTime"
                            required
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-white border border-accent/20 focus:border-accent outline-none text-sm rounded-none shadow-sm"
                          >
                            <option value="">Select a time slot...</option>
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot}>
                                {slot}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Additional notes */}
                      <div>
                        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-primary mb-1">
                          Additional Notes / Symptoms
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-2.5 bg-white border border-accent/20 focus:border-accent outline-none text-sm resize-none rounded-none shadow-sm"
                          placeholder="e.g., I have dental anxiety..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Policy note */}
                  <div className="border border-accent/20 p-4 bg-white flex gap-3 text-xs text-neutral-mid shadow-sm">
                    <span className="text-accent text-sm">💡</span>
                    <div>
                      <h4 className="font-semibold text-primary mb-0.5">Appointment Policy</h4>
                      <p className="leading-relaxed">
                        This is a request. Our coordinator will review availability and contact you within 24 hours to lock in your time.
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className="w-full bg-accent hover:bg-accent-600 disabled:bg-accent/70 disabled:cursor-not-allowed text-white py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-none shadow-sm mt-2 flex items-center justify-center gap-2"
                  >
                    {submitStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Request'
                    )}
                  </button>

                  {/* Phone fallback */}
                  <p className="text-center text-xs text-neutral-mid mt-4">
                    Need immediate booking?{' '}
                    <a href="tel:03020000973" className="text-accent font-semibold hover:underline">
                      Call us at 0302-0000973
                    </a>
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why book with us cards */}
      <section className="py-20 bg-cream border-t border-accent/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-heading text-primary mb-12">Online Booking Benefits</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '⚡',
                title: 'Quick Response',
                description: 'Office confirmation within 24 business hours.',
              },
              {
                icon: '📅',
                title: 'Flexible Times',
                description: 'Morning, afternoon, and evening slots.',
              },
              {
                icon: '🔒',
                title: 'HIPAA Compliant',
                description: 'Your medical details are secure.',
              },
              {
                icon: '💬',
                title: 'Easy Scheduling',
                description: 'Cancel or reschedule with a quick call/text.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-accent/10 p-8 rounded-none hover:shadow-soft transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-cream border border-accent/15 flex items-center justify-center text-lg mx-auto mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-heading font-semibold text-primary text-base mb-2">{feature.title}</h3>
                <p className="text-xs text-neutral-mid leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Booking;
