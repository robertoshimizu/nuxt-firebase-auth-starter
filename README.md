# Nuxt 3 + Firebase 9 Starter

Authenticated server-side rendering with Nuxt 3 and Firebase 9.

## Setup

Make sure to install the dependencies

```bash
pnpm install
```

Set [service account](https://firebase.google.com/docs/admin/setup#initialize-sdk) environment variable

```
export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"
```

Add your firebase client credentials

```
cp .env.example .env
```

## Development

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).
