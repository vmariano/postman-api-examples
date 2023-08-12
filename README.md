# Postman Api example

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Then validate the collections running newman

```bash
npx newman run collections/api.json -e collections/env.json
```

### Made with nextjs
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
