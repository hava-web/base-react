/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'pb-h1': ['4.8rem', '5.8rem'],
        'pb-h2': ['4.0rem', '4.4rem'],
        'pb-body': ['3.2rem', '3.9rem'],
        'pb-small': ['2.4rem', '2.9rem'],
        'pb-xs': ['1.4rem', '1.7rem'],
      },
      colors: {
        'primary-color': 'var(--primary-color)',
        'second-primary-color': 'var(--second-primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'secondary-text-color': 'var(--secondary-text-color)',
        'danger-color': 'var(--danger-color)',
        'border-color': 'var(--border-color)',
        'disabled-border-color': 'var(--disabled-border-color)',
        'border-active-img-color': 'var(--border-active-img-color)',
        'active-color': 'var(--active-color)',
        'info-color': 'var(--info-color)',
        'inactive-color': 'var(--inactive-color)',
        'support-text-color': 'var(--support-text-color)',

        'bg-primary-color': 'var(--bg-primary-color)',
        'dark-bg-primary-color': 'var(--dark-bg-primary-color)',
        'lighter-bg-primary-color': 'var(--lighter-bg-primary-color)',
      },
      zIndex: {
        'z-index-retake-result': 'var(--z-index-retake-result)',
        'z-index-backdrop': 'var(--z-index-backdrop)',
        'z-index-button-on-backdrop': 'var(--z-index-button-on-backdrop)',
        'z-index-freeze-webcam-loading': 'var(--z-index-freeze-webcam-loading)',
        'z-index-loading': 'var(--z-index-loading)',
        'z-index-popup': 'var(--z-index-popup)',
        'z-index-popover': 'var(--z-index-popover)',
        'z-index-keyboard': 'var(--z-index-keyboard)',
      },
    },
    fontSize: {
      sm: ['4.8rem', '5.8rem'],
      base: ['3.2rem', '3.9rem'],
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        // html: { fontSize: '62.5%' },
      });
    }),
  ],
};
