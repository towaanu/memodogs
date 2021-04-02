# Memodogs
A little memogame. The goal of the game is to find every pair of cards. \
You can play the game [here](https://memodogs.towaanu.com)

## Install locally
This project is setup using [create react app](https://create-react-app.dev/). \
[Redux](https://redux.js.org/) is used for state management. \

## Run locally
We assume that you have copied the project locally. \
Following commands should be run at the root of the project ( at the same level as package.json ).

### Nodejs installed
If you have nodejs installed, you can run the app with the following command : 
```sh
   npm install && npm start 
```
The app should be accessible in your browser : [http://localhost:3000](http://localhost:3000)

### Docker
If you have Docker installed, you can launch the project using the commande below : \
```sh
    docker run \
	-p 3000:3000 \
	-v `pwd`:/memodogs \
	-w /memodogs \
	-it node:alpine \
	npm install && npm start
```

The app should be accessible in your browser : [http://localhost:3000](http://localhost:3000)

### Server
To play the game you need the server api. You can fin it on [this repo](https://github.com/towaanu/memodogs-server) \
