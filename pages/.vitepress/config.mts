import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Aplós",
  description:
    "Aplós is a sleek, contemporary, and purposefully designed theme and template",

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    author: "Gabriel Cozma/Gabs",
    colorScheme: {
      accent: "#c1b134",
      shadow: "0px 10px 34px 0px rgba(0, 0, 0, 0.15)",
      textsecondary: "#6c6c6c",
      border: "#75757560",

      light: {
        "background": "#faf8ed",
        "background-second": "#f0eee1",
        "background-mute": "#f1edd0",
        "header": "faf8edbb",
        "text": "#2c2c2c",
      },
      dark: {
        "background": "#141414",
        "background-second": "#1a1a1a",
        "background-mute": "#1e1e1e",
        "header": "#141414bb",
        "text": "#e3e3e3",
      },
    },
    nav: {
      links: [
        { text: "Guide", link: "/guide/" },
        { text: "CSS", link: "/css" },
        { text: "Demo", link: "/demo" },
      ],
      git: "https://github.com/GabsEdits/aplos",
    },
    footer: {
      copyright: true,
      poweredBy: true,

      madeby: {
        show: true,
        name: "Gabs",
        link: "https://gxbs.me",
      },
    },
  },

  markdown: {
    container: {
      warningLabel: "⚠ Warning",
      tipLabel: "Tip",
      dangerLabel: "⚠ Danger",
      infoLabel: "Info",
    },
  },
  head: [
    ["meta", { name: "author", content: "Gabriel Cozma/Gabs" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#ff3e00" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "og:site_name", content: "Aplós" }],
    [
      "meta",
      {
        name: "og:image",
        content: "https://aplos.gxbs.me/images/aplos-banner.jpg",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://aplos.gxbs.me/images/aplos-banner.jpg",
      },
    ],
    ["meta", { name: "twitter:title", content: "Aplós" }],
    [
      "meta",
      {
        name: "twitter:description",
        content: "Build an website fast, and easy",
      },
    ],
    ["meta", { name: "twitter:url", content: "https://aplos.gxbs.me" }],
  ],
  sitemap: {
    hostname: "https://aplos.gxbs.me",
  },
});
