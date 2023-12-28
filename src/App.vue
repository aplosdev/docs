<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue';
</script>

<template>
  <Navigation />

  <RouterView v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" :key="$route.path" />
    </transition>
  </RouterView>

  <Footer />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>