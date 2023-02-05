

FROM nginx:alpine
ADD  dist/auth_frontend /usr/share/nginx/html
RUN nginx -s reload
