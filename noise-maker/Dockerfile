FROM node:12.14.1-alpine3.10

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY index.js .

USER node

ENTRYPOINT ["yarn", "start"]