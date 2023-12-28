
<template>
  <main>
    <h1>Vue.js Integration (Template)</h1>
    <p>Besides Aplós being a CSS framework, it also has a Vue.js template, like the one used by this website. It's nicely
      paired with components that help you make a website in minutes. Luckily, it's really easy to set up.</p>

    <h2>Install</h2>
    <p>Clone it locally:</p>
    <pre>git clone https://github.com/GabsEdits/aplos</pre>
    Once you are inside the cloned git folder, install the dependencies:
    <pre>npm install</pre>
    <h3>Run</h3>
    <p>Run the development server:</p>
    <pre>npm run dev</pre>
    <p>Build for production:</p>
    <pre>npm run build</pre>
    <p>Now, you are all ready to use the Vue.js Template.</p>

    <h2>Usage</h2>
    <p>Aplós has many features. Here are the basics:</p>

    <h3>Navigation</h3>
    <p>Navigation is a component used to navigate between pages. It's located in
      <code>src/components/Navigation.vue</code> and is used in <code>src/App.vue</code>. It's there by default; all you
      have to do is edit the <code>src/components/Navigation.vue</code> with the needed links, and you're done!</p>

    <h3>Warning, Disclaimers & Notes</h3>
    <p>Aplós also has special cards that you can place anywhere on your page. They are easily customizable.
      <br>Once you import it into your file, you can edit the warning like so:
    </p>
    <pre>&lt;Warning warning="Edit the warning here" /&gt;</pre>
    <p>This will show up like this:</p>
    <Warning warning="Edit the warning here" />
    <p>The same applies to others. For example, if the card name is <code>X</code>, you will use
      <code>&lt;X x="Something" /&gt;</code>.</p>
    <p>The only one that is different is the <code>&lt;ComingSoon /&gt;</code> element. Instead of
      <code>&lt;ComingSoon comingsoon="Why"/&gt;</code>, it's <code>&lt;ComingSoon reason="Why"/&gt;</code>.</p>

    <Note>
      It's not needed to write a reason for each element; they all come by default with generic text, so you can just
      write <code>&lt;Warning /&gt;</code>, and it will work.
    </Note>

    <h4>Notes</h4>
    <p>Notes are also elements in Aplós, and they act just the same as the other two cards. You write them like so:</p>
    <pre>&lt;Note&gt;Edit the note here&lt;/Note&gt;</pre>
    <p>Output:</p>
    <Note>Edit the note here</Note>

    <h3>Text Element</h3>
    <p>Aplós also comes with a built-in <code>&lt;TextElement /&gt;</code> element. The idea is to have a quick new
      section in your component, like so:</p>
    <pre>&lt;TextElement title="Title"&gt;Text&lt;/TextElement&gt;</pre>
    <p>And its output:</p>
    <pre>&lt;h2&gt;Title&lt;/h2&gt; <br>&lt;p&gt;Text&lt;/p&gt;</pre>
    <p>You can also add a pre really easily by:</p>
    <pre>&lt;TextElement title="Title" pre="Preformatted Text element"&gt;Text&lt;/TextElement&gt;</pre>
    <p>With the output being:</p>
    <pre>&lt;h2&gt;Title&lt;/h2&gt; <br>&lt;p&gt;Text&lt;/p&gt;<br>&lt;pre&gt;Preformatted Text element&lt;/pre&gt;</pre>

    <h3>Others</h3>
    <p>Everything else is Vite & Vue, so respectively, you can look at their documentation for an even better website.</p>
    <p>
      If you want to add a new page, you just create a new file inside the <code>views</code> folder, and add it to the
      <code>router.ts</code> file, and you're done!
    </p>

    <h4>Links</h4>
    <ul>
      <li>Vite: <a href="https://vite.dev">vite.dev</a></li>
      <li>Vue.js: <a href="https://vuejs.org">vuejs.org</a></li>
    </ul>
</main>
</template>
  
<script setup lang="ts">
import Warning from '@/components/Warning.vue';
import Note from '@/components/Note.vue';
</script>