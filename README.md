# TelefonCaptain
## Table of contents
- [About](#about)
- [Setup](#setup)
    - [Settings](#settings)
- [Features](#features)

## About

A web based application to rate and look up phone numbers

## Setup

Tested with node.js v18.17

- Clone repository
- Navigate to src/
- Copy .env.sample and paste in src/ as .env. Available options are listed in [Settings](#settings)
- Run `npm i` in src/
- Run `npm start` to run the app or `npm run dev` to watch it

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