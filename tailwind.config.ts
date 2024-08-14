// tailwind.config.js

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    // Remove any Shadcn-specific paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Remove any plugins related to Shadcn
  ],
};
