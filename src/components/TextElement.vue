
<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    pre: {
      type: String,
      default: "",
    }
  },
  computed: {
    titleMessage() {
      return this.title;
    },
    preMessage() {
      return this.pre;
    }
  }
};
</script>

<template>
    <h2 v-if="titleMessage">{{ titleMessage }}</h2>
    <p><slot></slot></p>
    <pre v-if="preMessage">{{ preMessage }}</pre>
</template>