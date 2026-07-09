// Application constants

export const APP_NAME = 'The Dental Lounge';

export const CONTACT_INFO = {
  phone: '0302-0000973',
  email: 'hamzaimtiaz9970@gmail.com',
  address: {
    street: 'D-110 5th floor, 6th Road',
    city: 'Satellite Town',
    state: 'Rawalpindi',
    zip: '',
  },
};

export const BUSINESS_HOURS = {
  weekdays: {
    label: 'Monday - Friday',
    hours: '8:00 AM - 5:00 PM',
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
