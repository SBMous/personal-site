# Personal Site

## Features

## Deployment

Deployed on my homelab k3s server using [static-web-server](https://static-web-server.net/) as a static site. Public routing via reverse proxy on a light public-cloud node.

## Built With

- [Nuxt](https://nuxt.com/)
  - [Nuxt Content](https://content.nuxt.com/)
  - [Nuxt Fonts](https://fonts.nuxt.com/)
  - [Nuxt svgo](https://nuxt.com/modules/nuxt-svgo)
  - [Nuxt Icons](https://nuxt.com/modules/icon) with [Iconify Remix Icons](https://icon-sets.iconify.design/ri/)
- [TailwindCSS](https://tailwindcss.com/)
- [Luxon](https://moment.github.io/luxon/#/)
- [Bun](https://bun.sh)

## Setup

Install dependencies using bun:

```bash
# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# bun
bun run dev
```

## Production

Build the application for production:

```bash
# bun
bun run generate
```
