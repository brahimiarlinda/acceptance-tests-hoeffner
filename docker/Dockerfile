FROM node:latest

COPY codecept.conf.js /aceeptance-tests-hoeffner/
COPY package.json /aceeptance-tests-hoeffner/
COPY test /aceeptance-tests-hoeffner/
COPY /acceptance-tests-hoeffner docker/run-tests.sh /aceeptance-tests-hoeffner/docker/

WORKDIR /aceeptance-tests-hoeffner
RUN npm install

ONBUILD ADD . /aceeptance-tests-hoeffner
ONBUILD WORKDIR /aceeptance-tests-hoeffner
ONBUILD RUN npm install

CMD ["/aceeptance-tests-hoeffner/docker/run-tests.sh"]