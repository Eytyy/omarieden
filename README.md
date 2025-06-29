# Omarieden Home Page Style Guide

This guide provides design token references, codebase structure, and additional information for developers working with the Omarieden homepage frontend.

## Contents

- [What are design tokens?](#what-are-design-tokens)
- [How to use the tokens](#how-to-use-the-tokens)
- [Codebase Overview](#codebase-overview)
- [Purged Tailwind CSS](#purged-tailwind-css)
- [Running the Project Locally](#running-the-project-locally)
- [Tooling Notes](#tooling-notes)

## Project Context

This repository contains the homepage front-end implementation for **Omarieden**, handed off to the client as an alternative to a Figma design. The implementation uses Tailwind CSS and React. The client’s development team will be integrating it into a Laravel + Bootstrap stack. This guide exists to help clarify the design decisions and token logic used across the project.

## What are design tokens?

Design tokens are the single source of truth for your project’s visual style. They include:

- **Fonts**: font families and weights
- **Font Sizes**: text scale (xs → 4xl)
- **Spacing**: margin, padding, grid gaps
- **Breakpoints**: responsive breakpoints (sm → 2xl)

The [`design-tokens.json`](./design-tokens.json) file bundles the Tailwind scales used in the codebase. These can be imported into Bootstrap/Sass or exposed as CSS custom properties. The project only uses black and white colors, and layout utilities (grid, flex, alignment, etc.) are applied directly via Tailwind utility classes in the code.

## How to use the tokens

1. **Sass Variables**\
   Convert each token to a Sass variable in your Bootstrap build:

   ```scss
   $font-size-base: 1rem; // from tokens.fontSizes.base
   $spacer-4: 1rem; // from tokens.spacing[4]
   $breakpoint-md: 768px; // from tokens.breakpoints.md
   ```

2. **CSS Custom Properties**\
   Alternatively, drop `design-tokens.json` into your build pipeline and generate CSS vars:

   ```css
   :root {
     --font-size-base: 1rem;
     --space-4: 1rem;
     --breakpoint-md: 768px;
   }
   ```

3. **Utility Class Mapping**\
   When mapping Tailwind utility classes (e.g. `text-lg`, `p-4`) to Bootstrap or your Sass utilities, reference the design tokens to ensure alignment.

## Codebase Overview

```
/src
├─ features/            # Page-specific sections (hero, cards, editorial, etc.)
│   ├─ hero-slider/     # HeroSection, data, types
│   ├─ editorial/       # EditorialSection, data, types
│   └─ ...
│
├─ shared/              # Reusable UI components & utilities
│   ├─ ui/              # Buttons, navigation, footer, etc.
│   └─ product/         # ProductCard, ProductImage, helpers
│
├─ data/                # Static data imports for pages
│
├─ hooks/               # Custom React hooks (useApp, usePrevNextButtons)
│
├─ index.css            # Tailwind imports & global CSS (includes font-face rules)
│
└─ App.tsx              # AppProviders, global layout, Lenis
```

- **Features**: self-contained folders for each homepage section.
- **Shared**: global UI components and reusable layout/presentation logic.
- **Data**: holds static content files used to populate sections.
- **Hooks**: contains cross-cutting logic for context and behavior.
- **Styles**: contains global styling imports and font-face declarations.

Use absolute imports throughout the project (e.g. `@/features/editorial/EditorialSection`). Each folder contains an `index.ts` file for re-exports.

## Homepage Section Overview

The homepage is composed of **modular sections** that can be added, removed, or reordered freely. Each section is self-contained and can be reused multiple times. The sections include:

- **Hero Slider** – A full-width slider (image or video) with a headline, description, and link. Use it for campaigns, collections, or any featured content.
- **Products Carousel** – A horizontally scrollable list of products showcasing selected items with hover interactions.
- **Featured Collections** – A grid-based layout highlighting curated product groups or collections.
- **Editorial Section** – An outfit-focused section that shows an overview of the look and a list of products featured on the model. It has **two variants**:
  - **Single Variant**: Displays one outfit overview.
  - **Multi-Variant**: Provides a toggle (e.g. men/women) when multiple outfit versions exist.
- **Featured Brands** – A carousel showcasing brand cards.

## Purged Tailwind CSS

We’ve generated a purged Tailwind stylesheet containing _only_ the utility classes used in the homepage. This allows the client’s dev team to quickly inspect all relevant CSS rules without digging through the component tree.

You can view the file here:

[public/tw-home.css](public/tw-home.css)

If you need to regenerate this file (e.g. after adding new utility classes), run:

```bash
npm run build:tw
```

This command uses the Tailwind CLI to scan the source code and output a trimmed CSS file with just the used styles.

## Running the Project Locally

To run the homepage locally for inspection or development:

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

Use `npm run build` to generate a production build, and `npm run preview` to view it.

## Tooling Notes

- **Icons:** This project uses [`react-icons`](https://react-icons.github.io/react-icons/) for vector icons. Equivalent raw SVGs will be available in the `public/icons` folder.

- **Framer Motion:** Used for micro-interactions and subtle animation throughout the UI. The library is optional and can be replaced with any other JavaScript animation solution. Framer Motion also works in vanilla JS without React.

- **Embla Carousel:** Used for horizontal sliders and carousels. This is a lightweight dependency and can also be used with vanilla JavaScript if needed.
