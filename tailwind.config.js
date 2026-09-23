/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyprus: {
          50: '#e6f3f2',
          100: '#bce2df',
          200: '#8ccfca',
          300: '#5abcb4',
          400: '#33aca3',
          500: '#004741', // CYPRUS
          600: '#003e39',
          700: '#00332f',
          800: '#002926',
          900: '#001e1c',
          950: '#001211',
          DEFAULT: '#004741',
        },
        sand: {
          50: '#fcfbf9',
          100: '#F0EDE4', // SAND
          200: '#e1dbcd',
          300: '#cfc6b2',
          400: '#baaebd',
          500: '#9e917d',
          600: '#807360',
          700: '#645849',
          800: '#4a4136',
          900: '#312b24',
          950: '#1b1713',
          DEFAULT: '#F0EDE4',
        },
        doca: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fb',
          400: '#36abf7',
          500: '#0c8fe9',
          600: '#0171c7',
          700: '#025aa1',
          800: '#064d85',
          900: '#0b416f',
          950: '#072a4a',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        peach: {
          50: '#fff8f6',
          100: '#ffede7',
          200: '#ffdcd2',
          300: '#FFD2C2',
          400: '#f9b49f',
          500: '#ea8e73',
          600: '#d36a4d',
          DEFAULT: '#FFD2C2',
        },
        sage: {
          50: '#f2f7f7',
          100: '#e2eded',
          200: '#c5dbdb',
          300: '#9ec2c1',
          400: '#789A99',
          500: '#5a807f',
          600: '#466766',
          700: '#3b5453',
          800: '#334645',
          900: '#2d3d3c',
          950: '#182424',
          DEFAULT: '#789A99',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
