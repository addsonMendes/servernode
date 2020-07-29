var express = require("express");
require('./DB/DB');

const bodyParser = require('body-parser');
const cors = require('cors');

const Product = require('./model/Product');
const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

const handleError = (res, msg) => {
    return err => {
        console.log(err);
        res.status(500).json({ "error": msg });
    };
};

app.get('/', (req, res) => {
    res.json({"status":"Server Iniciado"});
});


app.post('/product', (req, res) => {
    let product = req.body;
    Product.create(product)
    .then(data => { res.json(data) })
    .catch(handleError(res, "Problemas ao cadastrar produto..."));
});

app.get('/product', (req, res) =>{
    Product.find()
    .then(data => { res.json(data) })
    .catch(handleError(res, "Problemas ao listar produtos..."));
});


app.listen(PORT, () => {
    console.log(`Server iniciado na porta ${PORT}...`);
});
