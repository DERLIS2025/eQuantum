import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          night: '#050A16',
          navy: '#0E1B36',
          blue: '#1D4ED8',
          ice: '#E6ECFA'
        }
      },
      boxShadow: {
        soft: '0 12px 36px rgba(2, 8, 23, 0.08)'
      }
    },
  },
  plugins: [],
};

export default config;
