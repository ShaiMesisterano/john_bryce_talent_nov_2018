const express = require('express');
const app = express();

// app.use('/',
//         (req, res, next) => {
//             console.log(`Time: ${new Date()}`);
//             next();
//         },
//         (req, res, next) => {
//             console.log(`Request Type: ${req.method}`);
//             next();
//         }
// );

app.get('/', (req, res) => {  
	console.log(req.query.id);
});

app.post('/post', (req, res) => {  
    let data = {
        response: 'You sent: ' + req.body.message
    };

    res.status(200).send(data);
});

app.listen(3000, () => {
    console.log(`Running...`);
});