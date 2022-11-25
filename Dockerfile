#build stage
FROM node:lts-alpine

# install simple http server for serving static content

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

RUN npm install npm@latest -g

# install project dependencies

RUN npm install

COPY . .

RUN npm run build

#production
FROM nginx:1.19.1-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]