<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <nav>
            <ul>
                <li class="h1-nav"><router-link to="/">
                        <h1>Aplós</h1>
                    </router-link></li>
                <li><router-link to="/docs/css">CSS</router-link></li>
                <li><router-link to="/docs/vue">Vue.js</router-link></li>
                <li><router-link to="/demo">Demo</router-link></li>
                <li><a href="https://github.com/GabsEdits/aplos"> <i class="fa-brands fa-github-alt"></i>
                    </a></li>
            </ul>
        </nav>
    </header>
</template>