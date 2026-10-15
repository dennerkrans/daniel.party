# [daniel.party](https://daniel.party)

With desperation comes productivity, and so did this way too simple portfolio (if you even can call it that) site. It was built using [Vue](https://github.com/vuejs/vue) which is always a delight 🤗

## Build Setup

Vue 3 on [Vite+](https://viteplus.dev) (`vp`), with pnpm.

```bash
# install dependencies
vp install

# serve with hot reload
vp dev

# format, lint
vp check

# build for production
vp build
```

## Deploy

Hosted on Vercel (project `danielparty`). Pushing to `master` deploys to production; other branches get preview deployments.

The Vercel project needs the env var `ENABLE_EXPERIMENTAL_COREPACK=1` so it installs with the pnpm version pinned in `package.json`.
