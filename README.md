# Adding Nested/Persistent Layouts in Next.js

This code was created for a video covering the topic of adding nested and persistent layouts in Next.js application. [Check out the video here.](https://www.youtube.com/watch?v=WOeLxL2DF3E&feature=youtu.be&ab_channel=ReactTipswithBrooksLybrand)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

In this project I show a pattern for nested/persistent layouts in Next.js. I first learned this pattern in a blog by Adam Wathan titled ["Persistent Layout Patterns in Next.js"](https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/). I have formed a few of my own opinions and developed my own patterns on top of the 3rd option Adam demonstrations.

Additionally, I wanted to show some compelling arguments for nested layouts and how to go from an app with implicit nested layouts to explicit nested layouts

## Data
The data for this demo comes from the free ["Learn GraphQL with Apollo" tutorials](https://odyssey.apollographql.com/) API

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
