# Mobile TaskFlow

Mobile TaskFlow is a Vercel-ready, mobile-first task manager starter built with Next.js App Router, TypeScript, and Tailwind CSS.

## Features

- Demo authentication state that can be replaced with a production auth provider.
- Live dashboard metrics derived from local task state.
- Touch-friendly task list with status cycling.
- Task input form with an effort-point calculator.
- Glassmorphism-inspired mobile UI, safe-area aware bottom navigation, and large tap targets.

## Project structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  AuthCard.tsx
  BottomNav.tsx
  MetricCard.tsx
  MobileTaskApp.tsx
  TaskForm.tsx
  TaskList.tsx
lib/
  tasks.ts
next.config.ts
package.json
postcss.config.js
tailwind.config.ts
tsconfig.json
```

## Getting started

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```
