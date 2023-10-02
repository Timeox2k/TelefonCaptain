FROM node:18

ENV NODE_ENV=production

WORKDIR /app

COPY ["./package.json", "./package-lock.json*", "/app/"]

RUN npm install --production

COPY . .

CMD [ "npm", "run", "start" ]