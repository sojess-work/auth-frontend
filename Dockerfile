

FROM nginx:alpine
ADD  dist/auth_frontend /usr/share/nginx/html
RUN sudo systemctl status ngin
RUN sudo systemctl restart mgin
