FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

WORKDIR /home/node/app

RUN npm install i npm@latest -g

COPY package.json package-lock*.json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["node", "start"]