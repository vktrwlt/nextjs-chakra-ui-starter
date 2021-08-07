This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

## Generate component

`npm run generate` and then answer the prompts. Generated component and its associated files will appear in the `/src/components` directory.

## Components folder structure

Following an Atomic design we place components in folders based on UI complexity.

`Atoms` are UI elements that can’t be broken down any further and serve as the elemental building blocks of an interface.
Example: Label

`Molecules` are collections of atoms that form relatively simple UI components. 
Example: Form Control which combines Label + Input

`Organisms` are relatively complex components that form discrete sections of an interface. 
Example: Hero Section that contains Text, CTA, Image

`Templates` place components within a layout and demonstrate the design’s underlying content structure. 
Example: Reusable Layouts

`Pages` apply real content to templates and articulate variations to demonstrate the final UI and test the resilience of the design system.
Example: Home page, Sign-up page

Resource: [Atomic Design](https://atomicdesign.bradfrost.com/)

## Naming Conventions

`PascalCase` is used when naming files and components
Prefix `Chakra` into the components name when extending styles and props imported from the Chakra-ui library


