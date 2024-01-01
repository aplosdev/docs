<script setup lang="ts">
import GitAlt from '../icons/GitAlt.vue';
import { ref, onMounted } from 'vue';

const currentYear = ref<string>('');

onMounted(() => {
    const now = new Date();
    const options = { year: 'numeric', timeZone: 'Europe/Chisinau' };
    currentYear.value = now.toLocaleDateString(undefined, options as Intl.DateTimeFormatOptions);
});
</script>

<template>
    <footer>
        <p> Made with ❤️ by <a href="https://gxbs.me" id="author">Gabs</a></p>
        <p id="copyright"> © 2023 - {{ currentYear }} Gabriel Cozma/Gabs. All rights reserved. </p>
        <p id="powered"> Powered by <a href="https://vitepress.dev/">Vitepress</a> and <a
                href="https://gabs.eu.org/aeolus">Aeolus</a>
        </p>
    </footer>
</template>