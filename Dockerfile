FROM node:14-alpine
WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 5000
ENV NUXT_PORT=5000
ENV NUXT_HOST=0.0.0.0

CMD ["yarn", "start"]
