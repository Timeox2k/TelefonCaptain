# TelefonCaptain
## Table of contents
- [About](#about)
- [Setup](#setup)
    - [Nodejs](#local-node)
    - [Docker](#docker)
    - [Settings](#settings)
- [Features](#features)

## About

A web based application to rate and look up phone numbers

## Setup

There are a few ways to get this project to run
- [Local nodejs](#local-node) = Easiest way to get the app running but you'll have to setup external services (e.g. DB) on your own
- [Docker](#docker) = Build a docker image to use standalone or with docker-compose to include external services

### Local node
Tested with node.js v18.17

- Clone repository
- Navigate to src/
- Copy .env.sample and paste in src/ as .env. Available options are listed in [Settings](#settings)
- Run `npm i` in src/
- Run `npm start` to run the app or `npm run dev` to watch it

### Docker

#### Docker image

To build and run the docker image run the following commands in the projects root folder:

`docker build -t telefoncaptainweb src/`

`docker run --name combooter -e PORT=8080 --restart unless-stopped -d telefoncaptainweb`

Put your [settings](#settings) with "-e key:value" in the run command.

#### Docker compose

We prepared a simple docker-compose file for you to use. Just copy the .env.sample into the projects root folder, rename it to ".env" and fill in your [settings](#settings) there. Then simply run:

`docker compose up --build -d`

With older docker versions you may need this command: `docker-compose up -d --build`

### Settings
| Keyword    | Description                          | Default value |
| --------   | -------                              | -------       | 
| PORT       | Port on which the app listens        | 8080          |
| HOSTNAME   | The hostname/URL the app runs on     | localhost     |


## Features

- [ ] Rate phone numbers
- [ ] View Reviews
- [ ] Calculate & View trust score
- [ ] Get phone number informations from public sources
- [ ] Make an API available