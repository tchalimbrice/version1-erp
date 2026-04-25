/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./projects/transport/src/**/*.{html,ts}",
    "./projects/gestion-de-ferme/src/**/*.{html,ts}",
    "./projects/page-accueil-generale/src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary, #3B82F6)',
        secondary: 'var(--color-secondary, #10B981)',
        danger: 'var(--color-danger, #EF4444)',
        background: 'var(--color-background, #FFFFFF)',
        text: 'var(--color-text, #1F2937)',
        'text-secondary': 'var(--color-text-secondary, #6B7280)',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
