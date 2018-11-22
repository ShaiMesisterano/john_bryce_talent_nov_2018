const express = require('express');
const mongodb = require('mongodb');
const cors = require('cors');

const app = express();

app.use(cors());

const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;
const mongoURL = 'mongodb://127.0.0.1/27017';

MongoClient.connect(mongoURL, (error, client) => {
    const gistsDB = client.db('test').collection('gists');

    if (error) return console.error(error);

    app.get('/', (req, res) => {
        gistsDB.find().toArray( (err, gist) => {
            console.log(gist);
        });
    });

    app.listen(3000);
} );