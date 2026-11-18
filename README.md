# Tejaswinni's Little Fairytale 🎀

A pastel fairytale-style Princess Day surprise built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Experience

- A storybook castle welcome with a tiny royal bunny
- A personal royal invitation and appreciation notes
- An Adventure Express scrapbook inspired by train journeys
- A Magic Room with a mystery gift, happy notes, happiness potion, secret storybook, hidden crown, and star-catching mini game
- A final Princess Day letter and a hidden note
- Optional user-selected background music (never autoplayed)
- Mobile navigation, reduced-motion support, and a pause-animations control

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Quality checks

```bash
npm run lint
npm run build
```

## Personalize

- Main experience: `app/page.tsx`
- Visual styling and responsive layouts: `app/globals.css`
- Page metadata: `app/layout.tsx`
- App icon: `app/icon.svg`

Background music is selected by the visitor from their own device. No audio file is bundled and no sound starts automatically.

## Deploy

Import this GitHub repository into Vercel and use the default Next.js build settings.
