FROM node:16.14.2
RUN mkdir frontend
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]