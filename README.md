<p align="center">
  <a href="https://github.com/brianlee9090/CC24-seniorprojectfront" target="blank"><img src="./logo.png" width="320" alt="Just Go Logo" /></a>
</p>

  <p align="center">An API built for the <a href="https://github.com/brianlee9090/CC24-seniorprojectfront" target="_blank"> Just GO</a> App to serve directions and place information.</p>


## Built With
 - [NestJS](https://nestjs.com)
 - [Serverless](https://www.serverless.com/) 
 - [Mongoose](https://mongoosejs.com/)
 - [MongoDB](https://www.mongodb.com/)
 - [Axios](https://axios-http.com/docs/intro)
 - [Google Places](https://developers.google.com/maps/documentation/places/web-service/overview)
 - [Google Geocoding](https://developers.google.com/maps/documentation/geocoding/start)
 - [Google Directions](https://developers.google.com/maps/documentation/directions/overview)

## Requirements
Depending on the deployment the requirements will be different
- AWS Lambda Deployment
  1. Install the [Serverless](https://www.serverless.com/) CLI
  2. Install Node 14.17.3
- Heroku Deployment
  1. Install Node LTS
  

## Installation

```bash
$ npm install

$ npm install mongoose @nestjs/mongoose
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Authors

- [Richard Beavis](https://github.com/richardpbCC)
- [Roman Montoya](https://github.com/Roman4u)
- [Wesley Lee](https://github.com/leewes5928)