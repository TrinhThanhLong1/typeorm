## blo blueonion - Financial

## Description

This template use REST API concept. The flow of simple [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) (Create, Read, Update and Delete) applications can be described using the following steps:

### Intantiate a module

See <a href='https://docs.nestjs.com/recipes/crud-generator'>NestJS CRUD generator.</a>

- Default:

```bash
$ nest g resource modules/<module-name>
```

Select `REST API`. NestJS CLI will generate a boilerplate for the module.

- If the structure is more complex:
``` bash
$ nest g resource <module-name>
```
Copy the generated module to `src/modules/<your desired folder>`.

### Logging
- See <a href='https://docs.nestjs.com/techniques/logger'>NestJS Logger</a>.
- By default:
1. `development` will log `['log', 'debug', 'error', 'verbose', 'warn']` levels.
2. `production` will log `['error', 'warn']` levels.
- Logging levels can be customized in `main.ts` for each environment. 

## Installation

### Install npm packages
```bash
$ npm install
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

## Deploy to Production

```bash
# 01. Install nvm https://github.com/nvm-sh/nvm
# 02. Install node v16
$ nvm install v16
$ nvm use v16
# 03. Copy enviroment
$ cp .env.example .env
# 04. Edit config MYSQL in the .env file
# 05. Edit config Redis in the .env file
# 06. Run package
$ npm install
# 07. Build code
$ npm run build
# 08. Running code
$ node dist/src/main

```

## Documentation

### Swagger

```bash
# API, Swagger - src/swagger.ts
npm run doc:api #> http://localhost:3000/api
```

- This project ultilize <a href='https://docs.nestjs.com/openapi/cli-plugin'> NestJS's CLI Plugin </a>.
- Please aware that there is no need to put `@ApiProperty` decorator for every DTOs properties. For more information, please visit the link above.

## License

  Nest is [MIT licensed](LICENSE).
