<div class="table-small">

|    Table of Content   |
| --------------------- |
| [Photo & Video](#photo-video) |
| [Information boxes](#information-boxes) |
| [Table](#table) |
| [Small Text](#small-text) |
| [Time](#time) |



</div>

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
> >  — Leonardo da Vinci

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

[![wow](https://images.unsplash.com/photo-1495080600440-47b003ed9521?auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=2071)](https://unsplash.com/photos/aerial-photography-of-trees-in-winter-at-daytime-9rNyml9OKfI)

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

## Information boxes

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

## Table

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
| Something   | And wow     |
| I don't know| And huh     |

## Small Text

You can add small text by using the `<small>` tag.

### Input
```html
<small>Something Small</small>
```

### Output
<small>Something Small</small>

## Time

You can show a specific time by using the `<time>` tag:

#### Input
```html
<time>10:00</time>
```

#### Output
<time>10:00</time>

### Time Animation

You also can have an animation to the time like this one: <time><span>11:00</span></time>


#### Input
```html
<time><span>11:00</span></time>
```

#### Output
<time><span>11:00</span></time>

