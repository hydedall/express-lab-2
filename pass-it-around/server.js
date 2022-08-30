const express = require(`express`)
const app = express()
const port = 3000;

app.get("/", (req, res) => {
    res.send(`
    <h1>99 bottles of beer on the wall</h1>
    <a href="localhost:4000/:numbers_of_bottles">Take one down, pass it around</a>`)
});

app.listen(3000)