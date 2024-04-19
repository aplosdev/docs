# Editing Configuration

If you want to customize the configuration of the project, you can follow the long list of what can you customize below. All of these are located in the `config.mts` file.

## Customizing the Theme

To customize the theme, you can change the following variables inside the `themeConfig` object in the `config.mts` file:

### Navigation Island

You can change multuple things in the navigation island:

Customizing the navigation links in your Aplós template is a straightforward process, specifically in the `nav` section:

```ts
nav: {
    links: [
        { text: "Link 1", link: "/1" },
        { text: "Link 2", link: "/2" },
        { text: "Link 3", link: "/3" },
        // ...
      ],
      git: "https://gitsomething.example/GabsEdits/gabs.eu.org", // The Link to your Git repo
      rss: "/atom.xml", // The Link to your RSS feed
    },
```

### Footer

Customizing the Footer in your Aplós template is a straightforward process, specifically in the `footer` section:

```ts
    footer: {
      copyright: true, // Show the copyright
      poweredBy: true, // Show the "Powered by Aplós & VitePress" text

      madeby: { // The "Made by" section
        show: false, // Show the "Made by" section
        name: "Gabs", // Your name
        link: "https://gabs.eu.org", // Your website
      },

      copyleft: { // The "Copyleft" section
        show: true, // Show the "Copyleft" section
        license: "MIT License", // The license you are using
        info: "https://github.com/GabsEdits/gabs.eu.org/blob/main/LICENSE", // The link to the license
      },
    },
  },
```

### Blog

Customizing the Blog in your Aplós template is a straightforward process, specifically in the `blog` section:

```ts
    blog: {
      data: {
        repo: "Foo/Bar",
        repoid: "ExaMpLe",
        categoryid: "Exa_MPle",
      },
    },
```

The `data` object contains the variables to make the comments work, for more information check [Giscus](https://giscus.app/) (the comments provider used in this project).

## Customizing Colors

To customize the accent color, you can change the following variables inside the `vite` -> `css` -> `preprocessorOptions` -> `scss` -> `additionalData`:


```ts{6}
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          $color-accent: !!YOUR_COLOR_HEX!!;
          `,
        },
      },
    },
  },
```

Replace `!!YOUR_COLOR_HEX!!` with your desired color hex code.

## Markdown Configuration

To customize the markdown configuration, you can change the following variables inside the `markdown` object in the `config.mts` file:

```ts
  markdown: {
    container: {
      warningLabel: "⚠ Warning",
      tipLabel: "Tip",
      dangerLabel: "⚠ Danger",
      infoLabel: "Info",
    },
  },
```

For more information on how to customize the markdown configuration, you can check the [VitePress documentation](https://vitepress.dev/reference/site-config#markdown).


## General Website Configuration

To customize the general website configuration, you can change the following variables inside the `head` object like on an normal HTML Webpage, here is an example:

```ts
  head: [
    ["meta", { name: "author", content: "Gabriel Cozma" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#f17755" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    [
      "meta",
      {
        name: "og:description",
        content: "Human, Front-end Developer & Open Source Contributor.",
      },
    ],
    ["meta", { name: "og:site_name", content: "Gabs | Gabriel Cozma" }],
    ["meta", { name: "twitter:title", content: "Gabs | Gabriel Cozma" }],
    [
      "meta",
      {
        name: "twitter:description",
        content: "Human, Front-end Developer & Open Source Contributor.",
      },
    ],
    ["meta", { name: "twitter:url", content: "https://gabs.eu.org" }],
  ],
```

For more information on how to customize the general website configuration, you can check the [VitePress documentation](https://vitepress.dev/reference/site-config#overview).

### Sitemap

To customize the sitemap, you can change the following variables inside the `sitemap` object in the `config.mts` file:

```ts
  sitemap: {
    hostname: "https://example.org",
  },
```