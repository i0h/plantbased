module.exports = {
  //-- SITE SETTINGS -----
  author: "@i0h",
  siteTitle: "🌱 Plant Based Wiki",
  siteShortTitle: "plantbased.wiki", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "A collection of facts about the animal agriculture industry.",
  siteUrl: "https://plantbased.wiki",
  siteLanguage: "en_GB",
  siteIcon: "content/favicon.ico",
  seoTitleSuffix: "Plant Based Wiki",

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },
  mediumRssFeed: "",
  shownArticles: 0,
  socialMedia: [],

  navLinks: {
    menu: [
      {
        name: "API",
        url: "https://api.plantbased.wiki",
      },
      {
        name: "GitHub",
        url: "https://github.com/i0h/plantbased",
      },
      {
        name: "Developer",
        url: "https://isaac.hulse.wtf",
      },
    ],
    button: {
      useFileName: false,
      name: "Support",
      url: "https://patreon.com/earthlinged",
    },
  },
  footerLinks: [
    {
      name: "Disclaimer",
      url: "/disclaimer",
    },
  ],
}
