const MongoClient = require('mongodb').MongoClient;
const express = require('express');

const app = express();

const url = "mongodb://127.0.0.1:27017/cars";

MongoClient.connect( url, (err, db) => {
    const collection = db.db('cars').collection('models');
    app.locals.collection = collection;
} );

app.get('/', (req, res) => {
    // collection.find().toArray( (err, docs) => {
    //     res.send(docs);
    // } )
    app.locals.collection.find().toArray( (err, docs) => {
        res.send(docs);
    } );
})

app.delete('/:carName', (req, res) => {
    app.locals.collection.deleteOne({ "name": req.params.carName }, (err, result) => console.log(result));
    res.send('ok');
})

app.listen(8080, () => console.log('Server is running'));