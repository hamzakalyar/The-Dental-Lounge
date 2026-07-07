import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Seed Services
  const services = await Promise.all([
    prisma.service.create({
      data: {
        name: 'General Checkup & Cleaning',
        slug: 'general-checkup-cleaning',
        description: 'Comprehensive dental examination with professional cleaning and polishing. Includes X-rays and oral health assessment.',
        duration: 60,
        price: 150,
        category: 'Preventive',
        featured: true,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Teeth Whitening',
        slug: 'teeth-whitening',
        description: 'Professional in-office teeth whitening treatment for a brighter, more confident smile. Results visible in one session.',
        duration: 90,
        price: 450,
        category: 'Cosmetic',
        featured: true,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Dental Implants',
        slug: 'dental-implants',
        description: 'Permanent tooth replacement solution with titanium implants and custom crowns. Natural look and feel.',
        duration: 120,
        price: null, // Contact for pricing
        category: 'Restorative',
        featured: true,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Invisalign',
        slug: 'invisalign',
        description: 'Clear aligner orthodontic treatment to straighten teeth discreetly. Custom treatment plan with 3D imaging.',
        duration: 45,
        price: null, // Contact for pricing
        category: 'Orthodontics',
        featured: true,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Root Canal Treatment',
        slug: 'root-canal',
        description: 'Advanced endodontic therapy to save infected or damaged teeth. Performed with precision and care.',
        duration: 90,
        price: 800,
        category: 'Restorative',
        featured: false,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Porcelain Veneers',
        slug: 'porcelain-veneers',
        description: 'Custom-crafted porcelain veneers to transform your smile. Covers chips, gaps, and discoloration.',
        duration: 120,
        price: null, // Contact for pricing
        category: 'Cosmetic',
        featured: true,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Emergency Dental Care',
        slug: 'emergency-care',
        description: 'Same-day emergency dental services for urgent pain, trauma, or infection. We prioritize your comfort.',
        duration: 60,
        price: 200,
        category: 'Emergency',
        featured: false,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Dental Crowns & Bridges',
        slug: 'crowns-bridges',
        description: 'Restore damaged or missing teeth with custom dental crowns and bridges. Durable and natural-looking.',
        duration: 90,
        price: 1200,
        category: 'Restorative',
        featured: false,
      },
    }),
  ]);

  console.log(`✅ Created ${services.length} services`);

  // Seed Testimonials
  const testimonials = await Promise.all([
    prisma.testimonial.create({
      data: {
        name: 'Sarah Mitchell',
        service: 'Teeth Whitening',
        rating: 5,
        content: 'I cannot recommend Aesthetic Dental enough! The teeth whitening treatment exceeded my expectations. Dr. Chen and the team made me feel so comfortable throughout the entire process.',
        published: true,
      },
    }),
    prisma.testimonial.create({
      data: {
        name: 'James Rodriguez',
        service: 'Dental Implants',
        rating: 5,
        content: 'After years of being self-conscious about my smile, I finally got dental implants here. The results are life-changing! The staff is incredibly professional and caring.',
        published: true,
      },
    }),
    prisma.testimonial.create({
      data: {
        name: 'Emily Thompson',
        service: 'General Checkup',
        rating: 5,
        content: 'The most gentle and thorough dental cleaning I have ever had. The hygienist was patient with my dental anxiety, and the clinic environment is so calming. Will definitely be returning!',
        published: true,
      },
    }),
    prisma.testimonial.create({
      data: {
        name: 'Michael Chen',
        service: 'Invisalign',
        rating: 5,
        content: 'The Invisalign treatment here has completely transformed my smile. The team provided clear guidance every step of the way, and the results are exactly what I hoped for.',
        published: true,
      },
    }),
    prisma.testimonial.create({
      data: {
        name: 'Lisa Anderson',
        service: 'Porcelain Veneers',
        rating: 5,
        content: 'My veneers look absolutely natural! Dr. Chen is a true artist. The entire team made me feel like I was in great hands from consultation to final results.',
        published: true,
      },
    }),
    prisma.testimonial.create({
      data: {
        name: 'David Park',
        service: 'Emergency Care',
        rating: 5,
        content: 'Had a dental emergency on a Saturday and they fit me in immediately. The pain relief was instant and the care was exceptional. So grateful for this clinic!',
        published: true,
      },
    }),
  ]);

  console.log(`✅ Created ${testimonials.length} testimonials`);

  console.log('✨ Seeding complete!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Seeding failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
