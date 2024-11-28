const express = require('express');
const app = express();
const port = 3000;
const cards = require('./cards.js');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.json(cards);
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/cards', (req, res) => {
    res.json(cards);
});


app.listen(port, () => {
    console.log(`A szerver fut a következő címen: http://localhost:${port}`);
});
