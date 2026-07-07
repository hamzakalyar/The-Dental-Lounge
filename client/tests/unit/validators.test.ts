import { describe, it, expect } from 'vitest';
import { validateEmail, validatePhone, validateName, validators } from '@/utils/validators';

describe('validators', () => {
  describe('validateEmail', () => {
    it('should validate correct email formats', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name@domain.co.uk')).toBe(true);
    });

    it('should reject invalid email formats', () => {
      expect(validateEmail('invalid')).toBe(false);
      expect(validateEmail('missing@domain')).toBe(false);
      expect(validateEmail('@domain.com')).toBe(false);
    });
  });

  describe('validatePhone', () => {
    it('should validate correct phone formats', () => {
      expect(validatePhone('555-123-4567')).toBe(true);
      expect(validatePhone('(555) 123-4567')).toBe(true);
      expect(validatePhone('+1 555 123 4567')).toBe(true);
    });

    it('should reject invalid phone numbers', () => {
      expect(validatePhone('123')).toBe(false);
      expect(validatePhone('abc-def-ghij')).toBe(false);
    });
  });

  describe('validateName', () => {
    it('should validate names with correct length', () => {
      expect(validateName('John')).toBe(true);
      expect(validateName('AB')).toBe(true);
    });

    it('should reject names that are too short or too long', () => {
      expect(validateName('A')).toBe(false);
      expect(validateName('a'.repeat(51))).toBe(false);
    });
  });

  describe('validators object', () => {
    it('should return validation results with errors', () => {
      const result = validators.email('invalid');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Invalid email format');
    });

    it('should return validation results without errors', () => {
      const result = validators.email('test@example.com');
      expect(result.isValid).toBe(true);
      expect(result.error).toBeUndefined();
    });
  });
});
