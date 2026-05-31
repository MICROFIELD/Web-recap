import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        mist: '#eef2ff',
        coral: '#fb7185',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(99, 102, 241, 0.22)',
      },
      backgroundImage: {
        'app-gradient': 'radial-gradient(circle at top left, rgba(129, 140, 248, 0.28), transparent 30%), radial-gradient(circle at top right, rgba(45, 212, 191, 0.22), transparent 26%), linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
