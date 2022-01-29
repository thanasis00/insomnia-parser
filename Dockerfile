FROM node:lts

RUN mkdir -p /srv/app
WORKDIR /srv/app
COPY . .
RUN yarn install

CMD ["./run.sh"]
