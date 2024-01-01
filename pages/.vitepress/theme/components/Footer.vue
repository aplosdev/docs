<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useData } from 'vitepress';
const currentYear = ref<string>('');

const { theme } = useData();

onMounted(() => {
    const now = new Date();
    const options = { year: 'numeric', timeZone: 'Europe/Chisinau' };
    currentYear.value = now.toLocaleDateString(undefined, options as Intl.DateTimeFormatOptions);
});
</script>

<template>
    <footer>
        <p v-if="theme.footer.madeby.show"> Made with ❤️ by <a :href="theme.footer.madeby.link" id="author">{{
            theme.footer.madeby.name }}</a></p>
        <p id="copyright" v-if="theme.footer.copyright">&copy; 2023 - {{ currentYear }} {{ theme.author }}. All rights
            reserved. </p>
        <p id="powered" v-if="theme.footer.poweredBy"> Powered by <a href="https://vitepress.dev/">Vitepress</a> and <a
                href="https://aplos.gxbs.me">Aplós</a>
        </p>
    </footer>
</template>