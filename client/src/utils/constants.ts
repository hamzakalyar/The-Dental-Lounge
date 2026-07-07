// Application constants

export const APP_NAME = 'Aesthetic Dental Clinic';

export const CONTACT_INFO = {
  phone: '(555) 123-4567',
  email: 'info@aestheticdental.com',
  address: {
    street: '123 Dental Avenue, Suite 100',
    city: 'San Francisco',
    state: 'CA',
    zip: '94102',
  },
};

export const BUSINESS_HOURS = {
  weekdays: {
    label: 'Monday - Friday',
    hours: '8:00 AM - 6:00 PM',
  },
  saturday: {
    label: 'Saturday',
    hours: '9:00 AM - 2:00 PM',
  },
  sunday: {
    label: 'Sunday',
    hours: 'Closed',
  },
};

export const SERVICE_CATEGORIES = {
  PREVENTIVE: 'Preventive',
  COSMETIC: 'Cosmetic',
  RESTORATIVE: 'Restorative',
  ORTHODONTICS: 'Orthodontics',
  EMERGENCY: 'Emergency',
} as const;

export const APPOINTMENT_TIME_SLOTS = {
  MORNING: 'morning',
  AFTERNOON: 'afternoon',
  EVENING: 'evening',
} as const;

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';
