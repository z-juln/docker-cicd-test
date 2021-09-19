FROM node:10-alpine
ADD . /workspace/juln/temp/app/
WORKDIR /workspace/juln/temp/app
RUN npm config set registry https://registry.npm.taobao.org && \
  npm install
EXPOSE 7001
CMD ["pm2", "start", "./index.js", "-n", "docker-cicd-test"]
