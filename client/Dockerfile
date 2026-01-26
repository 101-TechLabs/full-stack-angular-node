# =========================
# Stage 1: Build Angular app
# =========================
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# =========================
# Stage 2: Nginx
# =========================
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

# IMPORTANT: copy correct SSR browser folder
COPY --from=build /app/dist/client/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
