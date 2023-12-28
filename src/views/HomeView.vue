
<template>
  <main>
    <h1>Aplós</h1>
    <p><strong>Aplós</strong> is a sleek, contemporary, and purposefully designed theme built on Aeolus. It provides a
      straightforward solution for creating a quick web page, offering essential features for comfortable writing while
      maintaining a sense of simplicity.

    <ul>
      <li>Lightweight and minimalistic, eliminating the need for JavaScript¹.</li>
      <li>Elegantly styled with a primary color theme for a visually pleasing experience.</li>
      <li>Mobile-friendly design with support for dark mode.</li>
      <li>Optimized for social media sharing with meta cards.</li>
      <li>Utilizes premium fonts: Inter for text and Source Code Pro for code snippets.</li>
      <li>Local development made easy with NPM integration².</li>
    </ul>
    </p>
    <blockquote>
      <p>“Simplicity is the ultimate sophistication.”
        <br> &mdash; Leonardo da Vinci
      </p>
    </blockquote>
    <Warning
      warning="This project is still in development, and there is still a long list of other thing that have to be added to the project."><b> But that doesn't mean that you can't use it ;)</b></Warning>
      <TextElement title="Vue.js Intregretion">Besides Aplós being a CSS framework, it also has Vue.js template, like the
      one used by this website.
      It's nicely pared with components that help you make website in minutes. For more information see the <router-link to="/vue">Vue.js Template Page</router-link></TextElement>

      <TextElement title="Try & Use">For using the project please check the <router-link to="/css">HTML & CSS Usage Page</router-link> or <router-link to="/vue">Aplós & Vue.js Usage Page</router-link>.</TextElement>

      <h2>Name</h2>
      <p>The name 'Aplós', pronounced as <code>/aplós/</code> <a id="pronoun" @click="playSound"><span
            class="material-symbols-rounded">volume_up</span></a> is the Romanized representation of the Greek word
        'Απλός,' which translates to 'Simple' or 'Pure and simple'. This naming choice that showcases
        the essence of the project— it's dedication to providing users with a traightforward and modern web experience.
        Aplós is centered around the philosophyRouterLink
        of simplicity, aiming to deliver an uncomplicated and contemporary solution for website creation.</p>

      <h2>Thanks ❤ & Credits️:</h2>
      <ul>
        <li class="special">David Lapshin for <a href="https://daudix.codeberg.page/duckquill">Duckquill</a>, from where I
          got inspired to create this project (and many ideas are from there)</li>
        <li>Rasmus Andersson for <a href="https://rsms.me/inter/">Inter</a>, which is the font used in <b>all</b> <i>Aeolus</i> apps.</li>
        <li>Adobe for <a href="https://adobe-fonts.github.io/source-code-pro/">Source Code Pro</a>, used for code snippets</li>
      </ul>

      <h3>Footer Notes</h3>
      <ul>
        <li>¹ JavaScript is used for the Vue.js Template, but not for the styles</li>
        <li>² NPM is only used by the Vue.js Template, the Simple HTML Template has everything locally.</li>
      </ul>
  </main>
</template>

<script setup lang="ts">
import TextElement from '@/components/TextElement.vue';
import Warning from '@/components/Warning.vue';

const playSound = () => {
  const audio = new Audio('https://s3-eu-west-1.amazonaws.com/com.idmgroup.lab.sounds.prod/el/a/d/c/adcf1a902482d8ad5ae10ea7307330e0.mp3');
  audio.play();
}
</script>