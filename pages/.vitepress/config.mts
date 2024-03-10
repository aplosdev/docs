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
    blog: {
      data: {
        repo: "GabsEdits/aplos",
        repoid: "R_kgDOK-fCGg",
        categoryid: "DIC_kwDOK-fCGs4Cd3kS",
      },
    },
      nav: {
        links: [
          { text: "Guide", link: "/guide/" },
          { text: "Static", link: "/static" },
          { text: "Demo", link: "/demo/" },
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

        copyleft: {
          show: true,
          license: "MIT License",
          info: "https://github.com/GabsEdits/aplos?tab=MIT-1-ov-file#readme",
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
          content: "https://aplos.gxbs.me/images/aplos-banner.png",
        },
      ],
      ["meta", { name: "twitter:card", content: "summary_large_image" }],
      [
        "meta",
        {
          name: "twitter:image",
          content: "https://aplos.gxbs.me/images/aplos-banner.png",
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
