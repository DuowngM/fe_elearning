/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rikkei: "#BC2228",
      },
    },
  },
  corePlugins: {
    // Bỏ qua việc ghi đè lên các thuộc tính mặc định của các thẻ HTML
    preflight: false,
  },
  plugins: [],
};
