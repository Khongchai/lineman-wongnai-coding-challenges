## Web is deployed to https://line-wongnai-deployment.vercel.app/ However, both the gateway and api are deployed on Heroku, and might take a while to have their dynocs spun up. So might just be faster to do everything yourself.

# How to run everything

### api-gateway (flask)

```shell

pip install requirements.txt

cd flaskr

flask_app=main

flask_debug=1 flask run

```

## json server

```shell

cd json-server

npm install

npm start

```

## react

```shell

cd web

npm install

npm start

```

## Other info

create-react-app addons:

- Chakra UI
- TypeScript

# Testing

## API

```shell

cd api-gateway

pytest

```

## Front

```shell

cd web

npm run test

```
