# Alaa El-Sawy — Portfolio

A premium, dark-themed personal portfolio for Alaa El-Sawy, Front-End Developer.
Built with React, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

To create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── assets/            # (empty — add real project screenshots here if desired)
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Projects/
│   ├── Experience/
│   ├── Education/
│   ├── Services/
│   ├── Contact/
│   ├── Footer/
│   └── shared/         # Reveal, SectionHeader, Button, ScrollToTop
├── context/
│   └── ThemeContext.jsx  # dark / light mode
├── data/                # all editable content lives here
│   ├── personal.js
│   ├── skills.js
│   ├── projects.js
│   ├── experience.js
│   └── iconMap.js
├── hooks/
│   ├── useReveal.js      # scroll-reveal animation
│   ├── useScrollSpy.js   # active nav link tracking
│   └── useScrolled.js    # navbar / scroll-to-top visibility
├── pages/
│   ├── Home.jsx
│   └── NotFound.jsx      # custom 404
├── App.jsx
├── main.jsx
└── index.css             # design tokens + global styles
```

## Editing content

Everything text-based lives in `src/data/`, so you shouldn't need to touch
component code to update copy:

- **personal.js** — name, role, contact details, nav links
- **skills.js** — skill categories and icons
- **projects.js** — project cards, tech tags, and filter categories
- **experience.js** — experience timeline, education, training, services, about stats

### Project links

Two projects don't yet have real, working URLs. They're marked with clearly
named placeholders in `src/data/projects.js`:

- `LIVE_DEMO_URL_HERE` — replace with the live deployment URL
- `GITHUB_URL_HERE` — replace with the project's GitHub repository URL

Until replaced, the corresponding buttons render disabled on the project
cards so nothing links out incorrectly.

### Project images

Project cards currently use a stylized placeholder header instead of a
screenshot. Drop real screenshots into `src/assets/` and reference them from
`src/data/projects.js` (add an `image` field and use it in `ProjectCard.jsx`)
when you have them.

## Design system

Colors, spacing, and typography are defined as CSS custom properties in
`src/index.css` (`:root` for dark, `html[data-theme='light']` for light).
Adjust `--accent` there to change the whole site's accent color in one place.

## Tech stack

- React 18 + Vite
- Tailwind CSS v4
- Framer Motion (hero entrance animation)
- lucide-react (icons)
- react-router-dom (used for the custom 404 route)
