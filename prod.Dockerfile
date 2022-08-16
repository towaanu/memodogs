FROM node:16-alpine3.15 AS build

COPY . /memodogs

WORKDIR /memodogs

RUN rm -rf ./build node_modules

RUN npm install

ENV NODE_ENV=production

ENV MEMODOGS_API_URL=https://api.memodogs.towaanu.com/api
ENV REACT_APP_MEMODOGS_API_URL=https://api.memodogs.towaanu.com/api

RUN npm run build:production


FROM caddy:2.5.2-alpine

COPY --from=build /memodogs/build /memodogs

COPY ./prod_helpers/Caddyfile /etc/caddy/Caddyfile

EXPOSE 80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
