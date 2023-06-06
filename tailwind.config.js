/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        "awesome-color": "#7DD3FC",
        "logo-border-sidebar": "#07a1f6",
        "logo-color": "#057cbe",
        "header-border":"#077bbd9c",
        "footer-text-color":"#f1f1f6"
      },
      spacing: {
        "sign-height": "35rem",
        "sign-width": "30rem",
        "login-height": "25rem",
        "login-width": "30rem",
        "width-delete":"23rem",
        "input-height":"64px",
        "small-input-height":"48.5px"
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
