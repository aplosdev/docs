<template>
    <main>
        <Disclaimer disclaimer="Some of this software might be outdated" />
        <Warning warning="Here" />
        <Note>Here</Note>
        <h1>Header 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore aperiam, asperiores doloribus earum qui id
            harum neque modi nostrum similique. Rerum consequatur ab eaque velit consequuntur blanditiis praesentium
            commodi.</p>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li><code>Item 4</code></li>
        </ul>
        <h4>Header 4</h4>
        <blockquote>
            <p>“Simplicity is the ultimate sophistication.”
                <br> &mdash; Leonardo da Vinci
            </p>

        </blockquote>
        <h2>Lorem.</h2>
        <pre>git clone https://api.github.com/GabsEdits/aplos</pre>
        <pre>A long pre Lorem ipsum <br>dolor <br>sit amet <br>consectetur adipisicing <br><br>elit. <br><br>Amet sequi ratione ma<br><br><br>gni autem accusamus iusto facilis esse quam e<br>x, dolorum eligendi?<br> Consequuntur blan<br>ditiis neque veniam, repudiandae ratione dol<br>oribus vitae <br>tempora?</pre>

        <h2>Photo</h2>
        <Image src="https://images.unsplash.com/photo-1495080600440-47b003ed9521?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" caption="Photo" />

        <p>Text can be <b>bold</b>, <i>italic</i>, or <del>strikethrough</del>.
            <br>Also we have <a href="/">Links</a>
        </p>
        <p>We also have lines.</p>
        <hr>
        <p>And inputs?.</p>
        <ul>
        <li><input type="checkbox" disabled> Hmm</li>
        <li><input type="checkbox"></li>
        <li><input type="checkbox" checked disabled></li>
        </ul>
    </main>
</template>

<script setup lang="ts">
import Disclaimer from '@/components/Disclaimer.vue';
import Note from '@/components/Note.vue';
import Warning from '@/components/Warning.vue';
import Image from '@/components/Image.vue';
</script>