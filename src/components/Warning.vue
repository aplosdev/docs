<template>
    <section id="warning">
        <h1><span class="icons">⚠ </span>Warning</h1>
        <p>{{ warningMessage }}<slot></slot></p>
    </section>
</template>

<style>
#warning {
    background-color: #ff1f1faf;
    border-radius: 10px;
    padding: 30px 20px;
    box-shadow: var(--base-shadow);
    margin: 20px 0;
    color: #ffb8b8f1;
    width: 50%;
}

#warning h1 {
    font-size: 2em;
    margin-top: 0 !important;
    font-weight: 800;
    margin-bottom: 10px;
}

#warning p {
    margin-bottom: 0 !important;
}
</style>

<script lang="ts">
export default {
  props: {
    warning: {
      type: String,
      default: "This is a warning.",
    }
  },
  computed: {
    warningMessage() {
      return this.warning;
    }
  }
};
</script>