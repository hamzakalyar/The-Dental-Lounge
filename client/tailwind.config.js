/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#131313',
          50: '#F5F5F5',
          100: '#E9E9E9',
          200: '#D2D2D2',
          300: '#AEAEAE',
          400: '#7F7F7F',
          500: '#131313',
          600: '#1A1A1A',
          700: '#262626',
          800: '#3D3D3D',
          900: '#111111',
        },
        accent: {
          DEFAULT: '#C19852',
          50: '#FDFBF7',
          100: '#F6EEDB',
          200: '#EADBB8',
          300: '#DEC790',
          400: '#D2B16A',
          500: '#C19852',
          600: '#A9803C',
          700: '#8A6830',
          800: '#6C5024',
          900: '#4D3819',
        },
        neutral: {
          dark: '#131313',
          mid: '#555555',
          light: '#F8F6F0',
        },
        cream: {
          DEFAULT: '#FDFCF7',
          light: '#FCFBF7',
          dark: '#F5F3E9',
        },
        surface: '#FFFFFF',
        success: '#2E7D32',
        warning: '#EF6C00',
      },
      fontFamily: {
        sans: ['"Red Hat Text"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Crimson Text"', 'Georgia', 'serif'],
        body: ['"Red Hat Text"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-md': ['3.75rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-sm': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-xl': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-lg': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        section: '6rem',
        'section-sm': '4rem',
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(43, 45, 66, 0.08)',
        'soft-lg': '0 4px 16px rgba(43, 45, 66, 0.12)',
        'soft-xl': '0 8px 24px rgba(43, 45, 66, 0.16)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
