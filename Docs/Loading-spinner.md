# 🌀 Loading Spinner Component

## Overview

The **Loading Spinner Component** is a reusable, accessible, and visually consistent loading indicator for the **Burger Builder** application.  

It is built as a **standalone Angular 20 component** and follows the Burger Builder **design system** and **WCAG 2.1 accessibility standards**.  

---

## ✨ Features

- Reusable across multiple contexts:
  - Full-page overlay loading
  - Inline loading (buttons, cards, lists)
  - Modal loading
- Smooth, performant CSS animation (SCSS-powered)
- Supports multiple sizes: `small`, `medium`, `large`
- Accessible via ARIA attributes and screen-reader support
- Theming aligned with Burger Builder brand colors

---

## 📦 File Structure

```swift
📦 src
 └── 📂 app
      └── 📂 shared
           └── 📂 loader
                ├── 📄 loading-spinner.ts       
                ├── 📄 loading-spinner.html
                ├── 🎨 loading-spinner.scss
                └── 🧪 loading-spinner.spec.ts
```

---

## ⚙️ API Reference

### Inputs

| Input       | Type                                | Default      | Description |
|-------------|-------------------------------------|--------------|-------------|
| `size`      | `'small' \| 'medium' \| 'large'`    | `'medium'`   | Defines the spinner size. |
| `mode`      | `'inline' \| 'overlay'`             | `'inline'`   | Spinner display mode (inline or full overlay). |
| `ariaLabel` | `string`                            | `'Loading…'` | Accessible text for screen readers. |

---

## 🖼️ Usage Examples

### Inline Spinner (e.g., Button Loading)

```html
<button [disabled]="isLoading">
  <app-loading-spinner *ngIf="isLoading" size="small" mode="inline"></app-loading-spinner>
  Add to Cart
</button>
```

### Full-Page Overlay Spinner

```html
<app-loading-spinner 
  *ngIf="isPageLoading" 
  size="large" 
  mode="overlay" 
  ariaLabel="Loading page content...">
</app-loading-spinner>
```

### Modal Loading Spinner

```html
<div class="modal-body">
  <app-loading-spinner size="medium" mode="inline" ariaLabel="Loading order details"></app-loading-spinner>
</div>
```

## 🎨 Theming

- Spinner Primary Ring: Burger Builder Yellow (#FFC107)
- Spinner Background Ring: Cream Beige (#F5E1A4)
- Overlay Background: Semi-transparent White (rgba(255, 255, 255, 0.75))
- Sizes:
  - small: 1rem x 1rem
  - medium: 2rem x 2rem
  - large: 3rem x 3rem

## 🛡️ Accessibility

- role="status" communicates the loading state.
- aria-live="polite" ensures screen readers announce updates politely.
- ariaLabel provides descriptive text (default: "Loading…", but should be customized for context).
- .visually-hidden class hides text visually but keeps it available for assistive tech.
- Contrast ratios meet WCAG 2.1 AA compliance.

## 🧪 Testing

Unit tests (loading-spinner.spec.ts) validate:

- Correct rendering of spinner in each size (small, medium, large).
- Application of inline vs overlay classes.
- Presence of role="status" and aria-label.
- Conditional rendering when *ngIf is applied.

Example:

```ts
it('should render with large size', () => {
  component.size = 'large';
  fixture.detectChanges();
  const wrapper = fixture.nativeElement.querySelector('.spinner-wrapper');
  expect(wrapper.classList).toContain('large');
});
```

## 📚 Best Practices

- Use overlay mode for blocking, full-page loading states.
- Use inline mode for small elements like buttons or cards.
- Always provide a descriptive ariaLabel (e.g., "Loading cart items…") instead of just "Loading…".
- Avoid showing multiple spinners simultaneously to reduce cognitive load.

## 🚀 Future Enhancements

- Support for progress indicators (percentage-based loading).
- Configurable spinner colors (light/dark mode).
