const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

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
    app.locals.collection.deleteOne({ "name": req.params.carName }, (err, result) => console.log('ok'));
    res.send('ok');
});

app.post('/', (req, res) => {
    const name = req.body.name;
    const origin = req.body.origin;
    app.locals.collection.insertOne({"name": name, "origin": origin}, (err, result) => console.log('ok'));
    res.send('ok');
});

app.put('/:carName', (req, res) => {
    app.locals.collection.updateOne({"name": req.params.carName}, {$set: {"name": req.body.name, "origin": req.body.origin}}, (err, result) => console.log('ok'));
    res.send('ok');
});

app.listen(8080, () => console.log('Server is running'));