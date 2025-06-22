This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Docker Setup

This application has been dockerized for easy deployment and consistent environments.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/) (usually included with Docker Desktop)

### Building and Running with Docker

#### Using Docker Compose (Recommended)

1. Navigate to the webapp directory:
   ```bash
   cd path/to/Bioschmidt/webapp
   ```

2. Build and start the container:
   ```bash
   docker-compose up -d
   ```

3. The application will be available at http://localhost:3000

4. To stop the container:
   ```bash
   docker-compose down
   ```

#### Using Docker Directly

1. Navigate to the webapp directory:
   ```bash
   cd path/to/Bioschmidt/webapp
   ```

2. Build the Docker image:
   ```bash
   docker build -t bioschmidt-webapp .
   ```

3. Run the container:
   ```bash
   docker run -p 3000:3000 -d bioschmidt-webapp
   ```

4. The application will be available at http://localhost:3000

5. To stop the container, first find the container ID:
   ```bash
   docker ps
   ```

6. Then stop it:
   ```bash
   docker stop <container-id>
   ```

## Getting Started (Development)

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
