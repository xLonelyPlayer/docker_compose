FROM node:14.17.3-slim

WORKDIR /app
COPY ./package.json .
RUN npm install

WORKDIR /app/server/
COPY ./server/index.js .

WORKDIR /app/client/
COPY ./client .
RUN npm install
RUN npm run build

WORKDIR /app/server/public
RUN mv /app/client/build/* .

EXPOSE 3001

WORKDIR /app/server
ENTRYPOINT node index.js