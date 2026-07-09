import { Link } from 'react-router-dom';

const values = [
  {
    icon: '❤️',
    title: 'Patient-First Focus',
    description: 'We prioritize your physical and emotional comfort. Your goals drive our custom clinical plans.',
    stat: '10k+',
    statLabel: 'Happy Patients',
  },
  {
    icon: '🔬',
    title: 'High-Tech Diagnostics',
    description: 'We invest in advanced scanners and tools to ensure diagnostics are faster, safer, and pain-free.',
    stat: '3D',
    statLabel: 'Scanning Tech',
  },
  {
    icon: '✨',
    title: 'Absolute Honesty',
    description: 'No treatment pressure. We explain clinical findings and costs clearly before doing any work.',
    stat: '0',
    statLabel: 'Hidden Fees',
  },
  {
    icon: '🤝',
    title: 'Torrance Community',
    description: 'We are proud to serve our South Bay community, building lifelong relationships with families.',
    stat: '15+',
    statLabel: 'Years Serving',
  },
];

function About() {
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
              About Our Clinic
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-4">
              Our Practice Philosophy
            </h1>
            <p className="text-neutral-mid leading-relaxed text-base md:text-lg">
              We balance advanced dental science with old-fashioned warm hospitality. Welcome to The Dental Lounge.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Section — 3-Column Editorial Layout */}
      <section className="py-14 bg-white border-t border-accent/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Label */}
          <p className="text-center text-[11px] font-bold tracking-[0.25em] text-primary/50 uppercase mb-8">
            Lead Practitioner · The Dental Lounge
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">

            {/* LEFT — Portrait */}
            <div className="lg:col-span-3 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[260px]">
                <div className="overflow-hidden rounded-sm border border-accent/15 shadow-md aspect-[3/4]">
                  <img
                    src="/images/dr_profile.png"
                    alt="Dr. Karen Rosen, DDS"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Name tag below portrait */}
                <div className="mt-3 text-center">
                  <span className="block text-sm font-heading font-semibold text-primary">Dr. Karen Rosen</span>
                  <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">DDS · Lead Dentist</span>
                </div>
              </div>
            </div>

            {/* CENTER — Text + Treatment Photo */}
            <div className="lg:col-span-6 text-center flex flex-col items-center">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase block mb-4">
                About Our Clinic
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-primary mb-6 leading-[1.15]">
                Come as you are.<br />Leave smiling.
              </h2>
              <div className="space-y-3 text-neutral-mid leading-relaxed text-sm md:text-base max-w-lg mb-8">
                <p>
                  We care about the person in the chair, not just their teeth. Dr. Rosen takes the time to understand your health, your goals, and your past dental experiences.
                </p>
                <p>
                  Whether you're here for your child's first visit or your own smile goals — we're here to build something real with you, with honest care that supports your overall health and happiness.
                </p>
              </div>

              {/* CTA Button */}
              <a
                href="/booking"
                className="inline-block border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 text-sm font-semibold tracking-wide transition-all duration-300 rounded-full mb-10"
              >
                Book Your First Visit
              </a>

              {/* Treatment Photo */}
              <div className="w-full max-w-md overflow-hidden rounded-sm border border-accent/15 shadow-md aspect-[4/3]">
                <img
                  src="/images/dr_treating.png"
                  alt="Dr. Rosen consulting with a patient"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT — Clinic Photo */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[260px]">
                <div className="overflow-hidden rounded-sm border border-accent/15 shadow-md aspect-[3/4]">
                  <img
                    src="/images/clinic_lobby.png"
                    alt="The Dental Lounge reception"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Clinic label below */}
                <div className="mt-3 text-center">
                  <span className="block text-sm font-heading font-semibold text-primary">Our Clinic</span>
                  <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">Torrance, CA</span>
                </div>
              </div>
            </div>

          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-accent/10 text-center max-w-lg mx-auto">
            <div>
              <span className="block text-2xl font-bold text-accent font-heading">15+</span>
              <span className="text-[10px] uppercase tracking-wider text-neutral-mid font-semibold">Years Exp</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-accent font-heading">800+</span>
              <span className="text-[10px] uppercase tracking-wider text-neutral-mid font-semibold">5-Star Reviews</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-accent font-heading">10k+</span>
              <span className="text-[10px] uppercase tracking-wider text-neutral-mid font-semibold">Happy Smiles</span>
            </div>
          </div>

        </div>
      </section>


      {/* Our Commitments — Moving Marquee Cards */}
      <section className="py-12 border-t border-accent/10 overflow-hidden" style={{ backgroundColor: '#D9C9B0' }}>
        <style>{`
          @keyframes marqueeScrollLeft {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-left {
            animation: marqueeScrollLeft 22s linear infinite;
          }
          .marquee-track:hover .animate-marquee-left {
            animation-play-state: paused;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-widest text-accent uppercase block mb-3">
              Our Commitments
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-4">
              Our Core Clinical Values
            </h2>
            <p className="text-neutral-mid leading-relaxed">
              We operate under a simple set of principles: provide state-of-the-art treatments with complete honesty, absolute safety, and unmatched hospitality.
            </p>
          </div>
        </div>

        {/* Full-bleed marquee track */}
        <div className="marquee-track w-full overflow-hidden">
          {/* Left + right fade masks */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #D9C9B0, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #D9C9B0, transparent)' }} />

            {/* Duplicated card set for seamless loop */}
            <div className="flex gap-6 animate-marquee-left w-max px-6">
              {[...values, ...values].map((value, index) => (
                <div
                  key={index}
                  className="group relative bg-white border border-accent/15 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-default flex-shrink-0 w-72"
                >
                  {/* Gold top accent bar — expands on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />

                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-95 transition-opacity duration-500 z-0" />

                  <div className="relative z-10 p-7">
                    {/* Icon */}
                    <div className="text-4xl mb-5 transition-transform duration-500 group-hover:scale-110 inline-block">
                      {value.icon}
                    </div>

                    {/* Stat counter */}
                    <div className="mb-4">
                      <span className="text-3xl font-heading font-bold text-accent">{value.stat}</span>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-mid group-hover:text-white/50 block transition-colors duration-300">{value.statLabel}</span>
                    </div>

                    {/* Gold divider */}
                    <div className="w-8 h-[2px] bg-accent mb-4" />

                    <h3 className="text-base font-heading font-semibold text-primary group-hover:text-white mb-2 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-xs text-neutral-mid group-hover:text-white/70 leading-relaxed transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Advanced Technology Section */}
      <section className="py-12 bg-white border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Tech details */}
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase block mb-3">
                High-Tech Dentistry
              </span>
              <h2 className="text-3xl md:text-4xl font-heading text-primary mb-5">
                Advanced Equipment, Better Outcomes
              </h2>
              <p className="text-neutral-mid leading-relaxed text-sm md:text-base mb-6">
                Dentistry has evolved. We leverage advanced technological developments to make diagnostics and treatments faster, cleaner, and virtually pain-free.
              </p>

              <div className="space-y-5">
                {[
                  { num: '1', title: 'Intraoral 3D Scanners', desc: 'Say goodbye to messy dental trays. Our intraoral scanner captures highly detailed 3D color images of your teeth in seconds, improving diagnosis and restoration fit.' },
                  { num: '2', title: 'Ultra-Low Radiation Digital X-Rays', desc: 'Our modern digital sensors capture crisp dental radiographs instantly, reducing radiation exposure by up to 80% compared to traditional X-rays.' },
                  { num: '3', title: '3D Cone Beam CT Scanning', desc: 'For implants and root canals, we use 3D cone beam radiography to map structural anatomy with micrometer precision, ensuring safer surgeries.' },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4">
                    <div className="w-8 h-8 rounded-none border border-accent bg-cream flex-shrink-0 flex items-center justify-center font-heading font-bold text-accent">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-primary mb-1">{item.title}</h4>
                      <p className="text-xs text-neutral-mid leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech image */}
            <div className="lg:col-span-5">
              <div className="border border-accent/20 p-3 bg-cream">
                <div className="aspect-[4/3] w-full overflow-hidden border border-accent/15">
                  <img
                    src="/images/clinic_lobby.png"
                    alt="Advanced dental diagnostics equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-14 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-white mb-5">
            Experience Calm, Professional Dental Care
          </h2>
          <p className="text-neutral-light/75 mb-8 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Let us help you achieve a healthy, confident smile in comfort. Schedule your visit with Dr. Rosen and our friendly team today.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-accent hover:bg-accent-600 text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300"
          >
            Schedule Your Visit
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
