

FROM nginx:alpine
ADD  dist/auth_frontend /usr/share/nginx/html
RUN  systemctl status ngin
RUN  systemctl restart mgin
