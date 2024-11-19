### Refresher on Combining Grid and Flexbox

Using **Grid and Flexbox together** can result in highly flexible and powerful layouts. Below is a refresher with code examples starting from simple use cases and gradually moving to advanced ones.

---

### 1. **Simple Grid with Flexbox Item**

You can define a grid layout and use Flexbox inside grid items.

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">
    <div class="flex-container">
      <div>Flex 1</div>
      <div>Flex 2</div>
    </div>
  </div>
  <div class="grid-item">3</div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .grid-item {
    background-color: lightblue;
    padding: 20px;
  }

  .flex-container {
    display: flex;
    gap: 10px;
  }
</style>
```

---

### 2. **Flexbox for Grid Items Alignment**

Use Flexbox to align or justify content within grid items.

```html
<div class="grid-container">
  <div class="grid-item flex-container">Centered</div>
  <div class="grid-item flex-container">Aligned Start</div>
  <div class="grid-item flex-container">Aligned End</div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .grid-item {
    background-color: lightcoral;
    height: 100px;
  }

  .flex-container {
    display: flex;
    justify-content: center; /* Can use flex-start, flex-end */
    align-items: center; /* Vertically align */
  }
</style>
```

---

### 3. **Nested Flexbox in Grid**

Each grid item has its own Flexbox layout.

```html
<div class="grid-container">
  <div class="grid-item">
    <div class="flex-container">
      <div>Item 1</div>
      <div>Item 2</div>
    </div>
  </div>
  <div class="grid-item">
    <div class="flex-container">
      <div>Item A</div>
      <div>Item B</div>
    </div>
  </div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .grid-item {
    background-color: lightseagreen;
    padding: 10px;
  }

  .flex-container {
    display: flex;
    gap: 5px;
  }
</style>
```

---

### 4. **Grid Inside Flexbox**

Grid used as an item inside a Flexbox layout.

```html
<div class="flex-container">
  <div class="flex-item">Flex Item 1</div>
  <div class="grid-container">
    <div class="grid-item">Grid 1</div>
    <div class="grid-item">Grid 2</div>
  </div>
  <div class="flex-item">Flex Item 2</div>
</div>

<style>
  .flex-container {
    display: flex;
    gap: 10px;
  }

  .flex-item {
    background-color: lightgoldenrodyellow;
    padding: 10px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
  }

  .grid-item {
    background-color: lightpink;
    padding: 10px;
  }
</style>
```

---

### 5. **Advanced Layout: Grid for Structure, Flexbox for Components**

Here, a grid creates the structure, and each component inside uses Flexbox for precise alignment.

```html
<div class="grid-container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">
    <div class="flex-container">
      <div>Content 1</div>
      <div>Content 2</div>
    </div>
  </div>
  <div class="footer">Footer</div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-areas:
      "header header"
      "sidebar content"
      "footer footer";
    grid-template-columns: 1fr 2fr;
    gap: 10px;
    height: 100vh;
  }

  .header {
    grid-area: header;
    background-color: lightblue;
  }

  .sidebar {
    grid-area: sidebar;
    background-color: lightgreen;
  }

  .content {
    grid-area: content;
    background-color: lightcoral;
  }

  .footer {
    grid-area: footer;
    background-color: lightgray;
  }

  .flex-container {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>
```

---

### 6. **Complex Nested Layout**

Combining Flexbox and Grid for a card-based layout.

```html
<div class="grid-container">
  <div class="card">
    <div class="card-header">Card Header</div>
    <div class="card-body flex-container">
      <div>Info 1</div>
      <div>Info 2</div>
      <div>Info 3</div>
    </div>
    <div class="card-footer">Card Footer</div>
  </div>
  <div class="card">
    <div class="card-header">Card Header</div>
    <div class="card-body flex-container">
      <div>Info A</div>
      <div>Info B</div>
      <div>Info C</div>
    </div>
    <div class="card-footer">Card Footer</div>
  </div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .card {
    background-color: whitesmoke;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
  }

  .card-header,
  .card-footer {
    background-color: lightblue;
    padding: 10px;
    text-align: center;
  }

  .card-body {
    padding: 15px;
  }

  .flex-container {
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }
</style>
```

---

These examples should help you quickly recall how to combine Grid and Flexbox effectively for both simple and complex layouts.
