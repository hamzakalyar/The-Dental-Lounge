import { Router } from 'express';

const router = Router();

// Placeholder routes - will be implemented in next phases
router.get('/', (_req, res) => {
  res.json({
    message: 'Aesthetic Dental Clinic API',
    version: '1.0.0',
    endpoints: {
      services: '/api/services',
      appointments: '/api/appointments',
      contact: '/api/contact',
      testimonials: '/api/testimonials',
    },
  });
});

export default router;
