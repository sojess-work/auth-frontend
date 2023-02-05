

FROM node:latest AS server-build
WORKDIR /root/
COPY dist ./my-app/dist
COPY package*.json ./
RUN npm install
COPY server.js .

EXPOSE 3080

CMD ["node", "server.js"]
