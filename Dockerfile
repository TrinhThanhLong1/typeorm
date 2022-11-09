FROM node:16-alpine
LABEL author="hunghq@vmodev.com"
RUN mkdir -p /home/blueonion
WORKDIR /home/blueonion
COPY ./ /home/blueonion

RUN npm cache clean --force \
  && npm install \
  && npm run build

CMD [ "npm","run","start:prod" ]
EXPOSE 3000
