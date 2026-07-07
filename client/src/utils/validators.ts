// Client-side validation utilities

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  // Accepts various phone formats
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  const digitsOnly = phone.replace(/\D/g, '');
  return phoneRegex.test(phone) && digitsOnly.length >= 10;
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 50;
};

export const validateMessage = (message: string, minLength = 10, maxLength = 1000): boolean => {
  const length = message.trim().length;
  return length >= minLength && length <= maxLength;
};

export const validateDate = (date: Date): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today;
};

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validators = {
  email: (value: string): ValidationResult => {
    if (!value) return { isValid: false, error: 'Email is required' };
    if (!validateEmail(value)) return { isValid: false, error: 'Invalid email format' };
    return { isValid: true };
  },

  phone: (value: string): ValidationResult => {
    if (!value) return { isValid: false, error: 'Phone number is required' };
    if (!validatePhone(value)) return { isValid: false, error: 'Invalid phone number' };
    return { isValid: true };
  },

  name: (value: string): ValidationResult => {
    if (!value) return { isValid: false, error: 'Name is required' };
    if (!validateName(value)) return { isValid: false, error: 'Name must be 2-50 characters' };
    return { isValid: true };
  },

  message: (value: string, minLength = 10, maxLength = 1000): ValidationResult => {
    if (!value) return { isValid: false, error: 'Message is required' };
    if (!validateMessage(value, minLength, maxLength)) {
      return { isValid: false, error: `Message must be ${minLength}-${maxLength} characters` };
    }
    return { isValid: true };
  },

  date: (value: Date): ValidationResult => {
    if (!value) return { isValid: false, error: 'Date is required' };
    if (!validateDate(value)) return { isValid: false, error: 'Date must be in the future' };
    return { isValid: true };
  },
};
