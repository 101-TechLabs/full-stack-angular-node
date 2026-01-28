# =========================
# Stage 1: Build Angular app
# =========================
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# 🔑 Build-time environment (dev | qa | production)
ARG BUILD_ENV=production

# Optional: log env during build (debug friendly)
RUN echo "Building Angular for environment: $BUILD_ENV"

# Angular build with configuration
RUN npm run build -- --configuration=$BUILD_ENV

# =========================
# Stage 2: Nginx
# =========================
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

# IMPORTANT: copy correct SSR browser folder
COPY --from=build /app/dist/client/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
