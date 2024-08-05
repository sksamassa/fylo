/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(217 27% 15%)",
        darkBlue2: "hsl(218 28% 13%)",
        darkBlue3: "hsl(217 27% 13%)",
        lightBlue: "hsl(176 68% 64%)",
        lightCyan: "hsl(176 68% 64%)"
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"]
      },
      backgroundImage: () => ({
        curvyDarkMode: "url(../images/bg-curvy-dark-mode.svg)",
        curvyLightMode: "url(../images/bg-curvy-light-mode.svg)",
        logoDarkMode: "url(../images/logo-dark-mode.svg)",
        logoLightMode: "url(../images/logo-light-mode.svg)"
      })
    },
  },
  variants: {
    backgroundImage: ['dark'],
  },
  plugins: [],
}
