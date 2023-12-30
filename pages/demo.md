# Header 1

Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore aperiam, asperiores doloribus earum qui id harum neque modi nostrum similique. Rerum consequatur ab eaque velit consequuntur blanditiis praesentium commodi.

## Header 2

### Header 3

- Item 1
- Item 2
- Item 3
- `Item 4`

#### Header 4

> “Simplicity is the ultimate sophistication.”
>
>  — Leonardo da Vinci

## Lorem.

```bash
git clone https://api.github.com/GabsEdits/aplos
```

```js
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```text
A long pre Lorem ipsum
dolor
sit amet
consectetur adipisicing

elit.

Amet sequi ratione ma

gni autem accusamus iusto facilis esse quam e
x, dolorum eligendi?
 Consequuntur blan
ditiis neque veniam, repudiandae ratione dol // [!code focus]
oribus vitae
tempora?
```

## Photo & Video

![wow](https://images.unsplash.com/photo-1495080600440-47b003ed9521?auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=2071)

<figcaption>Wow</figcaption>

To write a caption to a photo use the `figcaption` tag:

```html
<figcaption>Wow</figcaption>
```

<video alt="Red flower wakes up" controls="" src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"></video>

<figcaption>An "interactive example" of a video called flower.webm from the MDN Docs</figcaption>

Text can be **bold**, _italic_, or strikethrough.

Also we have [Links](/)

We also have lines.

---

## Custom Containers

 Aplus has various types of information boxes.
  
  - The `info` box provides general information.
  - The `tip` box provides helpful tips.
  - The `warning` box indicates potential issues or concerns.
  - The `danger` box warns about dangerous situations.
  - The `details` block provides additional details or explanations.

All of them can be applied using the following formula:
```md
::: name-of-the-box (info, tip, warning, danger, details)
The message you want to share
:::
```
 


**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

<kbd>⌘ Super</kbd> + <kbd>Space</kbd>

Use this when something is <mark>really important</mark>