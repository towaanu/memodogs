#!/bin/sh

rm -rf ./build

docker run \
    -v `pwd`:/memodogs \
    -w /memodogs \
    node:alpine \
    npm install && npm run build:production

echo "Build created here : `pwd`/build"

