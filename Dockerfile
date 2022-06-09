FROM node:alpine

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .