# Edit Navigation Island

You can edit the navigation links quickly inside the `config.mts` file, section `nav`:

```ts{5-7,14}
export default defineConfig({
  // ...
  themeConfig: {
    nav: [
      { text: "Something", link: "/something" }, // First Link
      { text: "Some-where/thing", link: "/somewhere" }, // Second Link
      // ...

      /* 
      You can also add multiple links in the navbar, just copy the 
      line above and paste it below and change the text and link. 
      */
      {
        git: [{ link: "https://github.com/your-username/your-repo" }], // The Link to your repo
      },
    ],
  },
  // ...
});
```
