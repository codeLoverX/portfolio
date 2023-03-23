/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
        },
        dark: '#222222',
      },
      keyframes: {
        flicker: {
          '0%,  100%': {
            filter:
              'drop-shadow(0 0 4px gray) ',
          },
          '65%, 69.999%': {
            filter: 'none',
          },
        },
        slideLeft: {
          '0%, 100%': {
            paddingRight: 0,
            paddingLeft: "30px",
          },
          '50%': {
            paddingLeft: 0,
            paddingRight: "30px",
          },
        },
        slideRight: {
          '0%, 100%': {
            paddingRight: "30px",
            paddingLeft: 0,
          },
          '50%': {
            paddingLeft: "30px",
            paddingRight: 0,
          },
        },
      },
      animation: {
        flicker: 'flicker 4s linear infinite',
        slideLeft: 'slideLeft 4s linear infinite',
        slideRight: 'slideRight 4s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
  purge: [
    "./src/**/*.{ts,tsx}"
  ],
};
