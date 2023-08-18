/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        primary: '0px 2px 4px 0px rgba(0, 0, 0, 0.12)',
        'primary-dark': '0px 2px 4px 0px rgba(255, 255, 255, 0.12)',

        secondary: '1px 5px 20px 1px rgba(0, 0, 0, 0.12)',
        'secondary-dark': '1px 5px 20px 1px rgba(255, 255, 255, 0.12)',
      },
    },
    screens: {
      xs: '444px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
