const MongoClient = require('mongodb').MongoClient;
const express = require('express');

const app = express();

const url = "mongodb://127.0.0.1:27017/cars";

MongoClient.connect( url, (err, db) => {
    const collection = db.db('cars').collection('models');

    app.get('/', (req, res) => {
        collection.find().toArray( (err, docs) => {
            res.send(docs);
        } )
    })
} );

app.listen(8080, () => console.log('Server is running'));