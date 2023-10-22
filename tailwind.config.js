/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abel: ["Manrope", "serif"],
      },
      backgroundImage: () => ({
        "header-desktop": "url('/assets/images/header-bg.svg')",
        "header-tablet": "url('/assets/images/tablet-bg.svg')",
        "header-mobile": "url('/assets/images/mobile-bg.svg')",
        "hero-desktop": "url('/assets/images/hero-bg.svg')",
        "hero-tablet": "url('/assets/images/hero-tablet.svg')",
        "hero-mobile": "url('/assets/images/hero-mobile.svg')",
      }),
    },
  },
  plugins: [],
};
