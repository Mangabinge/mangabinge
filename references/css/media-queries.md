### Media Queries Refresher for Web Development

Media queries are a key feature in CSS that enable responsive web design. They allow you to apply different styles depending on the properties of the device, such as its screen size, orientation, resolution, and more. The main goal of media queries is to ensure that your web pages are optimized for different screen sizes (such as mobile, tablet, and desktop).

---

### 1. **Basic Syntax of Media Queries**

A media query in CSS follows this syntax:

```css
@media (condition) {
  /* CSS rules */
}
```

**Condition** is where you specify the type of media feature you want to target. The most common media features are `width`, `height`, `orientation`, etc.

#### Example 1: Simple Media Query Based on Width

```css
/* Base Styles (default for mobile) */
body {
  font-size: 14px;
  background-color: lightblue;
}

/* Media Query for screens wider than 600px */
@media (min-width: 600px) {
  body {
    font-size: 16px;
    background-color: lightgreen;
  }
}
```

In this example:

- On small screens (width < 600px), the body text size is 14px, and the background color is light blue.
- On wider screens (width ≥ 600px), the body text size increases to 16px, and the background color changes to light green.

---

### 2. **Common Media Query Features**

Here are some commonly used media query conditions:

- **`min-width`**: Applies styles when the screen width is greater than or equal to a certain value.
- **`max-width`**: Applies styles when the screen width is less than or equal to a certain value.
- **`min-height`**: Applies styles based on the height of the viewport.
- **`max-height`**: Applies styles based on a maximum height.
- **`orientation`**: Can be `portrait` or `landscape`, based on the device's orientation.
- **`resolution`**: Targets devices based on screen resolution (useful for high-density screens).

#### Example 2: Media Query for Landscape Orientation

```css
/* Base Styles */
body {
  font-size: 14px;
}

/* Media Query for Landscape Orientation */
@media (orientation: landscape) {
  body {
    font-size: 18px;
  }
}
```

Here, the text size will only change to 18px if the device is in landscape orientation.

---

### 3. **Combining Multiple Conditions**

You can combine multiple conditions in a single media query using `and`, `or`, and `not`.

#### Example 3: Combining `min-width` and `max-width`

```css
/* Default Styles */
body {
  background-color: lightgray;
}

/* Styles for medium screens (between 600px and 900px wide) */
@media (min-width: 600px) and (max-width: 900px) {
  body {
    background-color: lightcoral;
  }
}
```

In this case, the background color will be light coral only when the viewport width is between 600px and 900px.

#### Example 4: Using `not` to Exclude Specific Cases

```css
/* Default Styles */
body {
  background-color: lightyellow;
}

/* Exclude high-resolution screens */
@media not all and (min-resolution: 2dppx) {
  body {
    background-color: lightpink;
  }
}
```

Here, the background color changes to pink on screens that do not have a resolution greater than 2 dots per pixel (e.g., non-Retina displays).

---

### 4. **Advanced Example: A Fully Responsive Layout**

Let's now create a more comprehensive example of a responsive layout using media queries. The layout will adjust based on screen size and orientation.

#### Example 5: Responsive Grid Layout with Breakpoints

```css
/* Base Styles (Mobile First) */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.container {
  width: 100%;
  padding: 10px;
}

.column {
  width: 100%;
  padding: 10px;
}

@media (min-width: 600px) {
  .container {
    width: 90%;
  }

  .column {
    width: 45%; /* Two columns */
  }
}

@media (min-width: 900px) {
  .column {
    width: 30%; /* Three columns */
  }
}

@media (min-width: 1200px) {
  .column {
    width: 23%; /* Four columns */
  }
}

@media (orientation: landscape) {
  .container {
    background-color: lightblue;
  }
}
```

In this example:

- On small screens (mobile), the `.column` class takes up 100% width, making each item a full row.
- On medium screens (600px or wider), there are two columns.
- On larger screens (900px or wider), there are three columns.
- On even larger screens (1200px or wider), the layout switches to four columns.
- If the device is in landscape mode, the background color of the `.container` will be light blue.

---

### 5. **Media Query for Retina/High-DPI Displays**

Sometimes, you want to apply styles or images specifically for high-resolution screens, like Retina displays. You can target these displays using the `resolution` feature.

#### Example 6: Targeting Retina Screens

```css
/* Default Image */
img {
  width: 100%;
  height: auto;
}

/* Image for Retina Displays (2dppx or more) */
@media (min-resolution: 2dppx) {
  img {
    content: url("high-res-image.png");
  }
}
```

Here, a high-resolution image will be loaded only on devices with a pixel density greater than or equal to 2 dots per pixel.

---

### 6. **Best Practices for Media Queries**

1. **Mobile-First Approach**: Start by designing for small screens, then use media queries to progressively enhance the layout for larger screens.
2. **Avoid Fixed Sizes**: Use relative units like `em`, `rem`, `%`, `vw`, `vh` instead of fixed pixel values for better flexibility.

3. **Use Breakpoints Wisely**: Define breakpoints based on content and layout rather than specific device sizes. This ensures the design adapts to any screen, not just specific devices.

4. **Group Media Queries**: To keep your CSS clean, group related media queries together near the top or bottom of your CSS file.

#### Example 7: Grouping Media Queries

```css
/* Base Styles */
body {
  background-color: lightyellow;
}

/* Styles for Small Screens */
@media (max-width: 599px) {
  body {
    background-color: lightpink;
  }
}

/* Styles for Medium Screens */
@media (min-width: 600px) and (max-width: 899px) {
  body {
    background-color: lightblue;
  }
}

/* Styles for Large Screens */
@media (min-width: 900px) {
  body {
    background-color: lightgreen;
  }
}
```

This structure makes it easy to maintain and understand the media queries based on screen size.

---

### Conclusion

Media queries are an essential tool for creating responsive web designs. With the examples provided, you can now confidently write media queries for different device sizes, orientations, and other conditions like resolution. Always remember to approach responsiveness with a mobile-first mindset and ensure your layouts adjust to various screen sizes and features.
