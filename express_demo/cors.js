const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get('/name', (req, res) => {
    res.json({name: req.query.name});
})

app.listen(3000, () => console.log(`running...`));