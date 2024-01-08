---
home: true
---

**Aplós** is a sleek, contemporary, and purposefully designed VitePress theme & template. It provides a straightforward solution for creating a quick web page, offering essential features for comfortable writing while maintaining a sense of simplicity.

- Lightweight and minimalistic, using VitePress.
- Elegantly styled with a primary color theme for a visually pleasing experience.
- Mobile-friendly design with support for dark mode.
- Optimized for social media sharing with meta cards.
- Utilizes premium fonts: Inter for text, Source Code Pro for code snippets and Noto (Color) Emoji for emojis.
- Local development made easy with NPM/PNPM integration.

> “Simplicity is the ultimate sophistication.”\
> — Leonardo da Vinci

::: info Announcement
The project has just reached Stable :tada:\
Check out the blog I made about the journey in developing this project here: [blog.gabs.eu.org/posts/behind-aplós](https://blog.gabs.eu.org/posts/behind-aplós.html)
:::

## Name

The name 'Aplós', pronounced as `/aplóus/` <button class="mono-emoji" @click="playSound">🔊</button> is the Romanized representation of the Greek word 'Απλός,' which translates to 'Simple' or 'Pure and simple'. This naming choice that showcases the essence of the project— it's dedication to providing users with a traightforward and modern web experience. Aplós is centered around the philosophy of simplicity, aiming to deliver an uncomplicated and contemporary solution for website creation.

## Try & Use

To try and use this project you can check the [Guide](/guide/) I made.

## Credits

Aplós whouldn't be possible without the following projects:

- [Duckquill](https://daudix.codeberg.page/duckquill), from where I got inspired to create this project (and many ideas are from there)
- [Inter](https://rsms.me/inter/), which is the font used in **all** _Aeolus_ apps.
- [Source Code Pro](https://adobe-fonts.github.io/source-code-pro/), used for code snippets.
- [Noto Color Emoji](https://fonts.google.com/noto/specimen/Noto+Color+Emoji), used for all emojis.
- [VitePress](https://vitepress.dev), which is used to power Aplós
- Everyone that supported the project

## Project

```md
- Aplos version 1.0.0 (https://aplos.gxbs.me/)
- Copyright 2023-2024 Gabriel "Gabs" Cozma
- Licensed under [MIT](https://github.com/GabsEdits/aplos/blob/main/LICENSE)
- Based on [VitePress](https://vitepress.dev) & insipred by [Duckquill](https://daudix.codeberg.page/duckquill)
- A part of the [Aeolus](https://gabs.eu.org/aeolus) family
```

<script setup lang="ts">
    const playSound = () => {
  const audio = new Audio('https://s3-eu-west-1.amazonaws.com/com.idmgroup.lab.sounds.prod/el/a/d/c/adcf1a902482d8ad5ae10ea7307330e0.mp3');
  audio.play();
}
    </script>
