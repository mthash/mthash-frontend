FROM node:12-alpine as DEPENDENCIES
ENV NODE_ENV=production
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

FROM DEPENDENCIES as BUILD
ENV NODE_ENV=production
WORKDIR /usr/src/app

COPY ./ ./
RUN npm run build


FROM node:12-alpine as RELEASE
WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY --from=BUILD ./usr/src/app/package*.json ./
COPY --from=BUILD ./usr/src/app/node_modules ./node_modules
COPY --from=BUILD ./usr/src/app ./

EXPOSE 80
CMD ["npm", "run", "start"]
