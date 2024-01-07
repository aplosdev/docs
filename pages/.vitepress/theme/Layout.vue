<script setup lang="ts">
import { useData } from 'vitepress';
import { Content } from 'vitepress';
import NotFound from './components/404View.vue';
import SiteFooter from './components/Footer.vue';
import Navigation from './components/Navigation.vue';

const { site, frontmatter, page, theme } = useData()
</script>

<template>
  <Navigation />
  <main>
    <div v-if="frontmatter.home">
      <h1>{{ site.title }}</h1>
      <Content />
    </div>
    <div v-else>
      <Content />
    </div>
    <NotFound v-if="page.isNotFound" />
  </main>
  <SiteFooter />
</template>
