#Build

FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


# Prod
FROM node:18-alpine AS prod
WORKDIR /app

COPY --from=build /app/.next/standalone ./

COPY --from=build /app/.next/static ./.next/static

COPY --from=build /app/public ./public

ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "server.js"]
