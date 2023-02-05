

FROM node:latest AS server-build
WORKDIR /root/
COPY dist ./authapp-frontend/dist
COPY server/package*.json ./
RUN npm install
COPY server/server.js .

EXPOSE 3080

CMD ["node", "server.js"]
