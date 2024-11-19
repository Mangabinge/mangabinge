### Understanding CSS Flexbox

Flexbox is a powerful layout tool designed for aligning and distributing items within a container, even when their sizes are dynamic. Let’s start from the basics and gradually move to advanced concepts.

---

### 1. **Basic Setup of Flexbox**

To get started, you need a container element with `display: flex`.

#### Code Example:

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<style>
  .container {
    display: flex;
  }
  .item {
    background-color: lightblue;
    padding: 20px;
    margin: 10px;
  }
</style>
```

Here, `display: flex` turns the container into a flex container, and its children become flex items.

---

### 2. **Direction with `flex-direction`**

Defines the direction of the main axis.

- `row` (default): Items align horizontally.
- `column`: Items align vertically.
- `row-reverse` or `column-reverse`: Reverses the order.

#### Code Example:

```html
<style>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>
```

---

### 3. **Alignment with `justify-content`**

Controls alignment along the main axis.

- `flex-start` (default): Items align at the start.
- `center`: Items align at the center.
- `flex-end`: Items align at the end.
- `space-between`: Space between items.
- `space-around`: Space around items.
- `space-evenly`: Equal space around items.

#### Code Example:

```html
<style>
  .container {
    display: flex;
    justify-content: space-around;
  }
</style>
```

---

### 4. **Alignment with `align-items`**

Controls alignment along the cross axis.

- `stretch` (default): Items stretch to fill the container.
- `flex-start`: Aligns items at the start.
- `flex-end`: Aligns items at the end.
- `center`: Centers items.
- `baseline`: Aligns items based on their text baseline.

#### Code Example:

```html
<style>
  .container {
    display: flex;
    align-items: center;
  }
</style>
```

---

### 5. **Wrapping with `flex-wrap`**

By default, flex items stay in a single line. To allow wrapping:

- `nowrap` (default): Items don't wrap.
- `wrap`: Items wrap to the next line.
- `wrap-reverse`: Wrap in reverse order.

#### Code Example:

```html
<style>
  .container {
    display: flex;
    flex-wrap: wrap;
  }
</style>
```

---

### 6. **Combining Alignment with `align-content`**

Aligns multiple rows within the container when using `flex-wrap`.

- `flex-start`, `center`, `flex-end`
- `space-between`, `space-around`, `space-evenly`

#### Code Example:

```html
<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
  }
</style>
```

---

### 7. **Sizing Items with `flex`**

The `flex` shorthand combines three properties: `flex-grow`, `flex-shrink`, and `flex-basis`.

- **`flex-grow`**: Defines how much an item can grow.
- **`flex-shrink`**: Defines how much an item can shrink.
- **`flex-basis`**: Defines the initial size of an item.

#### Code Example:

```html
<style>
  .item {
    flex: 1; /* Grow equally */
  }
  .item:nth-child(2) {
    flex: 2; /* Grow twice as much as others */
  }
</style>
```

---

### 8. **Advanced Use Cases**

#### a) **Nested Flex Containers**

Flex containers can contain nested flex layouts.

```html
<div class="outer">
  <div class="inner">
    <div class="nested">A</div>
    <div class="nested">B</div>
  </div>
</div>

<style>
  .outer {
    display: flex;
    justify-content: center;
  }
  .inner {
    display: flex;
    flex-direction: column;
  }
</style>
```

#### b) **Fixed and Flexible Elements**

```html
<div class="container">
  <div class="fixed">Fixed</div>
  <div class="flexible">Flexible</div>
</div>

<style>
  .fixed {
    width: 100px;
  }
  .flexible {
    flex: 1;
  }
</style>
```

---

### 9. **Practical Example: Navigation Bar**

```html
<nav class="navbar">
  <div class="logo">Logo</div>
  <div class="menu">
    <div>Home</div>
    <div>About</div>
    <div>Contact</div>
  </div>
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #333;
    color: white;
  }
  .menu {
    display: flex;
    gap: 20px;
  }
</style>
```
