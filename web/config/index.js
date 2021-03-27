module.exports = {
  //-- SITE SETTINGS -----
  author: "@i0h",
  siteTitle: "🌱 Plant Based Wiki",
  siteShortTitle: "plantbased.wiki", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "A collection of facts about the animal agriculture industry.",
  siteUrl: "https://plantbased.wiki",
  siteLanguage: "en_GB",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Plant Based Wiki", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"
  useCookieBar: false, // If you use Google Analytics and want to be GDPR-compliant, set it to true
  googleAnalyticsTrackingId: "", // e.g. UA-XXXXXX-X

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

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed: "",
  // rssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss",

  shownArticles: 0,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance, E-Mail
  socialMedia: [
    // {
    //   name: "Linkedin",
    //   url: "https://www.linkedin.com/in/konstantin-muenster/",
    // },
    // {
    //   name: "Medium",
    //   url: "https://konstantinmuenster.medium.com/",
    // },
    // {
    //   name: "Github",
    //   url:
    //     "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal",
    // },
    // {
    //   name: "Behance",
    //   url: "https://www.behance.net/konstanmnster",
    // },
    // {
    //   name: "Mail",
    //   url: "mailto:mail@konstantin.digital",
    // },
  ],

  //-- NAVIGATION SETTINGS -----
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
      url: "/privacy",
    },
    {
      name: "Imprint",
      url: "/imprint",
    },
  ],
}
