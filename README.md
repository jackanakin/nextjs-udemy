## NextJS
> https://www.udemy.com/course/nextjs-zero-ao-avancado

### tasks
> Tasks application, integrated with Firebase Firestore and Google Authentication
1. Google Authentication using next-auth [...nextauth.ts](https://github.com/jackanakin/nextjs-udemy/blob/main/tasks/src/pages/api/auth/%5B...nextauth%5D.ts)
2. Firebase Firestore [integration](https://github.com/jackanakin/nextjs-udemy/blob/main/tasks/src/services/firebaseConnection.ts)
3. Routing, Dynamic Routing with [/id](https://github.com/jackanakin/nextjs-udemy/blob/main/tasks/src/pages/task/%5Bid%5D.tsx) and [Linking and Navigating](https://github.com/jackanakin/nextjs-udemy/blob/main/tasks/src/pages/dashboard/index.tsx)

### cms
> A Content Management System using sass, Primsic, SSR, SSG
1. SSR (Server Side Rendering) with getServerSideProps: GetServerSideProps [example](https://github.com/jackanakin/nextjs-udemy/blob/main/cms/src/pages/posts/%5Bslug%5D.tsx)
2. SSG (Static Site Generation) with getStaticProps: GetStaticProps [example](https://github.com/jackanakin/nextjs-udemy/blob/main/cms/src/pages/posts/index.tsx)

### repositories
> GitHub repositorires along AppRouter, Dynamic Pages, Pages Grouping, Loading UI, Layout Pattern, Metadata, Client Components 
1. Loading UI using loading.tsx [example](https://github.com/jackanakin/nextjs-udemy/blob/main/repositories/src/app/loading.tsx)
2. Nesting Layout Pattern using layout.tsx [example](https://github.com/jackanakin/nextjs-udemy/blob/main/repositories/src/app/(site)/dashboard/layout.tsx)
3. NextJS Metadata for SEO customization [example](https://github.com/jackanakin/nextjs-udemy/blob/main/repositories/src/app/layout.tsx)
4. NextJS Server Components [example](https://github.com/jackanakin/nextjs-udemy/blob/main/repositories/src/app/repositorios/%5Bid%5D/page.tsx) vs Client Components "use client" [example](https://github.com/jackanakin/nextjs-udemy/blob/main/repositories/src/app/repositorios/page.tsx) (you have to explicitly decide what components React should render on the client) <br> Search for Composition Patterns to decide which aproach is better for each scenario.
5. Dynamic Pages using \[id\] [example](https://github.com/jackanakin/nextjs-udemy/tree/main/repositories/src/app/repositorios/%5Bid%5D)
6. Pages Grouping using (grouping) [example](https://github.com/jackanakin/nextjs-udemy/tree/main/repositories/src/app/(admin))
7. In NextJS, fetch by default creates a local cache for each request, to force no cache use { cache: 'no-store' }, can use revalidate to specify time to be cached [example](https://github.com/jackanakin/nextjs-udemy/blob/main/repositories/src/app/page.tsx)
8. Default error page with error.tsx [example](https://github.com/jackanakin/nextjs-udemy/blob/main/repositories/src/app/error.tsx)
9. Default not found page with not-found.tsx [example](https://github.com/jackanakin/nextjs-udemy/blob/main/repositories/src/app/not-found.tsx)

### api-routes
1. Using NextJS for building API Routes [example]()