

FROM nginx:alpine
COPY  /dist/auth_frontend /usr/share/nginx/html
