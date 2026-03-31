[![GitLab](https://img.shields.io/badge/GitLab-FC6D26?logo=gitlab&logoColor=white)](https://gitlab.com/keslers/kui)
[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/keslertechnologies/kui)
[![npm version](https://img.shields.io/npm/v/@keslers/kui.svg)](https://www.npmjs.com/package/@keslers/kui)
[![npm downloads](https://img.shields.io/npm/dm/@keslers/kui.svg)](https://www.npmjs.com/package/@keslers/kui)
[![license](https://img.shields.io/npm/l/@keslers/kui)](https://www.npmjs.com/package/@keslers/kui)

# @keslers/kui Component Library

A hyper-opinionated React component library built with Tailwind v4, shadcn/ui, and react-icons. Provides pre-styled components like Header, Footer, and Layout for quick setup in dark-themed apps.

## Installation

```bash
npm install @keslers/kui
```

## Usage

Import the stylesheet once in your main entry file (e.g., `index.tsx` or `App.tsx`):

```tsx
import "@keslers/kui/styles.css";
```

Then import and use components:

```tsx
import { Header } from "@keslers/kui";
import { Footer } from "@keslers/kui";
import { Layout } from "@keslers/kui";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // For social icons

function App() {
  return (
    <Layout
      header={
        <Header
          logo="KESLER"
          navItems={[
            {
              label: "SERVICES",
              onClick: () => console.log("Services clicked"),
            },
            {
              label: "PORTFOLIO",
              onClick: () => console.log("Portfolio clicked"),
            },
            { label: "CONTACT", onClick: () => console.log("Contact clicked") },
          ]}
          onLogoClick={() => console.log("Logo clicked")}
        />
      }
      footer={
        <Footer
          links={[
            { label: "About", href: "/about" },
            { label: "Privacy Policy", href: "/privacy" },
          ]}
          socials={[
            { icon: FaGithub, href: "https://github.com/keslertechnologies" },
            {
              icon: FaLinkedin,
              href: "https://linkedin.com/company/keslertechnologies",
            },
          ]}
          copyright={{
            companyName: "KESLER TECHNOLOGIES",
            companyUrl: "https://keslertechnologies.com",
          }}
        />
      }
    >
      {/* Your page content */}
      <main className="flex-1 p-4">
        <h1>Hello, World!</h1>
      </main>
    </Layout>
  );
}
```

### Components

- **Header**: Sticky navigation bar with logo, nav items, and mobile menu.
  - Props: `logo: ReactNode`, `navItems: { label: string; onClick: () => void }[]`, `onLogoClick: () => void`
- **Footer**: Bottom bar with links, social icons, and copyright.
  - Props: `links: { label: string; href: string; isExternal?: boolean; onClick?: () => void }[]`, `socials: { icon: IconType; href: string; label?: string; onClick?: () => void }[]`, `copyright: { companyName: string; companyUrl: string }`
- **Layout**: Wrapper for Header + main content + Footer.
  - Props: `header?: ReactNode`, `footer?: ReactNode`, `children: ReactNode`
- **Custom Sheet**: Modified shadcn sheet with custom overlay and close button.

## Development

- Clone the repo: `git clone https://github.com/keslertechnologies/kui.git`
- Install deps: `npm install`
- Run Storybook: `npm run storybook`
- Build: `npm run build`
- Test locally: Use `npm link` in the library, then `npm link @keslers/kui` in a test app.

## License

MIT
