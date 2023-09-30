import express from 'express';
import * as config from './config.js'; 

const app = express()

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    const error = req.query.error || ""

    res.render('pages/index', { error })
})

app.get('/:number', (req, res) => {
    const number = req.params.number;

    if (!number.match(config.PHONE_NUMBER_REGEX)) {
        res.redirect("/?error=invalid_number")
    }


    res.render('pages/number', { number })
})


app.listen(config.PORT, () => {
    console.log(`Listening on http://${config.HOSTNAME}:${config.PORT}`)
})