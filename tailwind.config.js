/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'smk-navy': '#001c3d', // Biru gelap untuk header sekolah
        'smk-yellow': '#facc15', // Kuning logo
        'smk-bg': '#fbf9f0', // Krem background tipis sesuai gambar
        'smk-blue-text': '#001d3d' // Biru tua judul
      }
    },
  },
  plugins: [],
}