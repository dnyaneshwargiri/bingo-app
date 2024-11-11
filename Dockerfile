FROM node:21-alpine AS production
RUN yarn global add pm2 http-server
WORKDIR /app
COPY ./dist /app/bingo-app/dist

EXPOSE 4000

RUN echo 'module.exports = {' \
            'apps: [' \
                '{' \
                    'name: "bingo-app",' \
                    'script: "http-server",' \
                    'args: ["bingo-app/dist", "-p", "4000"]' \
                '}' \
            ']' \
        '}' > ecosystem.config.js

CMD ["pm2-runtime", "ecosystem.config.js"]
