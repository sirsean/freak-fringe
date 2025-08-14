import { type Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Cyber-orange palette
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ff9500', // Main cyber-orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        // Yellow highlights/accents
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Main yellow accent
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        // Bright cyan/turquoise colors
        cyber: {
          300: '#5cfaff',
          400: '#2ff1ff',
          500: '#00e5ff',
          600: '#00c2d6',
        },
        // Surface colors with orange tint
        surface: {
          50: '#fffaf8',
          100: '#fef2ee',
          200: '#fde2d3',
          300: '#fbc8a8',
          400: '#f7a472',
          500: '#f17a3c',
          600: '#e85a1f',
          700: '#c9471a',
          800: '#a03c1b',
          900: '#83341c',
          950: '#471a0c',
        },
      },
      fontFamily: {
        retro: ['"Press Start 2P"', 'cursive'],
      },
      boxShadow: {
        // Neon glow style shadows
        neon: '0 0 5px rgba(255, 149, 0, 0.6), 0 0 10px rgba(255, 149, 0, 0.5), 0 0 20px rgba(255, 149, 0, 0.4)',
        'neon-blue': '0 0 5px rgba(59, 130, 246, 0.7), 0 0 10px rgba(59, 130, 246, 0.6), 0 0 20px rgba(59, 130, 246, 0.5)',
        'neon-pink': '0 0 5px rgba(236, 72, 153, 0.7), 0 0 10px rgba(236, 72, 153, 0.6), 0 0 20px rgba(236, 72, 153, 0.5)',
        'neon-green': '0 0 5px rgba(34, 197, 94, 0.7), 0 0 10px rgba(34, 197, 94, 0.6), 0 0 20px rgba(34, 197, 94, 0.5)',
        'neon-cyan': '0 0 5px rgba(0, 229, 255, 0.7), 0 0 10px rgba(0, 229, 255, 0.6), 0 0 20px rgba(0, 229, 255, 0.5)',
      },
    },
  },
  plugins: [
    typography,
  ],
}

export default config
