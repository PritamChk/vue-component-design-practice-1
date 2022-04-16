module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}", "./src/*.js"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        onedark: {
          primary: "#efea45",

          secondary: "#fef9c3",

          accent: "#2168c4",

          neutral: "#171821",

          "base-100": "#1c1917",

          info: "#5695C8",

          success: "#21C07B",

          warning: "#e63e70",

          error: "#EF6252",
        },
      },
    ],
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("daisyui")
  ],
};
