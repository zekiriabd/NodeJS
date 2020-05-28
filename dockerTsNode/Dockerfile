FROM node
RUN npm install -g ts-node

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8089
CMD ["npm","run","start:watch"]
