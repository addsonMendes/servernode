var express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.json({"status":"Server Iniciado"});
});

var server = app.listen(4000, function(){
    console.log('Escutando 4000');
});