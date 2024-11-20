Here’s a comprehensive guide on using the `<Image>` component in Next.js 15, starting from simple use cases to more advanced scenarios.

---

### **1. Basic Image Rendering**

The simplest usage involves importing the `Image` component and specifying `src`, `alt`, `width`, and `height`.

```jsx
import Image from "next/image";

export default function BasicImage() {
  return (
    <Image
      src="/images/example.jpg" // Image path in the public directory
      alt="A beautiful scenery"
      width={800}
      height={600}
    />
  );
}
```

- **src**: Path to the image (relative to the `public` folder).
- **alt**: Describes the image for accessibility.
- **width/height**: Defines the image dimensions (in pixels).

---

### **2. Responsive Images**

To serve responsive images based on the device viewport, use the `sizes` property. It specifies how much screen space the image should take.

```jsx
export default function ResponsiveImage() {
  return (
    <Image
      src="/images/example.jpg"
      alt="A responsive scenery"
      width={1200}
      height={800}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}
```

- **sizes**: A media query-like syntax to control image dimensions. For example:
  - `(max-width: 768px) 100vw`: When the viewport is 768px or smaller, use 100% of the viewport width.
  - `(max-width: 1200px) 50vw`: Between 768px and 1200px, use 50% of the viewport width.

---

### **3. Using Remote Images**

To load images hosted on external domains, configure `next.config.js` with the allowed domains.

```javascript
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        pathname: "/images/**",
      },
    ],
  },
};
```

Then, render the remote image:

```jsx
export default function RemoteImage() {
  return (
    <Image
      src="https://example.com/images/remote-image.jpg"
      alt="Remote image"
      width={800}
      height={600}
    />
  );
}
```

---

### **4. Lazy Loading (Default)**

Images are lazy-loaded by default, meaning they only load when they enter the viewport. You can explicitly control this behavior using the `loading` property.

```jsx
export default function LazyImage() {
  return (
    <Image
      src="/images/example.jpg"
      alt="Lazy loaded image"
      width={800}
      height={600}
      loading="lazy" // Options: 'lazy' (default) or 'eager'
    />
  );
}
```

---

### **5. Using Placeholders**

Placeholders provide a low-quality preview before the image fully loads. Next.js supports two types of placeholders: `blur` and `empty`.

#### **Blur Placeholder**

```jsx
export default function BlurImage() {
  return (
    <Image
      src="/images/example.jpg"
      alt="Blur placeholder"
      width={800}
      height={600}
      placeholder="blur"
      blurDataURL="data:image/png;base64,..." // Base64 string of a tiny version of the image
    />
  );
}
```

Use a tool to generate `blurDataURL`, or Next.js can auto-generate it for local images.

---

### **6. Images with Intrinsic or Fill Layout**

#### **Intrinsic Layout**

Maintains the aspect ratio of the image based on its dimensions.

```jsx
export default function IntrinsicImage() {
  return (
    <Image
      src="/images/example.jpg"
      alt="Intrinsic layout"
      layout="intrinsic"
      width={800}
      height={600}
    />
  );
}
```

#### **Fill Layout**

Scales the image to fill the parent container while maintaining aspect ratio.

```jsx
export default function FillImage() {
  return (
    <div style={{ width: "100%", height: "300px", position: "relative" }}>
      <Image
        src="/images/example.jpg"
        alt="Fill layout"
        layout="fill"
        objectFit="cover" // Options: 'contain', 'cover', 'fill', 'scale-down'
      />
    </div>
  );
}
```

---

### **7. Priority Loading**

For critical images, use the `priority` property to load them immediately.

```jsx
export default function PriorityImage() {
  return (
    <Image
      src="/images/critical.jpg"
      alt="Critical image"
      width={800}
      height={600}
      priority // Enables high-priority loading
    />
  );
}
```

---

### **8. Combined Advanced Example**

Here’s a comprehensive example combining several features:

```jsx
import Image from "next/image";

export default function AdvancedImage() {
  return (
    <div>
      <h1>Advanced Image Example</h1>
      <div style={{ position: "relative", width: "100%", height: "400px" }}>
        <Image
          src="https://example.com/images/advanced.jpg"
          alt="Advanced use case"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,..."
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
    </div>
  );
}
```

This example includes:

- Remote images.
- Fill layout with `objectFit`.
- Blur placeholder.
- Priority loading.
- Responsive behavior with `sizes`.

---

### Summary of Properties:

| Property         | Description                                        |
| ---------------- | -------------------------------------------------- |
| `src`            | Path to the image (relative or remote URL).        |
| `alt`            | Image description for accessibility.               |
| `width`/`height` | Define image dimensions in pixels.                 |
| `layout`         | Controls image layout (`intrinsic`, `fill`, etc.). |
| `objectFit`      | Defines image scaling behavior.                    |
| `placeholder`    | Adds placeholders (`blur`, `empty`).               |
| `priority`       | Marks image as high-priority.                      |
| `loading`        | Controls lazy/eager loading.                       |
| `sizes`          | Specify responsive sizes for different viewports.  |

With this guide, you’re ready to make the most of the `<Image>` component in Next.js 15!
