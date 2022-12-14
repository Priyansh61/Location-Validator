const express = require('express');
const connection = require('./connection')
const cors = require('cors');
const place = require('./schema')
const http = require('http');

const app = express();

const server = http.createServer(app);
server.listen(3000, () => console.log('Server running on port 3000'));

app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.post('/add', (req, res) => {
    var data = req.body;
    const newPlace = new place({
        display_name: data.display_name,
        lat: data.latitude,
        lon: data.longitude,
        radius: data.radius
    });
    newPlace.save()
        .then(() => res.send('Location added to database'))
        .catch(err => res.send(err));
});



module.exports = app;