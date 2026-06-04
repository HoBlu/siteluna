/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'franks': ['var(--font-franks-rus)', 'sans-serif'],
        'sans': ['var(--font-franks-rus)', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: '#F7F7F5',
        forest: {
          DEFAULT: '#2D4A3E',
          light: '#3D6B58',
          dark: '#1E3329',
        },
        sand: {
          DEFAULT: '#C4A77D',
          light: '#D4BC9A',
          dark: '#A68B5B',
        },
        primary: {
          DEFAULT: '#D97706', // amber-600
          hover: '#B45309', // amber-700
          light: '#F59E0B', // amber-500
        },
        secondary: {
          DEFAULT: '#F59E0B',
          hover: '#D97706',
        },
        dark: '#1F2937',
        light: '#F9FAFB',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
