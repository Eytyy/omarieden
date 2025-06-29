# Design Tokens & Codebase Navigation

This guide explains the purpose of the `design-tokens.json` file and provides an overview of how the project is organized.

## What are design tokens?

Design tokens are the single source of truth for your project’s visual style. They include:

- **Fonts**: font families and weights
- **Font Sizes**: text scale (xs → 4xl)
- **Spacing**: margin, padding, grid gaps
- **Breakpoints**: responsive breakpoints (sm → 2xl)

The [`design-tokens.json`](./design-tokens.json) file bundles exactly the Tailwind scales used in the codebase. You can import these values into Bootstrap/Sass or expose them as CSS custom properties.

## How to use the tokens

1. **Sass Variables**
   Convert each token to a Sass variable in your Bootstrap build:

   ```scss
   $font-size-base: 1rem; // from tokens.fontSizes.base
   $spacer-4: 1rem; // from tokens.spacing[4]
   $breakpoint-md: 768px; // from tokens.breakpoints.md
   ```

2. **CSS Custom Properties**
   Alternatively, drop `design-tokens.json` into your build pipeline and generate CSS vars:

   ```css
   :root {
     --font-size-base: 1rem;
     --space-4: 1rem;
     --breakpoint-md: 768px;
   }
   ```

3. **Utility Classes**
   When mapping Tailwind utilities (e.g. `text-lg`, `p-4`) to Bootstrap, reference the tokens to ensure the exact same values.

## Codebase Overview

```
/src
├─ features/            # Page-specific sections (hero, cards, editorial, etc.)
│   ├─ hero-slider/     # HeroSection, data, types
│   ├─ editorial/       # EditorialSection, data, types
│   └─ ...
│
├─ shared/          # Reusable UI components & utilities
│   ├─ ui/          # Buttons, navigation, footer, etc.
│   └─ product/     # ProductCard, ProductImage, helpers
│
├─ data/            # Static data imports for pages
│
├─ hooks/           # Custom React hooks (useApp, usePrevNextButtons)
│
├─ index.css        # Tailwind imports & global CSS (includes font-face rules)
│
└─ App.tsx          # AppProviders, global layout, Lenis
```

- **Features**: self-contained folders grouping each homepage section’s components, data, and types.
- **Shared**: truly global components and utilities reused across features.
- **Data**: static content files (`home.ts`, `hero.ts`, etc.) that feed the features.
- **Hooks & Lib**: cross-cutting logic (carousel controls, theme context, etc.).

## Purged Tailwind CSS

We’ve generated a purged Tailwind stylesheet containing _only_ the utility classes used on this page.
To inspect every CSS rule and utility class in use, take a look at:

[public/tw-home.css](public/tw-home.css)
