// Shared API types between client and server

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  duration: number;
  price: number | null;
  category: string;
  featured: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Appointment {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: 'morning' | 'afternoon' | 'evening';
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
  updatedAt?: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  service?: string;
  rating: number;
  content: string;
  published: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface ApiResponse<T> {
  status: 'success' | 'error';
  data?: T;
  message?: string;
  errors?: Array<{
    field: string;
    message: string;
  }>;
}

export interface AppointmentRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: 'morning' | 'afternoon' | 'evening';
  message?: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  subject?: string;
  message: string;
}
