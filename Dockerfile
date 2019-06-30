FROM node:12-alpine as DEPENDENCIES
ENV NODE_ENV=production

COPY package*.json ./

RUN npm install

FROM DEPENDENCIES as BUILD
ENV NODE_ENV=production

COPY ./ ./
RUN npm run build


FROM node:12-alpine as RELEASE
WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY --from=BUILD package*.json ./
COPY --from=BUILD ./node_modules ./node_modules
COPY --from=BUILD ./ ./

EXPOSE 80
CMD ["npm", "run", "start"]
