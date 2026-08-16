# Frameshop

An e-commerce demo store built with Next.js. Browse products, filter by tag, search, and manage a cart through checkout.

## Features

- Product listing fetched from the [Noroff Online Shop API](https://v2.api.noroff.dev/online-shop)
- Search (via URL query params) and tag-based filtering
- Cart with add/update/remove, persisted with Zustand
- Checkout flow and order contact form
- Toast notifications for cart actions
- Responsive header/navigation with mobile menu

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- React 19
- [TanStack Query](https://tanstack.com/query) for data fetching
- [Zustand](https://zustand-demo.pmnd.rs/) for cart/toast state
- Tailwind CSS 4
- TypeScript

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
src/
  app/                  # routes (home, cart, checkout, contact, product detail)
  components/           # shared UI (header, nav, footer, toasts)
  features/
    cart/               # cart store, cart UI, checkout button
    products/           # product API, hooks, cards, filters
    contact/            # contact form
    toast/              # toast store
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — build for production
- `npm start` — run the production build
- `npm run lint` — run ESLint
