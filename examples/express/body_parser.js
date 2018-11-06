const express = require('express');
const bodyParser = require('body-parser');
const app = express();
 
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function(req, res) {  
    let data = {
        response: 'You sent: ' + req.body.message
    };

    res.status(200).send(data);
});

app.listen(3000, () => {
    console.log(`Running...`);
});