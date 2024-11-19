### Refresher on CSS Custom Properties (CSS Variables)

CSS custom properties, often referred to as **CSS variables**, allow you to define reusable values directly in your CSS. They offer flexibility, maintainability, and scalability for your styles.

### 1. **Basics of CSS Custom Properties**

#### Syntax:

- Define a variable using the `--` prefix inside a selector.
- Access the variable using the `var()` function.

#### Example:

```css
:root {
  --main-color: #3498db;
  --font-size: 16px;
}

body {
  color: var(--main-color);
  font-size: var(--font-size);
}
```

Here, `:root` is a global scope for CSS variables, similar to `html`.

### 2. **Scoped Variables**

Variables can be scoped to specific selectors:

```css
:root {
  --main-bg: #ffffff;
}

.container {
  --main-bg: #f0f0f0; /* Overrides the global variable in this context */
}

body {
  background-color: var(--main-bg);
}
```

In this case, `body` will have a white background unless wrapped in `.container`.

### 3. **Fallback Values**

You can provide fallback values with `var()` to handle cases where a variable is not defined:

```css
p {
  color: var(--secondary-color, #555);
}
```

If `--secondary-color` is not set, the color will default to `#555`.

### 4. **Dynamic Updates with JavaScript**

CSS variables can be updated dynamically using JavaScript, making them highly versatile:

```html
<div class="box"></div>
<button onclick="changeColor()">Change Color</button>

<style>
  :root {
    --box-color: #e74c3c;
  }

  .box {
    width: 100px;
    height: 100px;
    background-color: var(--box-color);
  }
</style>

<script>
  function changeColor() {
    document.documentElement.style.setProperty("--box-color", "#8e44ad");
  }
</script>
```

### 5. **Advanced: Theming with Custom Properties**

Custom properties are perfect for implementing themes:

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
}

[data-theme="dark"] {
  --primary-color: #1abc9c;
  --secondary-color: #9b59b6;
}

.button {
  background-color: var(--primary-color);
  color: var(--secondary-color);
}
```

With JavaScript, you can switch themes:

```javascript
document.documentElement.setAttribute("data-theme", "dark");
```

### 6. **Using CSS Variables in Media Queries**

Custom properties can be dynamically adjusted based on media queries:

```css
:root {
  --padding: 10px;
}

@media (min-width: 768px) {
  :root {
    --padding: 20px;
  }
}

.container {
  padding: var(--padding);
}
```

### 7. **Combination with `calc()`**

You can use variables with the `calc()` function for dynamic calculations:

```css
:root {
  --base-size: 10px;
}

.box {
  width: calc(10 * var(--base-size));
  height: calc(5 * var(--base-size));
}
```

### 8. **Chaining Variables**

You can chain variables together:

```css
:root {
  --default-color: #333;
  --main-text-color: var(--default-color);
}

h1 {
  color: var(--main-text-color);
}
```

Changing `--default-color` will automatically update `--main-text-color`.

### 9. **Animating Custom Properties**

Custom properties can also be animated if used in properties that support animations:

```css
:root {
  --box-size: 100px;
}

.box {
  width: var(--box-size);
  height: var(--box-size);
  background-color: coral;
  transition: width 0.5s ease, height 0.5s ease;
}

.box:hover {
  --box-size: 200px;
}
```

### Summary

CSS custom properties are a powerful tool for managing styles. They allow for clean, DRY (Don't Repeat Yourself) code, and their dynamic nature makes them invaluable for tasks like theming, responsive design, and interactivity.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

### Real-World Applications of CSS Custom Properties

CSS custom properties shine in scenarios where flexibility, maintainability, and reusability are crucial. Below are some real-world examples:

---

### 1. **Theming for a Web Application**

#### Scenario:

A web application supports light and dark themes. Custom properties make it easy to switch themes without duplicating CSS rules.

```css
:root {
  --background-color: #ffffff;
  --text-color: #333333;
}

[data-theme="dark"] {
  --background-color: #121212;
  --text-color: #f1f1f1;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
}

button {
  background-color: var(--background-color);
  border: 1px solid var(--text-color);
  color: var(--text-color);
}
```

#### JavaScript for Theme Toggle:

```javascript
document.querySelector("#theme-toggle").addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute(
    "data-theme",
    currentTheme === "dark" ? "light" : "dark"
  );
});
```

This approach keeps the CSS clean and allows easy addition of new themes.

---

### 2. **Dynamic Spacing System**

#### Scenario:

Design systems often have spacing guidelines. Using CSS variables allows you to define a scalable spacing system.

```css
:root {
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 32px;
}

.container {
  padding: var(--space-md);
}

.card {
  margin-bottom: var(--space-lg);
}
```

#### Responsive Adjustment:

```css
@media (min-width: 768px) {
  :root {
    --space-md: 24px;
    --space-lg: 48px;
  }
}
```

This ensures consistent spacing across the application while allowing easy updates.

---

### 3. **Customizable User Interface Components**

#### Scenario:

A web application provides customizable widgets where users can choose their colors.

```html
<div class="widget" id="widget1">Customizable Widget</div>
```

```css
.widget {
  --widget-bg: #f0f0f0;
  --widget-text: #333;

  background-color: var(--widget-bg);
  color: var(--widget-text);
  padding: 20px;
  border-radius: 8px;
}
```

#### JavaScript for User Customization:

```javascript
const widget = document.querySelector("#widget1");
widget.style.setProperty("--widget-bg", "#4caf50");
widget.style.setProperty("--widget-text", "#ffffff");
```

Users can dynamically change colors without modifying the base CSS.

---

### 4. **Custom Charts**

#### Scenario:

You need to build a chart with consistent, theme-based colors.

```html
<div class="chart">
  <div class="bar" style="--bar-height: 40%;"></div>
  <div class="bar" style="--bar-height: 60%;"></div>
  <div class="bar" style="--bar-height: 80%;"></div>
</div>
```

```css
:root {
  --chart-bg: #f4f4f4;
  --bar-color: #3498db;
}

.chart {
  display: flex;
  align-items: flex-end;
  background-color: var(--chart-bg);
  padding: 10px;
}

.bar {
  width: 30px;
  margin: 0 5px;
  height: var(--bar-height);
  background-color: var(--bar-color);
}
```

This setup allows theme-based chart customization and dynamic bar heights.

---

### 5. **E-commerce: Product Card Variants**

#### Scenario:

In an e-commerce platform, different product categories have specific visual styles.

```html
<div class="product-card electronics">
  <h2>Smartphone</h2>
  <p>$699</p>
</div>
<div class="product-card clothing">
  <h2>T-Shirt</h2>
  <p>$19</p>
</div>
```

```css
.product-card {
  --bg-color: white;
  --text-color: black;

  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 20px;
  border-radius: 5px;
}

.product-card.electronics {
  --bg-color: #e3f2fd;
  --text-color: #0d47a1;
}

.product-card.clothing {
  --bg-color: #f3e5f5;
  --text-color: #6a1b9a;
}
```

Each category uses specific colors while maintaining a consistent structure.

---

### 6. **Progressive Web App (PWA) Manifest-Based Theme**

#### Scenario:

Dynamic colors in PWAs based on user preferences.

```css
:root {
  --primary-color: #ff9800;
  --secondary-color: #03a9f4;
}

header {
  background-color: var(--primary-color);
}

button {
  background-color: var(--secondary-color);
}
```

#### Manifest Theme Sync:

If the user changes the theme via the PWA interface, update the custom properties to reflect the changes.

```javascript
function updateTheme(primary, secondary) {
  document.documentElement.style.setProperty("--primary-color", primary);
  document.documentElement.style.setProperty("--secondary-color", secondary);
}
```

---

### Conclusion

These examples demonstrate how CSS custom properties can simplify complex scenarios like theming, user customization, and dynamic styling in modern web applications. They not only reduce repetitive code but also allow for efficient, scalable solutions.

.

.

.

.

.

.

.

.

.

.

.

.

.

### State-of-the-Art CSS Variables Boilerplate for Web Applications

This boilerplate defines a comprehensive set of common variables to help manage a modern web application's styles. It covers typography, colors, spacing, borders, shadows, and more.

```css
:root {
  /* Colors */
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --color-success: #28a745;
  --color-danger: #dc3545;
  --color-warning: #ffc107;
  --color-info: #17a2b8;
  --color-light: #f8f9fa;
  --color-dark: #343a40;
  --color-background: #ffffff;
  --color-text: #212529;

  /* Shades of Grey */
  --color-gray-100: #f8f9fa;
  --color-gray-200: #e9ecef;
  --color-gray-300: #dee2e6;
  --color-gray-400: #ced4da;
  --color-gray-500: #adb5bd;
  --color-gray-600: #6c757d;
  --color-gray-700: #495057;
  --color-gray-800: #343a40;
  --color-gray-900: #212529;

  /* Typography */
  --font-family-sans: "Helvetica Neue", Arial, sans-serif;
  --font-family-serif: Georgia, "Times New Roman", serif;
  --font-family-mono: "Courier New", monospace;
  --font-size-base: 16px;
  --font-size-sm: 14px;
  --font-size-lg: 18px;
  --font-weight-normal: 400;
  --font-weight-bold: 700;
  --line-height-base: 1.5;
  --line-height-heading: 1.25;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;

  /* Borders */
  --border-radius-sm: 2px;
  --border-radius-md: 4px;
  --border-radius-lg: 8px;
  --border-width: 1px;
  --border-color: var(--color-gray-300);

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.2);

  /* Z-Index */
  --z-index-dropdown: 1000;
  --z-index-sticky: 1020;
  --z-index-fixed: 1030;
  --z-index-modal: 1040;
  --z-index-popover: 1050;
  --z-index-tooltip: 1060;

  /* Transitions */
  --transition-duration: 0.3s;
  --transition-timing-function: ease-in-out;

  /* Breakpoints */
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;

  /* Widths */
  --container-width-sm: 540px;
  --container-width-md: 720px;
  --container-width-lg: 960px;
  --container-width-xl: 1140px;
}
```

### Explanation of Variables

1. **Colors**:

   - Includes primary, secondary, and utility colors like success, danger, and warning.
   - Provides a palette of greys for text, backgrounds, and borders.

2. **Typography**:

   - Common font families and sizes.
   - Base and heading line-heights.
   - Normal and bold font weights.

3. **Spacing**:

   - Utility spacing for margins and paddings.
   - Scales from extra small (xs) to extra large (xl).

4. **Borders**:

   - Radius for rounding corners (small, medium, large).
   - Standard border width and color.

5. **Shadows**:

   - Preset box-shadow levels for depth and hierarchy.

6. **Z-Index**:

   - Z-index values for layered UI components such as dropdowns, modals, and tooltips.

7. **Transitions**:

   - Standardized timing for smooth animations and transitions.

8. **Breakpoints**:

   - Responsive design breakpoints for different screen sizes.

9. **Widths**:
   - Fixed container widths for a consistent layout at various screen sizes.

---

### How to Use

#### Example 1: Button Component

```css
.button {
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--color-primary);
  color: var(--color-light);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  transition: background-color var(--transition-duration) var(
      --transition-timing-function
    );
}

.button:hover {
  background-color: var(--color-dark);
  box-shadow: var(--shadow-md);
}
```

#### Example 2: Responsive Layout

```css
.container {
  width: 100%;
  max-width: var(--container-width-sm);
  margin: 0 auto;
}

@media (min-width: var(--breakpoint-md)) {
  .container {
    max-width: var(--container-width-md);
  }
}

@media (min-width: var(--breakpoint-lg)) {
  .container {
    max-width: var(--container-width-lg);
  }
}
```

This boilerplate provides a solid foundation for building scalable, maintainable web applications. You can easily extend or modify it based on your project's specific needs.
