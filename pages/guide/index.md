---
outline: deep
---

# Guide

Aplus, is luckly really easy to use, in fact, you can almost run a command, change title, icon and accent color and you are ready to start writing you're website.

Let's see how we can do that:

## Start

You can start by running the following commands in your terminal:

```bash
git clone https://github.com/GabsEdits/aplus
```

With that, you can go on to open your newly cloned `git` repo in your favorite IDE/Code Editor and open the `/pages/`, then `/.vitepress/` and you will see `config.mts`, that's where you will edit the following:

```ts{3,5,11,14-15,19,23-24,28-30,46,51,59,62,67,72,76}
export default defineConfig({
  lang: "en-US",
  title: "Aplós Template",
  description:
    "This is a cool template for vitepress, it has a lot of features, and it's easy to use",

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: { // Main Theme
    author: "You", // Your name
    nav: { // Navigation
      links: [ 
        { text: "Guide", link: "https://aplos.gxbs.me/guide/" },
        { text: "Demo", link: "/demo" },
        // To add more links, just add more objects to the array, with the text and link like so:
        // { text: "Text (The text for the link)", link: "Link" },
      ],
      git: "https://github.com/GabsEdits/aplos-template", // Link to the source code of your site
    },
    footer: {
      // To disable any of these, just set them to false, to enable them, set them to true
      copyright: true,
      poweredBy: true,

      // To change the text of any of these, just change the text in the quotes, if you want to disable it entirely, set show to false
      madeby: {
        show: true,
        name: "You",
        link: "#",
      },
    },
  },
  markdown: {
    container: { // The markdown cards
      warningLabel: "⚠ Warning",
      tipLabel: "Tip",
      dangerLabel: "⚠ Danger",
      infoLabel: "Info",
    },
  },
  head: [ // The head of the page, this is where you put your meta tags
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "og:site_name", content: "Template" }],
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
        content: "Aplós is a cool template for vitepress",
      },
    ],
    [
      "meta",
      { name: "twitter:url", content: "https://template.aplos.gxbs.me" },
    ],
  ],
  sitemap: { // The sitemap, for SEO
    hostname: "https://template.aplos.gxbs.me", // The hostname (domain) of your site
  },
});

```

::: info
The last lines, located at `nav` are the link in the header/navigation island
:::

With that changed, you are ready to go to the next step:

### Colors

You can change the accent color also inside `config.mts`, you can change everything there and make it your own!

```ts{2,8-12,15-19}
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
```


## Start Writing!

Once you've done all that, you are ready to edit you're files, you can create pages in the `pages` folder, and add them to the Navigation Island if you want.

## Deploy

To deploy you will have to follow the guide made by Vitepress: [vitepress.dev/guide/deploy](https://vitepress.dev/guide/deploy)
