FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:alpine

COPY ./configs/self-cert.crt /etc/nginx/ssl/server.crt
COPY ./configs/self-key.key /etc/nginx/ssl/server.key

WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build ./
COPY ./configs/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 443
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]