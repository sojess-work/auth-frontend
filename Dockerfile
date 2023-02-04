FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY  /dist/auth_frontend /usr/share/nginx/html
