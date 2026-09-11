/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCFB',
          100: '#FBF9F5',
          200: '#F5F1E8',
          300: '#EDE6D8',
          400: '#E0D6C2',
          DEFAULT: '#FBF9F5',
        },
        cream: {
          50: '#FDFBF7',
          100: '#F8F5EE',
          200: '#F0EAD9',
          DEFAULT: '#F7F4EE',
        },
        sand: {
          50: '#F7F5F0',
          100: '#EBE5DA',
          200: '#DDD4C4',
          300: '#C9BCAB',
          DEFAULT: '#EBE5DA',
        },
        desert: {
          gold: '#BFA15F',
          bronze: '#9C7A4E',
          ochre: '#AF8852',
          brown: '#5C5044',
          taupe: '#85786B',
          dark: '#2A2521',
        },
        charcoal: {
          50: '#66615C',
          100: '#4A4642',
          200: '#383532',
          300: '#2A2825',
          400: '#1F1E1C',
          DEFAULT: '#191817',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        editorial: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.25em',
      },
      screens: {
        'xs': '430px',
      }
    },
  },
  plugins: [],
}
