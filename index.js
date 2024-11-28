// index.js

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const port = 3000;
app.listen(port, () => {
    console.log(`A szerver fut a következő címen: http://localhost:${port}`);
});
