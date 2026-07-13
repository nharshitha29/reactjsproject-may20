FROM node:22-alpine AS builder
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM cgr.dev/chainguard/nginx
COPY --chown=65532:65532 --from=builder /app/dist/  /usr/share/nginx/html/
EXPOSE 8080