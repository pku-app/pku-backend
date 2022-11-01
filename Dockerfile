FROM node

WORKDIR /src/app

COPY package*.json ./

RUN npm i glob rimraf

RUN npm i -g @nestjs/cli

RUN npm i

COPY . .

RUN npm run build