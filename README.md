# Flight Tracker

This is a full stack javascript flight tracker. The frontend was built with React, Bootstrap and Material-UI, and the backend was built with MongoDB, Node, and Express.

## tech / frameworks

### frontend:
- react.js
    - babel-core
    - babel-jest
    - babel-loader
    - babel-preset-env
    - babel-preset-react
    - babel-plugin-transform-object-rest-spread
    - clean-webpack-plugin
    - css-loader
    - dotenv
    - express
    - extract-text-webpack-plugin
    - html-webpack-plugin
    - material-ui
    - node-sass
    - react
    - react-dom
    - react-redux
    - react-router-dom
    - resolve-url-loader
    - sass-loader
    - superagent
    - uglifyjs-webpack-plugin
    - url-loader
    - webpack
    - webpack-cli
    - webpack-dev-server
    - eslint
    - eslint-plugin-react
    - jest
    - bootstrap
    - react-bootstrap

## app features

- user is able to search for flights between two locations (airport codes)
- user is able to see a list of flights matching the search params
- user is able to sort flights by departure or price(first class and main cabin)

## tests

- all tests are run through jests testing suite on the backend
- jest was used to test POST and GET routes

## how to use

- fork and clone both frontend and backend repos into a directory
    - https://github.com/izzybaer/alaska-airlines-frontend
    - https://github.com/izzybaer/alaska-airlines-backend 

- open a terminal tab for the frontend, and one for the backend
- run `yarn install` in both the backend tab and the frontend tab
- once yarn has finished installing..
    - run the command `touch .env` in both terminal tabs in the root of each repo
- open two editors, one for each repo, and in each editor window navigate to the .env file
- paste these environment variables inside the backend .env and save the file: 

``` 
PORT=3000
DEBUG=true
API_URL=http://localhost:3000
CORS_ORIGINS=http://localhost:8080
APP_SECRET='change_this'
MONGODB_URI=mongodb://localhost/aa-dev
```

- paste these environment variables inside the frontend .env and save the file:

```
CDN_URL=/
NODE_ENV=dev
API_URL=http://localhost:3000
```

- navigate back to your terminal
- open two more terminal tabs inside the backend repo
    - run `yarn dbon` in one tab - wait a couple seconds for mongodb to connect
    - run `yarn start` in another tab - wait a couple seconds for the server to start
- in the frontend terminal tab 
    - run `yarn watch` and wait for webpack to compile successfully
- in **Chrome** (ruler of all browsers)
    - navigate to `http://localhost:8080`


## contributions
    
- wanna contribute?

    - maybe you have a great idea for refactoring..
    - maybe you have some unique, efficient solutions..
    - make a PR! 
        
        
        
## now you can get started searching for flights!



## credits


[Izzy Baer](https://github.com/izzybaer)
