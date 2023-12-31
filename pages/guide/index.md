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

```ts{3-4,22,27,35,38,43,46,50-51,53,58}
export default defineConfig({
  lang: "en-US",
  title: "Aplús",
  description: "Rethinking Web Development",

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    container: {
      warningLabel: "⚠ Warning",
      tipLabel: "Tip",
      dangerLabel: "⚠ Danger",
      infoLabel: "Info",
    },
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#5f67ee" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "og:site_name", content: "Aplús" }],
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
    ["meta", { name: "twitter:title", content: "Aplús" }],
    [
      "meta",
      {
        name: "twitter:description",
        content: "Build an website fast, and easy",
      },
    ],
    ["meta", { name: "twitter:url", content: "https://aplos" }],
  ],
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide" },
      { text: "Demo", link: "/demo" },
      {
        git: [{ link: "https://github.com/your-username/your-repo" }],
      },
    ],
  },
  sitemap: {
    hostname: "https://aplus.gxbs.me",
  },
});
```

::: info
The last lines, located at `nav` are the link in the header/navigation island
:::

With that changed, you are ready to go to the next step:

### Colors

You can change the accent color inside `/pages/.vitepress/theme/styles/color.css`, you can change everything there and make it your own! This is how the file should look:

```css{2-6,16-19}
:root {
  --color-background: #fdfff5;
  --color-background-second: #faffe0;
  --color-header: #fdfff5bd;
  --color-text: #000;
  --color-accent: #9eb036;

  --color-text-secondary: #6c6c6c;
  --color-border: #74747460;

  --base-shadow: 0px 10px 34px 0px rgba(0, 0, 0, 0.15);
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #12120e;
    --color-background-second: #21251b;
    --color-header: #12120eb5;
    --color-text: #fff;

    --base-shadow: 0px 10px 34px 0px rgb(0 0 0 / 40%);
  }
}
```

## Start Writing!

Once you've done all that, you are ready to edit you're files, you can create pages in the `pages` folder, and add them to the Navigation Island if you want.

## Deploy

To deploy you will have to follow the guide made by Vitepress: [vitepress.dev/guide/deploy](https://vitepress.dev/guide/deploy)
