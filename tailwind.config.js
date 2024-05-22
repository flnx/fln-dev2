import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#f9f4ef', // or DEFAULT
            // foreground: '#11181C', // or 50 to 900 DEFAULT
            // warning: '#11181C', // or 50 to 900 DEFAULT
            // primary: {
            //   //... 50 to 900
            //   foreground: '#FFFFFF',
            //   DEFAULT: '#000',
            // },
            // ... rest of the colors
          },
        },
        // dark: {
        //   colors: {
        //     background: '#000000', // or DEFAULT
        //     foreground: '#ECEDEE', // or 50 to 900 DEFAULT
        //     primary: {
        //       //... 50 to 900
        //       foreground: '#000',
        //       DEFAULT: '#fff',
        //     },
        //   },
        //   // ... rest of the colors
        // },
      },
    }),
    require("@tailwindcss/typography"),
  ],
};
