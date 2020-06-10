const express = require('express');
const app = express();
const multer = require('multer');
const cors = require('cors');
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

const DIR = './uploads';

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, DIR)
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname, Date.now() + '-' +file.originalname )
  }
});
let upload = multer({ storage: storage }).array('file')

app.post('/journals', (req, res) => {
    let journal = req.body.data;
    // journal.images=[]
    console.log(journal);
    // console.log(req.file);
    Journal.create(journal)
    .then((data) => {
        console.log(data);
        res.send(data);
    })
    .catch((err) => {
        console.log(err);
    })
    // upload(req, res, function (err) {
    //     if (err instanceof multer.MulterError) {
    //         return res.status(500).json(err)
    //     } else if (err) {
    //         return res.status(500).json(err)
    //     }
    //     return res.status(200).send(req.file)

    //     })
    
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`));