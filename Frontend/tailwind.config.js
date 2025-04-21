export default {
    darkMode: "class", // bật dark mode theo class
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#5a5db5", // màu chủ đạo xanh dương
          secondary: "#64748b", // màu phụ

          gray: {
            100: "#f5f5f5", // nền sáng
            900: "#111827", // nền tối
          },
        },
      },
    },
  };
  