# Etapa 1: Build del proyecto
FROM node:22 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
#RUN npm init

EXPOSE 3000
#CMD [ "npm", "run", "dev" ]
