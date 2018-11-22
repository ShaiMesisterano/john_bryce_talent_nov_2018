const express = require('express');
const app = express();

app.get('/', ( req, res ) => res.send(`Welcome ${req.query.name}`));

app.post('/name', (req, res) => {
    let data = {
        response: 'You sent: ' + req.body
    };
    res.send(data);
});

app.listen(3000, () => console.log(`running...`));