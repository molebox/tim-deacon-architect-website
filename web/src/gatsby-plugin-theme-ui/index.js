export default {
  // this enables the color modes feature
  // and is used as the name for the top-level colors object
  // initialColorMode: "light",
  // optionally enable custom properties
  // to help avoid a flash of colors on page load
  useCustomProperties: true,
  colors: {
    // these are the default light colors
    text: "#fff",
    // text: "#000",
    lightText: "#808080",
    background: "#000",

    modes: {
      // thsi is the dark color mode colors
      dark: {
        text: "#fff",
        background: "#000"
      }
    }
  },
  fonts: {
    main: "Comfortaa",
    logo: "Dust-Mites"
  },
  fontWeights: {
    body: 300,
    heading: 400,
    bold: 700
  },
  lineHeights: {
    body: "110%",
    heading: 1.125
  },
  letterSpacing: {
    body: "2px",
    text: "5px",
    logo: "11px"
  },
  // breakPoints: ['40em', '52em', '64em'],
  // mediaQueries: {
  //   small: `@media screen and (min-width: ${breakPoints[0]})`,
  //   medium: `@media screen and (min-width: ${breakPoints[1]})`,
  //   large: `@media screen and (min-width: ${breakPoints[2]})`,
  // },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
