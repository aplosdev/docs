# Guide


Aplós is a user-friendly template for Vitepress that allows you to quickly set up and customize your website. In just a few simple steps, you can configure the template to match your preferences. Let's walk through the process:

<div class="table-small">

|    Table of Content   |
| --------------------- |
| [Initialization](#initialization) |
| [Customizing Configuration](#customizing-configuration) |
| [Customizing Colors](#customizing-colors) |
| [Start Writing!](#start-writing) |
| [Automatically Update Aplós](#automatically-update-aplós) |
| [Deployment](#deployment) |

</div>

## Initialization

1. Aplós provides a convenient template that you can use to kickstart your project. To begin, click on the following link to initialize a repository with the Aplós template: Initialize Aplós Template.

2. After initializing, you have two options:
   - Clone the repository to edit the project locally: `git clone https://github.com/*your_username*/aplos`
   - Use GitHub Codespaces to edit the project online: [GitHub Codespaces](https://codespace.new)

   Make sure to replace *your_username* with your GitHub username.

3. Navigate to the `/pages/` and `/.vitepress/` folders. Locate the config.mts file for further customization.

## Customizing Configuration

Edit the config.mts file to tailor the template to your needs. Here are key sections to modify:

```ts{3,5,11,14-15,19,20,24-25,28-31,47,52,60,63,68,73,77}
export default defineConfig({
  lang: "en-US",
  title: "Aplós Template",
  description:
    "This is a cool template for vitepress, it has a lot of features, and it's easy to use",

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: { // Main Theme
    author: "Your Name",
    nav: {
      links: [ 
        { text: "Guide", link: "https://aplos.gxbs.me/guide/" },
        { text: "Demo", link: "/demo" },
        // To add more links, just add more objects to the array, with the text and link like so:
        // { text: "Text (The text for the link)", link: "Link" },
      ],
      git: "https://github.com/GabsEdits/aplos-template", // Link to the source code of your site (remove if you don't need it)
      rss: "" // Link to the RSS Feed (remove if you don't need it)
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
The `nav` section controls the links in the header/navigation island.
:::

### Customizing Colors

Adjust the accent color in the `custom.scss` file by adding:

```scss
$color-accent: *your-accent-color-hex*;
```


## Start Writing!

With the configuration set up, you can now start creating and editing your files. Utilize the `pages` folder to add new pages and customize the Navigation Island to suit your preferences.

---

## Automatically Update Aplós

To automatically update Aplós, which is a git submodule hosted on GitHub, you can use Dependabot. Follow these steps to set it up:

1. Inside your project repository that uses Aplós, create a file called `dependabot.yml` within the `.github/` folder.

2. Add the following configuration to `dependabot.yml`:

```yml
version: 2

updates:
  - package-ecosystem: gitsubmodule
    schedule:
        interval: "daily"
    directory: /
```

This configuration tells Dependabot to check for updates to the git submodule (gitsubmodule) daily and apply them to the root directory (directory: /).

By setting up Dependabot with this configuration, you ensure that Aplós stays up-to-date automatically, saving you the hassle of manually managing submodule updates.

::: tip
You can even use this on other projects that use git submodules, as it saves alot of time
:::

## Deployment

To deploy your website, follow the deployment guide provided by Vitepress: [Deploy Your VitePress Site](https://vitepress.dev/guide/deploy)

### Codeberg

In the case of you wanting to host your website on Codeberg, it's actually not that hard:

#### **Workflow**

If you have access to [Codeberg CI](https://codeberg.org/Codeberg-e.V./requests/#woodpecker-ci) take advantage of the straightforward workflow I've created. This workflow automates the process of building your website whenever you make a push, deploying the deployment of your changes:

```yml
# Exclude page pipeline to be run on "pages" branch
when:
  branch:
    exclude: pages

# Recursive cloning is used to fully clone the themes given as Git submodules
clone:
  git:
    image: woodpeckerci/plugin-git
    settings:
      recursive: true

steps:
  # Build vitepress static files
  build:
    image: alpine
    commands:
      - apk add --no-cache -X http://dl-cdn.alpinelinux.org/alpine/edge/testing pnpm git
      - pnpm install
      - pnpm run pages:build
    when:
      event: [ pull_request, push ]

  publish:
    image: bitnami/git
    # Must be set in Woodpecker configuration
    secrets: [ mail, codeberg_token ]
    commands:
      - git config --global user.email $MAIL
      - git config --global user.name "Woodpecker CI"
      - git clone -b pages https://$CODEBERG_TOKEN@codeberg.org/$CI_REPO.git source-code
      - rm -r source-code/*
      - cp -ar ./pages/.vitepress/dist/* source-code/
      - cd source-code
      - git add --all
      - git commit -m "Woodpecker CI ${CI_COMMIT_SHA} [SKIP CI]"
      - git push

    when:
      event: push
```

To seamlessly integrate with your CI process, simply configure two essential secrets in your CI Settings:
1. `mail`: This secret should contain the email associated with your account.
2. `codeberg_token`: This secret should store a token from your account, equipped with read and write access for your repositories.

#### **Installing the needed package**

If you want to optout from using a workflow or don't want to make a request: There is actually a really simple and nice NPM package that helps you deploy your project to Codeberg. The package is called `codeberg-pages` you can install by running:

```bash
npm install codeberg-pages
```

Then, make a script to run the script:

```bash
(...)
  "scripts": {
    (...)
    "pages:deploy": "codeberg-pages pages/.vitepress/dist"
  },
(...)
```

With that added you can run:

```bash
npm run pages:deploy
```

That will create a new branch called "pages" where the build output will stay.
