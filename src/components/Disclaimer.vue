
<script lang="ts">
export default {
  props: {
    disclaimer: {
      type: String,
      default: "This is a disclaimer.",
    }
  },
  computed: {
    disclaimerMessage() {
      return this.disclaimer;
    }
  }
};
</script>

<template>
    <section id="disclaimer">
        <h1><i class="fa-solid fa-circle-exclamation"></i> Disclaimer</h1>
        <p>{{ disclaimerMessage }}</p>
    </section>
</template>

<style>
#disclaimer {
    background-color: #ff711fe6;
    border-radius: 10px;
    padding: 30px 20px;
    margin-bottom: 20px;
    box-shadow: var(--base-shadow);
    color: #422614c1;
    width: 50%;
}

#disclaimer h1 {
    font-size: 2em;
    margin-top: 0 !important;
    font-weight: 800;
    margin-bottom: 10px;
}

#disclaimer p {
    margin-bottom: 0 !important;
}
</style>