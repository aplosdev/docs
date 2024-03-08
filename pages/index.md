---
pageClass: home
---

# Aplós {.center #title}

A sleek, contemporary, and purposefully designed VitePress theme & template. It provides a straightforward solution for creating a quick web page, offering essential features for comfortable writing while maintaining a sense of simplicity. {.center #desc}

## Features

- Lightweight and minimalistic, using VitePress.
- Elegantly styled with a primary color theme for a visually pleasing experience.
- Mobile-friendly design with support for dark mode.
- Optimized for social media sharing with meta cards.
- Utilizes premium fonts: Inter for text and Source Code Pro for code snippets.
- Local development made easy with NPM/PNPM integration.
- Every asset is local, nothing is pulled from the internet.


::: details Intrested in the journey behind it?
Check out the blog I made about the journey in developing this project here at https://gabs.eu.org/blog/posts/behind-aplós
:::


<aside>

## Name

'*Aplós*', pronounced as `/aplós/` <button class="mono-emoji" @click="playSound">🔊</button> is the Romanized representation of the Greek word 'Απλός,' which translates to 'Simple'. This naming choice that showcases the essence of the project— it's dedication to providing users with a straightforward and modern web experience. Aplós is centered around the philosophy of simplicity, aiming to deliver an uncomplicated and contemporary solution for website creation.
</aside>

## Try & Use

To try and use this project you can check the [Guide](/guide/) I made.

## Credits & Thanks to

Aplós whouldn't be possible without the following projects:

- [Duckquill](https://daudix.codeberg.page/duckquill), from where I got inspired to create this project (and many ideas are from there)
- [Inter](https://rsms.me/inter/), which is the font used in **all** _Aeolus_ apps.
- [Source Code Pro](https://adobe-fonts.github.io/source-code-pro/), used for code snippets.
- [VitePress](https://vitepress.dev), which is used to power Aplós.
- Everyone that supported the project.

<script setup lang="ts">
    const playSound = () => {
      const audio = new Audio('https://s3-eu-west-1.amazonaws.com/com.idmgroup.lab.sounds.prod/el/a/d/c/adcf1a902482d8ad5ae10ea7307330e0.mp3');
      audio.play();
    }
</script>
