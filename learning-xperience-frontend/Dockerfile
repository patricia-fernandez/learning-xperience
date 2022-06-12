# step 1
FROM node as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
# step 2
FROM nginx:1.22.0-alpine
COPY --from=build-step /app/dist/machine-xperience-frontend /usr/share/nginx/html