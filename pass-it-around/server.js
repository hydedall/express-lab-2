// deps and app object

const express = require(`express`)
const app = express()
const port = 3000;

app.get("/", (req, res) => {
    res.send(`99 bottles of beer on the wall
    </br>
    <a href="http://localhost:3000/98">Take one down</a>`);
})
// req = request res = response
app.get('/:bottles', function (req,res){
    if (req.params.bottles - 1 === 0){
        res.send(`${req.params.bottles} bottles of beer on the wall!
        </br>
        <a href ="http://localhost:3000/">Go Again.</a>`);
    } else {
        res.send(`${req.params.bottles} bottles of beer on the wall!
        </br>
        <a href="http://localhost:3000/${req.params.bottles - 1}>Take one down</a>`)
    }   //basically just lots of requesting and then responses to the requests
        
});

app.listen(3000)

//I know there is definitely an easier way to do this, and I just couldn't figure out how to complete it.