/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        royal: {
          gold: '#FFD700',
          'gold-dark': '#B8860B',
          'gold-light': '#FFF8DC',
          maroon: '#8B0000',
          'maroon-dark': '#4A0000',
          'maroon-light': '#DC143C',
          cream: '#FFF8DC',
          'cream-dark': '#F5DEB3',
          bronze: '#CD7F32',
          'bronze-light': '#DAA520',
          crimson: '#DC143C',
          'crimson-dark': '#B22222',
          burgundy: '#722F37',
          'burgundy-dark': '#5D1A1D',
          amber: '#FFBF00',
          'amber-dark': '#FF8C00',
        },
        heritage: {
          50: '#FFFBF0',
          100: '#FFF8DC',
          200: '#FFE4B5',
          300: '#FFD700',
          400: '#FFC125',
          500: '#FFB000',
          600: '#E6A000',
          700: '#CC8F00',
          800: '#B8860B',
          900: '#8B6914',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#374151',
          700: '#1f2937',
          800: '#111827',
          900: '#0f172a',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'body': ['Crimson Text', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'royal-xl': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'royal-lg': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'royal-md': ['1.875rem', { lineHeight: '1.3' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, #FFD700 0%, #FFBF00 25%, #FF8C00 50%, #DC143C 75%, #8B0000 100%)',
        'royal-gradient-alt': 'linear-gradient(45deg, #8B0000 0%, #DC143C 30%, #FFD700 70%, #FFBF00 100%)',
        'heritage-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23FFD700\" fill-opacity=\"0.15\"%3E%3Cpath d=\"M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.6), transparent)',
      },
      boxShadow: {
        'royal': '0 10px 25px -5px rgba(255, 215, 0, 0.4), 0 10px 10px -5px rgba(139, 0, 0, 0.3)',
        'heritage': '0 20px 40px -10px rgba(255, 215, 0, 0.3), 0 10px 20px -5px rgba(220, 20, 60, 0.2)',
        'inner-royal': 'inset 0 2px 4px rgba(255, 215, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
