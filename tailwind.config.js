const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './test/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80', 
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        secondary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        info: {
          400: '#0ea5e9',
        },
        success: {
          400: '#4ade80',
        },
        warning: {
          400: '#f59e0b',
        },
        danger: {
          400: '#f43f5e',
        },
      },
      borderRadius: {
        'form': '0.5rem',
      },
      spacing: {
        'form-padding': '0.75rem',
      }
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.collapse': {
          '@apply': {},
        },
        '.show': {
          '@apply': {},
        },
        '.formio-form': {
          '@apply max-w-3xl mx-auto p-6': {},
        },
        '.formio-component': {
          '@apply mb-4': {},
        },
        '.formio-component-textfield input, .formio-component-textarea textarea': {
          '@apply w-full px-4 py-2 border border-gray-300 rounded-form focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none': {},
        },
        '.formio-button-submit': {
          '@apply px-6 py-2 bg-success text-white rounded-form hover:bg-success/90 transition-colors': {},
        },
        '.formio-button-cancel': {
          '@apply px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-form hover:bg-gray-50 transition-colors': {},
        },
        '.formio-form-title': {
          '@apply text-2xl font-semibold mb-6 text-gray-900': {},
        },
        '.formio-label': {
          '@apply block text-sm font-medium text-gray-700 mb-1': {},
        },
        '.btn': {
          '@apply inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2': {},
        },
        '.btn-xxs': {
          '@apply px-2 py-1 text-xs': {},
        },
        '.btn-sm': {
          '@apply px-3 py-1.5 text-sm': {},
        },
        '.btn-lg': {
          '@apply px-6 py-3 text-base': {},
        },
        
        // Button variants
        '.btn-primary': {
          '@apply bg-primary-400 text-white hover:bg-primary-500 focus:ring-primary-400': {},
        },
        '.btn-secondary': {
          '@apply bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-400': {},
        },
        '.btn-default': {
          '@apply bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-400': {},
        },
        '.btn-danger': {
          '@apply bg-red-500 text-white hover:bg-red-600 focus:ring-red-400': {},
        },
        '.btn-success': {
          '@apply bg-success text-white hover:bg-success/90 focus:ring-success': {},
        },
        '.btn-warning': {
          '@apply bg-yellow-400 text-white hover:bg-yellow-500 focus:ring-yellow-400': {},
        },
        '.btn-info': {
          '@apply bg-blue-400 text-white hover:bg-blue-500 focus:ring-blue-400': {},
        },
              // Disabled state
              '.btn[disabled]': {
                '@apply opacity-50 cursor-not-allowed pointer-events-none': {},
              },
              
              // Button group styles
              '.btn-group': {
                '@apply inline-flex rounded-lg': {},
                '> .btn': {
                  '@apply rounded-none': {},
                  '&:first-child': {
                    '@apply rounded-l-lg': {},
                  },
                  '&:last-child': {
            '@apply rounded-r-lg': {},
          },
        },
      } 
      })
    }),
  ],
}
