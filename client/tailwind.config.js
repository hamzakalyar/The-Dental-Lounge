/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0077B6',
          50: '#E6F4F9',
          100: '#CCE9F3',
          200: '#99D3E7',
          300: '#66BDDB',
          400: '#33A7CF',
          500: '#0077B6',
          600: '#005F92',
          700: '#00476D',
          800: '#003049',
          900: '#001824',
        },
        accent: {
          DEFAULT: '#00B4D8',
          50: '#E6F9FC',
          100: '#CCF3F9',
          200: '#99E7F3',
          300: '#66DBED',
          400: '#33CFE7',
          500: '#00B4D8',
          600: '#0090AD',
          700: '#006C82',
          800: '#004856',
          900: '#00242B',
        },
        neutral: {
          dark: '#2B2D42',
          mid: '#8D99AE',
          light: '#EDF2F4',
        },
        surface: '#FFFFFF',
        success: '#06D6A0',
        warning: '#FFD166',
      },
      fontFamily: {
        sans: ['Inter', 'Open Sans', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'system-ui', 'sans-serif'],
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
