FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN yarn install

COPY . .
RUN yarn build

EXPOSE 3000

FROM nginx
EXPOSE 3000
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html