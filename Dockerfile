FROM node:16.14.2
WORKDIR /usr/src/Projetdev
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]