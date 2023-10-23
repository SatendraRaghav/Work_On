
# build stage
FROM node:16-alpine as build-stage
WORKDIR /Hyperform
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build

# production stage
FROM nginx:stable-alpine as production-stage
ENV DEBIAN_FRONTEND noninteractive
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /Hyperform/dist /usr/share/nginx/html
EXPOSE 3002 
CMD ["nginx", "-g", "daemon off;"]