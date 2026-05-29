# ai_react_web

A frontend project skeleton built with **React 19 + TypeScript + Vite**.

## Tech Stack

| Tool              | Purpose                   |
| ----------------- | ------------------------- |
| React 19          | UI library                |
| TypeScript 6      | Type safety               |
| Vite 8            | Dev server & bundler      |
| React Router v7   | Client-side routing       |
| ESLint + Prettier | Code quality & formatting |

## Getting Started

### Prerequisites

- Node.js ≥ 20

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env.local
# then edit .env.local with your values

# 3. Start the dev server
npm run dev
```

## Available Scripts

| Command                | Description                               |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Start dev server at http://localhost:5173 |
| `npm run build`        | Type-check + production build             |
| `npm run preview`      | Preview production build locally          |
| `npm run lint`         | Run ESLint                                |
| `npm run lint:fix`     | Auto-fix lint issues                      |
| `npm run format`       | Format all files with Prettier            |
| `npm run format:check` | Check formatting without writing          |

## Project Structure

```
src/
├── components/       # Reusable UI components
│   └── common/       # Shared layout components (Layout, etc.)
├── hooks/            # Custom React hooks (e.g. useAsync)
├── pages/            # Page components (one directory per route)
│   ├── Home/
│   └── NotFound/
├── services/         # API layer
│   ├── apiClient.ts  # Base HTTP client (wraps fetch)
│   └── index.ts      # Service exports
├── types/            # Global TypeScript types
│   └── api.ts
├── utils/            # Pure utility functions
│   └── env.ts        # Typed access to VITE_ env vars
├── router.tsx        # Route definitions (createBrowserRouter)
├── main.tsx          # Entry point
└── App.tsx           # App shell / global providers
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```env
VITE_API_BASE_URL=https://api.example.com
VITE_APP_NAME=ai_react_web
```

> **Never commit `.env` or `.env.local`** — they are in `.gitignore`.

## GitHub Copilot Team Guidelines

See [`.github/copilot-instructions.md`](.github/copilot-instructions.md) for shared coding conventions used by GitHub Copilot in this repository.
