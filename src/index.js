import express from 'express';
import * as config from './config.js'; 

const app = express()

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index')
})

app.listen(config.PORT, () => {
    console.log(`Listening on http://${config.HOSTNAME}:${config.PORT}`)
})