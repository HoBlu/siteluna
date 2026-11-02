/** @type {import('tailwindcss').Config} */
// Тема «Луна №50»: тёплый светло-серый фон, графитовый текст, приглушённый оливковый акцент.
// Яркие стандартные цвета Tailwind (purple, pink, blue и т.д.), которые использовались в старых
// компонентах, переопределены на спокойные тона — так весь сайт в одной гамме без переписывания разметки.
const olive = { 50: '#F4F5EF', 100: '#E7EADD', 200: '#D2D7C1', 300: '#B5BE9C', 400: '#97A377', 500: '#7D8A5D', 600: '#6F7F52', 700: '#5A6843', 800: '#475335', 900: '#36402A', 950: '#232A1B' };
const sand = { 50: '#FAF6EF', 100: '#F2E9DA', 200: '#E6D5B8', 300: '#D6BC92', 400: '#C5A170', 500: '#B08957', 600: '#967148', 700: '#785A3A', 800: '#5E472F', 900: '#4A3826', 950: '#2F2318' };
const warm = { 50: '#F7F6F3', 100: '#EFEDE8', 200: '#E2DFD8', 300: '#CBC7BE', 400: '#A29E94', 500: '#7E7A71', 600: '#615E56', 700: '#4A4842', 800: '#34332F', 900: '#2A2A28', 950: '#1C1C1A' };

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        franks: ['Montserrat', 'sans-serif'],
      },
      colors: {
        olive, sand, warm,
        // акцентные цвета старых компонентов → олива
        purple: olive, violet: olive, fuchsia: olive, pink: olive, blue: olive, indigo: olive,
        sky: olive, cyan: olive, teal: olive, emerald: olive, green: olive, lime: olive,
        // тёплые → песок
        amber: sand, orange: sand, yellow: sand, rose: sand, red: sand,
        // серые → тёплые нейтральные
        gray: warm, slate: warm, stone: warm, zinc: warm, neutral: warm,
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        cream: '#F3F1EC',
        forest: { DEFAULT: '#6F7F52', light: '#7D8A5D', dark: '#5A6843' },
        primary: { DEFAULT: '#6F7F52', hover: '#5A6843', light: '#97A377' },
        secondary: { DEFAULT: '#B08957', hover: '#967148' },
        sandy: '#B08957',
        dark: '#2A2A28',
        light: '#F7F6F3',
      },
      borderRadius: { '4xl': '2rem' },
      animation: { float: 'float 6s ease-in-out infinite' },
      keyframes: { float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } } },
    },
  },
  plugins: [],
};
