import { motion } from 'framer-motion';
import { useState } from 'react';
import { CONTACT_INFO, BUSINESS_HOURS } from '@/utils/constants';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-4">
              Get in Touch
            </h1>
            <p className="text-neutral-mid leading-relaxed text-base md:text-lg">
              Have questions about treatments, PPO insurance, or bookings? Send us a message and our friendly front-office team will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 border-t border-accent/10" style={{ backgroundColor: '#D9C9B0' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Info Cards Column */}
            <div className="lg:col-span-4 space-y-5">
              {/* Phone */}
              <div className="bg-white border border-accent/10 p-6 rounded-none group hover:border-accent/30 hover:shadow-lg shadow-sm transition-all duration-300">
                <div className="w-10 h-10 bg-white border border-accent/15 flex items-center justify-center text-lg mb-4 shadow-sm group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  📞
                </div>
                <h3 className="text-base font-heading font-semibold text-primary mb-1">Phone</h3>
                <p className="text-xs text-neutral-mid mb-3">Call us for immediate scheduling or same-day emergency care.</p>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`}
                  className="text-accent font-semibold text-base hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>

              {/* Email */}
              <div className="bg-white border border-accent/10 p-6 rounded-none group hover:border-accent/30 hover:shadow-lg shadow-sm transition-all duration-300">
                <div className="w-10 h-10 bg-white border border-accent/15 flex items-center justify-center text-lg mb-4 shadow-sm group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  ✉️
                </div>
                <h3 className="text-base font-heading font-semibold text-primary mb-1">Email</h3>
                <p className="text-xs text-neutral-mid mb-3">For records transfer, insurance queries, or corporate details.</p>
                <a
                  href={`mailto:hamzaimtiaz9970@gmail.com`}
                  className="text-accent font-semibold text-sm hover:text-primary transition-colors break-all"
                >
                  hamzaimtiaz9970@gmail.com
                </a>
              </div>

              {/* Hours */}
              <div className="bg-white border border-accent/10 p-6 rounded-none group hover:border-accent/30 hover:shadow-lg shadow-sm transition-all duration-300">
                <div className="w-10 h-10 bg-white border border-accent/15 flex items-center justify-center text-lg mb-4 shadow-sm group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  🕒
                </div>
                <h3 className="text-base font-heading font-semibold text-primary mb-3">Office Hours</h3>
                <div className="space-y-2 text-xs text-neutral-mid">
                  <div className="flex justify-between border-b border-accent/5 pb-1">
                    <span>{BUSINESS_HOURS.weekdays.label}</span>
                    <span className="font-semibold text-primary">{BUSINESS_HOURS.weekdays.hours}</span>
                  </div>
                  <div className="flex justify-between border-b border-accent/5 pb-1">
                    <span>{BUSINESS_HOURS.saturday.label}</span>
                    <span className="font-semibold text-primary">{BUSINESS_HOURS.saturday.hours}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{BUSINESS_HOURS.sunday.label}</span>
                    <span className="font-semibold text-neutral-mid/60">{BUSINESS_HOURS.sunday.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-8">
              <div className="border border-accent/15 p-8 md:p-10 bg-white shadow-lg rounded-sm">
                <h2 className="text-2xl font-heading text-primary mb-2">Send a Message</h2>
                <p className="text-sm text-neutral-mid mb-6">
                  Fill out the form below and our office coordinator will get in touch with you shortly.
                </p>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-accent/10 border border-accent/30 text-accent px-6 py-4 mb-6 text-sm"
                  >
                    <strong>Message Prepared!</strong> Please send the email via your default mail client.
                  </motion.div>
                )}

                <form
                  action="mailto:hamzaimtiaz9970@gmail.com"
                  method="post"
                  encType="text/plain"
                  onSubmit={() => {
                    setTimeout(() => setSubmitStatus('success'), 500);
                  }}
                  className="space-y-5"
                >
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-cream border border-accent/20 focus:border-accent outline-none transition-all text-sm rounded-none"
                      placeholder="Jane Doe"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-cream border border-accent/20 focus:border-accent outline-none transition-all text-sm rounded-none"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-cream border border-accent/20 focus:border-accent outline-none transition-all text-sm rounded-none"
                        placeholder="(310) 555-0199"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-cream border border-accent/20 focus:border-accent outline-none transition-all text-sm rounded-none"
                      placeholder="e.g., Question about Invisalign"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2.5 bg-cream border border-accent/20 focus:border-accent outline-none transition-all text-sm resize-none rounded-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-600 text-white py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-none shadow-sm"
                  >
                    Submit Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-cream border-t border-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C19852 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Map Frame */}
            <div className="lg:col-span-7 w-full h-[400px] border border-accent/20 bg-white p-2 shadow-sm rounded-none group hover:shadow-lg hover:border-accent/40 transition-all duration-500">
              <iframe
                title="The Dental Lounge Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106093.84439006094!2d-118.42398455820313!3d33.82772099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b4c1065c71d5%3A0xf65fb0a6122d250!2sTorrance%2C%20CA!5e0!3m2!1sen!2sus!4v1684000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 object-cover"
              ></iframe>
            </div>

            {/* Location Card */}
            <div className="lg:col-span-5">
              <div className="relative text-center p-10 bg-white border border-accent/15 shadow-sm max-w-md mx-auto group hover:-translate-y-1 hover:shadow-xl hover:border-accent/40 transition-all duration-500 cursor-default overflow-hidden">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="w-14 h-14 bg-cream border border-accent/15 rounded-full flex items-center justify-center text-2xl mb-6 mx-auto group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
                  📍
                </div>
                <h3 className="font-heading font-semibold text-primary text-2xl mb-3">The Dental Lounge</h3>
                <p className="text-base text-neutral-mid leading-relaxed mb-6">
                  {CONTACT_INFO.address.street},<br />
                  {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} {CONTACT_INFO.address.zip}
                </p>
                <div className="w-12 h-[2px] bg-accent/30 mx-auto mb-6 group-hover:bg-accent transition-colors duration-500" />
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address.street + ', ' + CONTACT_INFO.address.city + ', ' + CONTACT_INFO.address.state + ' ' + CONTACT_INFO.address.zip)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs font-semibold uppercase tracking-widest text-accent hover:text-white hover:bg-accent border border-accent px-6 py-3 transition-all duration-300"
                >
                  Get Driving Directions
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
