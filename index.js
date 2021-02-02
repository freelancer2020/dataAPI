const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const csv = require('csvtojson');
const port = 5000 || process.env.PORT;
const fn = require('./utilities/utilities');
const getUsersName = require('./utilities/users');
app.listen(port, fn(port));
app.use(express.json());
app.use(cors());




app.get('/getusers', (req, res) => {
    let users = new Set();
    let arr = [];
    let fragment = [];
    csv()
.fromFile(path.join(__dirname, 'data/user.csv'))
.then(data => {
    data.map(user => users.add(user['CAL EID']))
    for (let i of users) arr.push(i);
    fragment = arr.slice(0, 20);
    res.json(fragment)

 });
})


app.get('/client/:name', (req, res) => {
    const clientName = req.params.name;
    csv()
    .fromFile(path.join(__dirname, 'data/user.csv'))
    .then(data => {
        getUsersName(data, clientName, obj => {
            res.json({clients: obj})
        })
    })
})



app.get('/art', (req, res) => {
    csv()
    .fromFile(path.join(__dirname, 'data/art.csv'))
    .then( data => {
        res.json({articles: data})
    })
})
