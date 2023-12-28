
<script setup lang="ts">
import Note from '@/components/Note.vue';
</script>

<template>
  <main>
    <Note>This project is still work in progress, many new and better thing will be added</Note>
    <h1>HTML & CSS Template</h1>
    <p>Besides Aplós being a CSS framework, it also has Vue.js template, like the one used by this website. It's nicely
      pared with components that help you make website in minutes. Luckly it's really easy to setup</p>
    <h2>Install.</h2>
    <p>Clone it locally</p>
    <pre>git clone https://github.com/GabsEdits/aplos</pre>
    Once you cloned, start editing the <code>index.html</code> file, and you're done!:
    <h2>Usage.</h2>
    <p>First, right inside the <code>index.html</code> file, you have a style, inside that you have the color pallate,
      that you can easily change, up next edit all the text inside it, or add elements, you can see them in the
      <RouterLink to="/demo">Demo Page</RouterLink>, with that, for example if you want the warning element, you just
      create a section, and add the <code>id</code> "warning", inside it and the <code>&lt;h1 /&gt;</code> and the <code>&lt;p /&gt;</code>.
      It's that easy.
    </p>
  </main>
</template>