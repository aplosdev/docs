<script setup lang="ts">
import { useData } from 'vitepress';
import { Content } from 'vitepress';
import NotFound from './components/404View.vue';
import SiteFooter from './components/Footer.vue';
import Navigation from './components/Navigation.vue';

const { site, frontmatter, page, theme } = useData()

/*
const generateCSS = () => {

  let cssString = ":root {\n";

  const processObject = (obj: Record<string, any>, prefix = '--color') => {
    for (const [key, value] of Object.entries(obj)) {
      const variableName = `${prefix}-${key}`;
      if (typeof value === 'object') {
        processObject(value, variableName);
      } else {
        cssString += `  ${variableName}: ${value};\n`;
      }
    }
  };

  if (theme.value && theme.value.colorScheme) {
    processObject({ 'color-accent': theme.value.colorScheme.accent, 'base-shadow': theme.value.colorScheme.shadow, 'color-text-secondary': theme.value.colorScheme.textsecondary, 'color-border': theme.value.colorScheme.border }, '-');

    processObject(theme.value.colorScheme.light);

    cssString += "}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n";

    processObject(theme.value.colorScheme.dark);

    cssString += "  }\n}";

    if (typeof document !== 'undefined') {
      const style = document.createElement("style");
      style.textContent = cssString;
      document.head.appendChild(style);
    }
  } else {
    console.error('theme.value or theme.value.colorScheme is undefined');
  }
};

generateCSS();
*/
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
