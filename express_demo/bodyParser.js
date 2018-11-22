const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/name', (req, res) => {
    let data = {
        response: `You sent ${req.body.name}`
    }
    console.log(`You sent ${req.body.name}`);
    res.send(data);
})

app.listen(3000, () => console.log(`running...`));