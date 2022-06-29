FROM node:16.14.2
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g npm@8.13.1
EXPOSE 3000
CMD [ "npm", "start" ]
