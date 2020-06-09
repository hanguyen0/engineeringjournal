const express = require('express');
const app = express();
const cors = require('cors')
const db = require('../database/index.js');
const Journal = require('../database/models/journals.js');
const path = require('path');

const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/', express.static(path.resolve(__dirname, '..', 'client', 'dist')));

app.get('/journals', (req, res) => {
    Journal.find()
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send(err);
    })
    
});

app.post('/journals', (req, res) => {
    let journal = req.body;
    Journal.create(journal)
    .then((data) => {
        console.log(data);
        res.send(data);
    })
    .catch((err) => {
        console.log(err);
    })

    
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`));