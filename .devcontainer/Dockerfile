FROM node:16

RUN git clone https://github.com/WebReadyProjects/github-template.git

WORKDIR "/github-template/docs/"

EXPOSE 8080

RUN yarn
RUN yarn dev:docs
CMD ["yarn", "dev:docs", "build:docs"]
