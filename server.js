const express = require('express'),
    app = express(),
    cors = require('cors'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    route = require('./route');
require('dotenv').config()

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
route(app)

app.listen(process.env.PORT, async function (err) {
    if (err) {
        console.log(err);
    } else {


        await mongoose.connect('mongodb://localhost/interviews2020', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }, function (err) {
            if (err) {
                console.log('monogoerr', err)
                process.exit(1);

            } else {
                console.log('app running on ', process.env.PORT)
            }
        });

    }
})