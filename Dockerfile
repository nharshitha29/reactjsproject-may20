FROM node:22-alpine As Builder
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx:alpine
WORKDIR /spc
COPY --from=Builder /app/dist /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]         
