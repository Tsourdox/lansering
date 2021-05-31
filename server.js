const express = require('express');
const port = 3334;
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello World, automation is awesome!');
})


app.listen(port, () => {
    console.log('Server is running on port: ', port);
})