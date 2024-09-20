## npx create-react-app@latest <app-name>,  then gutted template code
    usually work with grep to navigate commands I've used in the past, I find this super usefull
    example would be 'history | grep <serach-term>'
    trouble shooting server issues i'll 'lsof -i | grep <port>'
    testing queries I'll usually either use postman or curl
    usually build bash scripts around various things im working with such as sshing into boxes I alais them 'login-box1'
    ooooh and vim =], cant live without it
    jq is super handy too, pipe things all day |||||
    things I could of done better on this would create breanches with feature/<jira-ticket>-<number> then merge
    going forward after this interview I'm going to spend a ton of time on testing
    
## HOOVER LETTER
I've been researching various UI tools while building a personal app to track climbing routes, so it made sense to implement that. I’ve already scraped data to get started with. What I really like about Radix-ui its philosophy of giving you more control over styling components, so you don't have to fight the framework to get things working the way you want.

For testing, I landed on Vitest. Vitest seems like a good modern option for now. I'm still getting familiar with it, but it feels like the right choice for testing at this stage. As for TypeScript, it's nice to see the types being passed around, adding clarity to the development process.

One thing I'd like to implement is deploying a nodejs lambda function to query route data dynamically. I'd set up a hook to query that data, allowing users to sort routes by categories like "boulders," "trad," or "sport." An improvement down the line would be integrating a PostgreSQL database to manage the data more effectively.

# Code Layout file call in order
### useContext theme selector defined at top level
    src/app/layout.tsx
    src/app/context/themeContext.tsx
    src/app/page.tsx
    src/app/map.tsx
    src/app/navigation.tsx

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# technical_interview
