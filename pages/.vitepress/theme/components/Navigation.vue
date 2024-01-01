<template>
      <header>
        <nav>
            <ul>
                <li class="h1-nav">
                    <a href="/" @click="setActive('/')">
                        <h1>{{ site.title }}</h1>
                    </a>
                </li>
                <li v-for="(navItem, index) in navigation" :key="index">
                    <a :href="navItem.link" :class="{ 'active': isActive(navItem.link) }"
                        @click="setActive(navItem.link)">
                        {{ navItem.text }}
                    </a>
                </li>
                <li v-if="theme.nav.git">
                    <a :href="theme.nav.git">
                        <GitAlt />
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useData } from 'vitepress';
import GitAlt from '../icons/GitAlt.vue';

const { site, theme } = useData();

const currentPath = ref('/');
const isActive = (route: string) => currentPath.value === route;
const setActive = (route: string) => {
    currentPath.value = route;
};

onMounted(() => {
    if (typeof window !== 'undefined') {
        currentPath.value = window.location.pathname;
    }
});

const navigation = theme.value.nav.links;
</script>
