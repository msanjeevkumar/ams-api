## Description

Airline Management API 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# following will setup db and then runs the app
$ docker-compose up --build

# following will just setup db 
$ docker-compose up -d --build dev_db 
$ npm run start:dev

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests with new db using docker-compose
$ docker-compose -f docker-compose.e2e.yml up --build

# e2e tests
$ npm run test:e2e:local

# test coverage
$ npm run test:cov
```
