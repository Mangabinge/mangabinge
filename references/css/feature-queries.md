### Feature Queries (`@supports`) Refresher

**What are Feature Queries?**

Feature queries allow developers to apply styles conditionally based on whether the browser supports a specific CSS feature. This is similar to media queries but instead of targeting viewport properties, it checks for feature support.

---

### Basic Syntax

The basic syntax of a feature query is:

```css
@supports (property: value) {
  /* CSS rules if the feature is supported */
}
```

If the feature is not supported, the styles inside the `@supports` block will not be applied.

### Negating a Feature Query

You can check for features not being supported using `not`:

```css
@supports not (property: value) {
  /* CSS rules if the feature is NOT supported */
}
```

---

### Code Examples

#### 1. **Simple Feature Query**

This checks if the browser supports `display: grid`.

```css
@supports (display: grid) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
```

If `display: grid` is supported, it applies grid layout to `.container`.

#### 2. **Feature Query with Fallback**

Provide a fallback for older browsers that do not support `grid`.

```css
.container {
  display: flex; /* Fallback */
  flex-wrap: wrap;
}

@supports (display: grid) {
  .container {
    display: grid; /* Modern browsers */
    grid-template-columns: 1fr 1fr;
  }
}
```

#### 3. **Negated Feature Query**

Apply styles for browsers that do **not** support `grid`.

```css
@supports not (display: grid) {
  .container {
    display: flex;
    flex-wrap: wrap;
  }
}
```

#### 4. **Combining Multiple Conditions**

You can check for multiple features using `and` or `or`.

- **AND Condition:**

```css
@supports (display: grid) and (gap: 10px) {
  .container {
    display: grid;
    gap: 10px;
  }
}
```

- **OR Condition:**

```css
@supports (display: grid) or (display: flex) {
  .container {
    display: flex;
    justify-content: space-between;
  }
}
```

#### 5. **Nested Feature Queries**

You can nest feature queries to test for multiple conditions.

```css
@supports (display: grid) {
  .container {
    display: grid;
  }

  @supports (grid-template-areas: "header header" "sidebar main") {
    .container {
      grid-template-areas:
        "header header"
        "sidebar main";
    }
  }
}
```

#### 6. **Using `@supports` with Variables**

Feature queries can check for support of custom properties (CSS variables).

```css
@supports (--css: variables) {
  :root {
    --main-color: #ff6347;
  }

  .element {
    color: var(--main-color);
  }
}
```

---

### Advanced Use Cases

#### Feature Queries for Progressive Enhancement

You can use feature queries to progressively enhance a site by adding more modern features while ensuring backward compatibility.

```css
/* Default styles for older browsers */
.button {
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
}

/* Enhanced styles for modern browsers */
@supports (background: conic-gradient(red, yellow)) {
  .button {
    background: conic-gradient(red, yellow);
    color: black;
  }
}
```

---

### Summary

Feature queries are a powerful tool for ensuring styles are applied based on browser capabilities. They help improve the user experience by allowing graceful degradation or progressive enhancement of styles.

Would you like help with a specific project or scenario using feature queries?
