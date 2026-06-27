/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Fraunces"', 'serif'],
        'sans': ['"Instrument Sans"', 'sans-serif'],
        'mono': ['"Fragment Mono"', 'monospace'],
      },
      colors: {
        mfm: {
          purple: '#b64188', // Logo magenta
          'purple-dark': '#2a0e20', // Very deep magenta-black for backgrounds
          'purple-mid': '#872761', // Dark magenta
          'purple-light': '#fdf0f7', // Soft pinkish white
          gold: '#d7a84a',
          'gold-light': '#f3d38a',
          'gold-pale': '#fbf4e6',
          cream: '#f9f5ef',
          ink: '#18131d',
          stone: '#6f6675',
        }
      }
    },
  },
  plugins: [],
}
