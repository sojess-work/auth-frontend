

FROM nginx:alpine
COPY --from=node /dist/auth_frontend /usr/share/nginx/html
RUN nginx -s reload
