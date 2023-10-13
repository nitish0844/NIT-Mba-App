/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#161616",
        royalgoldenbg: "#ffbd1b",
      },
      textColor: {
        royalgolden: "#ffbd1b",
      },
      borderColor: {
        buttoncolor: "#333333",
        royalgoldenborder: "#ffbd1b",
        primaryborder: "#161616",
      },
    },
  },
  plugins: [],
};
