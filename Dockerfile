# Stage 1: Build the Angular app
FROM node:18 as build
WORKDIR /app
COPY package*.json ./

COPY . .
RUN npm run build

# Stage 2: Serve the Angular app using Nginx
FROM nginx:alpine
COPY --from=build /app/dist/projetpfe /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

