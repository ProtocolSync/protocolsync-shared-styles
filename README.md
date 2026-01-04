# ProtocolSync Shared Styles

Shared SCSS design system for ProtocolSync applications (Portal, Admin, etc.)

## Installation

Add to your project's `package.json`:

```json
{
  "dependencies": {
    "@protocolsync/shared-styles": "github:protocolsync/protocolsync-shared-styles#v1.0.0"
  }
}
```

Or use a local file path during development:

```json
{
  "dependencies": {
    "@protocolsync/shared-styles": "file:../protocolsync-shared-styles"
  }
}
```

## Usage

In your main SCSS file (e.g., `src/scss/style.scss`):

```scss
// Import shared styles
@import '@protocolsync/shared-styles';

// Add app-specific overrides below
```

## What's Included

- **Design Tokens**: Colors, spacing, typography, shadows
- **Utility Classes**: Background, text, border, spacing classes
- **Layout Patterns**: CoreUI integration, responsive layouts
- **Component Styles**: Modals, buttons, cards, tables
- **Common Patterns**: Sidebar, header, footer, breadcrumbs

## Structure

```
scss/
├── _variables.scss      # Design token variables
├── _base.scss           # Root styles and global resets
├── _utilities.scss      # Utility classes
├── _components.scss     # Shared component styles
├── _layout.scss         # Layout patterns (sidebar, header, footer)
└── index.scss           # Main entry point
```

## Design Tokens

### Colors
- Brand colors (primary, secondary)
- Accent green palette (100-900)
- Text colors (default, subtle, inverse, error, success)
- Background colors (page, card, focus, subtle)
- Border colors (light, medium)

### Spacing
- xxs (0.25rem), xs (0.5rem), s (1rem), m (1.5rem), l (2rem), xl (3rem)

### Typography
- Font family: Lato
- Font sizes: xxs-xxl
- Font weights: regular (400), semibold (600), bold (700)

### Shadows
- default, lifted, card, card-lg

## Versioning

Use semantic versioning tags in git:
- v1.0.0 - Initial release
- v1.1.0 - New features
- v1.0.1 - Bug fixes
