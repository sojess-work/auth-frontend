

FROM nginx:alpine
ADD  dist/auth_frontend /usr/share/nginx/html
RUN   status ngin
RUN   restart mgin
