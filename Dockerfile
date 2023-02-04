FROM nginx:alphine
COPY dist/auth_frontend /usr/share/nginx/html
