FROM node:19 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . . 


FROM node:19-slim AS final
WORKDIR /app
COPY --from=build /app .
EXPOSE 8080
CMD ["node","index.js"]


