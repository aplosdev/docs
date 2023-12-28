<template>
    <section id="note">
        <h1><span class="material-symbols-rounded">
                note_stack
            </span> Note</h1>
        <p><slot></slot></p>
    </section>
</template>

<style>
#note {
    background-color: var(--color-background-second);
    border-radius: 10px;
    padding: 30px 20px;
    box-shadow: var(--base-shadow);
    margin-bottom: 20px;
    color: var(--color-text-secondary);
    width: 85%;
}

#note h1 {
    font-size: 2em;
    display: flex;
    align-items: center;
    margin-top: 0 !important;
    font-weight: 800;
    margin-bottom: 10px;
}

#note p {
    margin-bottom: 0 !important;
}

#note .material-symbols-rounded {
    margin-bottom: -1px;
    margin-right: 10px;
    font-size: 1.2em;
    line-height: -5px;
}
</style>

<script lang="ts">
export default {
    props: {
        note: {
            type: String,
            default: "This is a note.",
        }
    },
    computed: {
        noteMessage() {
            return this.note;
        }
    }
};
</script>