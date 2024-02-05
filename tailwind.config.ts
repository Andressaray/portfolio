import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      openSans: ['OpenSans'],
      openSansBold: ['OpenSansBold']
    },
    extend: {
      colors: {
        primary: '#53746a',
        primaryDark: '#005B41',
        bgDark: '#232D3F',
        white: '#ffffff',
        middleWhite: '#D1D5DA',
        middleBlack: '#2D2D2D'
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden'
          },
          '100%': {
            width: '100%',
            borderLeftWidth: '0px'
          }
        },
        blink: {
          '50%': {
            borderColor: 'transparent'
          },
          '100%': {
            borderColor: '#53746a'
          }
        }
      },
      animation: {
        typing: 'typing 2s steps(20) alternate infinite, blink .7s infinite'
      }
    }
  },
  plugins: []
};
export default config;
