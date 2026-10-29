# MockArchitect

Design and build test mocks that actually match production behavior

## Overview

MockArchitect is a testing tool that architecture-first mocking that generates, validates, and evolves with your contracts.

**Problem:** Hand-written mocks drift from reality; recording tools create brittle tests

**Solution:** Architecture-first mocking that generates, validates, and evolves with your contracts

**Target Audience:** Frontend developers, API consumers, QA engineers

## Features

- Schema-driven mock generation from OpenAPI/GraphQL
- Stateful mock servers with persistence
- Chaos injection: latency, errors, partial failures
- Contract testing against real provider APIs
- Zero-config recording mode from live traffic

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Linting & Type Checking

```bash
npm run lint
npm run typecheck
```

## Deployment

This project is configured for static export (`output: 'export'`), making it deployable to:

- **Vercel**: Connect repo and deploy
- **Netlify**: Connect repo, build command `npm run build`, publish directory `out`
- **GitHub Pages**: Use GitHub Actions to build and deploy `out/` directory
- **Cloudflare Pages**: Connect repo, build command `npm run build`, output `out`
- **Any static host**: Upload the `out/` directory

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Landing page
│   ├── globals.css     # Global styles + Tailwind
│   └── components/     # Page-specific components
├── components/         # Shared components
├── lib/                # Utilities
├── public/             # Static assets
└── ...
```

## Brand

- **Primary Color**: #7c3aed
- **Secondary Color**: #a855f7
- **Background**: #faf5ff
- **Text**: #4c1d95

## License

MIT License - feel free to use for your own projects.

---

Built with ❤️ for developers.