FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
ADD dist/auth_frontend /usr/share/nginx/html
