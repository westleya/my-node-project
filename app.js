const express = require('express');
const app = express();

const myData = { foo: 'bar', baz: 'qux' };

app.get('/test', (req, res) => {
    res.send('Content to send');
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

//Receive JSON from front end
//send JSON to front end