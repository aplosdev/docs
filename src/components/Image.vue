<template>
    <div class="image">
      <img :src="src" :alt="caption" />
      <p v-if="caption">{{ caption }}</p>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      src: {
        type: String,
        required: true,
      },
      caption: {
        type: String,
        default: '',
      },
    },
  };
  </script>

  <style>
.image p {
    text-align: center;
    font-size: 0.8em;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 0;
    color: var(--color-text-secondary);
}

.image {
    margin: 20px 0;
}
</style>