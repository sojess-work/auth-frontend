FROM node:latest AS ui-build
WORKDIR /usr/src/app
COPY . ./auth-frontend/
RUN cd auth-frontend && npm install @angular/cli@13.3.10 && npm run build

FROM node:latest AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/auth-frontend/dist ./auth-frontend/dist
COPY package*.json ./
RUN npm install
COPY server.js .
EXPOSE 80
CMD ["node","server.js"]
