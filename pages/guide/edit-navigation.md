# Edit Navigation Island

Customizing the navigation links in your Aplós template is a straightforward process within the `config.mts` file, specifically in the `nav` section:

```ts{6-8,15}
// config.mts

export default defineConfig({
  // ... (existing configuration)
  themeConfig: {
    nav: [
      { text: "Something", link: "/something" }, // Customize the First Link
      { text: "Some-where/thing", link: "/somewhere" }, // Customize the First Link
      // ...

      /* 
      Add more links to the navbar by copying and pasting the line above. 
      Modify the text and link accordingly.
      */

      {
        git: [{ link: "https://codebegithubrg.org/your-username/your-repo" }], // The Link to your Git repo
      },
    ],
  },
  // ...
});
```
