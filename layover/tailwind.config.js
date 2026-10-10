/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // Blue-600
        secondary: '#0f172a', // Slate-900
        accent: '#f59e0b', // Amber-500
        success: '#10b981', // Emerald-500
        warning: '#f59e0b', // Amber-500
        danger: '#ef4444', // Red-500
      }
    },
  },
  plugins: [],
}
