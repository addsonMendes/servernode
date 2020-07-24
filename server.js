var express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.json({"message":"Server Iniciado"});
});

var server = app.listen(3000, "localhost", function(){
    console.log('Escutando 3000');
});