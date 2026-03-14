# /src/fonts/README.md

## D-DIN Font Handling in @keslers/kui

We ship the D-DIN font as a **base64-encoded `@font-face`** in its own isolated file.

This is the most reliable method for a published component library.

### How to regenerate the base64 (when updating the font)

Run this command from the project root:

```bash
node -e '
  const fs = require("fs");
  const base64 = fs.readFileSync("./src/fonts/D-DIN.otf").toString("base64");
  console.log("data:font/opentype;base64," + base64);
'
```

Copy the entire output and paste it into `src/fonts/D-DIN.css`.

### File structure & usage

```css
/* src/fonts/D-DIN.css */
@font-face {
  font-family: "D-DIN";
  src: url("data:font/opentype;base64,PASTE_THE_FULL_BASE64_STRING_HERE")
    format("opentype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

This file is imported in the main stylesheet:

```css
/* src/index.css */
...
@import "./fonts/D-DIN.css";   /* ← D-DIN font */

@theme {
  --font-ddin: "D-DIN", system-ui, sans-serif;
}
```

Consumers only need this one import:

```tsx
import "@keslers/kui/styles.css";
```

The font is automatically included with zero extra setup.
