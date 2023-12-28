<script lang="ts">
export default {
  props: {
    reason: {
      type: String,
      default: "This website is still in development, stay tuned to release this page!",
    }
  },
  computed: {
    reasonMessage() {
      return this.reason;
    }
  }
};
</script>

<template>
    <section id="coming-soon">
        <h1>Coming Soon</h1>
        <p>{{ reasonMessage }}</p>
    </section>
</template>

<style>
    #coming-soon {
        background-color: #ffec1faf;
        border-radius: 10px;
        padding: 30px 20px;
        box-shadow: var(--base-shadow);
        margin-bottom: 20px;
        color: #291d00f1;
        width: 100%;
        text-align: center;
    }

    #coming-soon h1 {
        font-size: 2em;
        margin-top: 0 !important;
        font-weight: 800;
        margin-bottom: 0 !important;
    }
    
    #coming-soon p {
        margin-top: 0 !important;
    }
</style>