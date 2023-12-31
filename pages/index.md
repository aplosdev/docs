---
home: true
---

**Aplós** is a sleek, contemporary, and purposefully designed theme built on Aeolus. It provides a straightforward solution for creating a quick web page, offering essential features for comfortable writing while maintaining a sense of simplicity.

- Lightweight and minimalistic, eliminating the need for JavaScript.
- Elegantly styled with a primary color theme for a visually pleasing experience.
- Mobile-friendly design with support for dark mode.
- Optimized for social media sharing with meta cards.
- Utilizes premium fonts: Inter for text and Source Code Pro for code snippets.
- Local development made easy with NPM integration.

> “Simplicity is the ultimate sophistication.”\
> — Leonardo da Vinci

::: warning
This project is still in development, and there is still a long list of other thing that have to be added to the project.
But that doesn't mean that you can't use it :wink:
:::

## Name

The name 'Aplós', pronounced as `/aplóus/` <span class="mono-emoji" @click="playSound">🔊</span> is the Romanized representation of the Greek word 'Απλός,' which translates to 'Simple' or 'Pure and simple'. This naming choice that showcases the essence of the project— it's dedication to providing users with a traightforward and modern web experience. Aplós is centered around the philosophy of simplicity, aiming to deliver an uncomplicated and contemporary solution for website creation.

## Try & Use

To try and use this project you can check the [Guide](/guide/) I made.

## Project
```md
* Aplos version 0.8.9private  (https://aplos.gxbs.me/)
* Copyright 2023 Gabriel "Gabs" Cozma
* Licensed under [MIT](https://github.com/GabsEdits/aplos/src/branch/main/LICENSE)
* Based on [Vitepress](https://vitepress.dev) & insipred by [Duckquill](https://daudix.codeberg.page/duckquill)
* A part of the [Aeolus](https://gabs.eu.org/aeolus) family
```

<script setup lang="ts">
    const playSound = () => {
  const audio = new Audio('https://s3-eu-west-1.amazonaws.com/com.idmgroup.lab.sounds.prod/el/a/d/c/adcf1a902482d8ad5ae10ea7307330e0.mp3');
  audio.play();
}
    </script>
