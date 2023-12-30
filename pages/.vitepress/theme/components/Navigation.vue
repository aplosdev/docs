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
                <li v-if="showGitLink">
                    <a :href="getGitLink()">
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

const getGitLink = () => {
const gitNavItem = theme.value.nav.find((navItem: { text: string; link: string }) => navItem.text === '.Repo');
  return gitNavItem ? gitNavItem.link : '#';
};

const navigation = theme.value.nav.filter((navItem: { text: string }) => navItem.text !== '.Repo');

const showGitLink = theme.value.nav.some((navItem: { text: string }) => navItem.text === '.Repo');
</script>
