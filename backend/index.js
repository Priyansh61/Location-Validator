const express = require('express');
const connection = require('./connection')
const cors = require('cors');
const place = require('./schema')
const http = require('http');
const { access } = require('fs');

const app = express();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: '*'
}));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});




app.post('/add', (req, res) => {
    var data = req.body;
    const newPlace = new place({
        display_name: data.display_name,
        lat: data.latitude,
        lon: data.longitude,
        radius: data.radius
    });
    newPlace.save()
        .then(() => res.status(200).json({ message: 'Place added successfully' }))
        .catch(err => res.send(err));
});

const server = http.createServer(app);
server.listen(3000, () => console.log('Server running on port 3000 on railway'));



module.exports = app;
