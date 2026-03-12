# @keslers/ui

Kesler Technologies UI Component Library.

## Installation

```bash
npm install @keslers/ui
```

## Usage

### 1. Import Styles

You must import the library's CSS in your main entry file (e.g., `main.tsx` or `App.tsx`):

```typescript
import "@keslers/ui/styles.css";
```

### 2. Integration with React Router (or other routers)

Wrap your app with `UIProvider` to inject your router's `Link` component:

```tsx
import { UIProvider } from "@keslers/ui";
import { Link as RouterLink } from "react-router-dom";

// Mapping helper to bridge 'href' to 'to'
const Link = ({ href, ...props }: any) => <RouterLink to={href} {...props} />;

function App() {
  return (
    <UIProvider config={{ linkComponent: Link }}>
      <Router>
        <Header navItems={[{ label: "Home", href: "/" }]} />
        {/* ... */}
      </Router>
    </UIProvider>
  );
}
```

### 3. Import Components

```tsx
import { Header, Footer } from "@keslers/ui";

function App() {
  return (
    <>
      <Header navItems={[{ label: "Home", href: "/" }]} />
      <main>{/* Your content */}</main>
      <Footer />
    </>
  );
}
```

## Development

### Storybook

To start the component library development environment:

```bash
npm run storybook
```

### Build

To build the library for publication:

```bash
npm run build
```

The build output will be in the `dist/` directory.
