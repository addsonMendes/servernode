const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://awsdeploymongouser:awsdeploymongouser@sistemacadastro-appangu.fykad.mongodb.net/bdprodutos?retryWrites=true&w=majority",{
            useNewUrlParser:true
});

mongoose.connection.once("open",()=>
      console.log('Mongoose conectado com sucesso')

);

module.exports = mongoose;
