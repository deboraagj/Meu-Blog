// CONFIGURAÇÃO DO EXPRESS
const express = require('express'); // Servidor 
const app = express(); // Objeto express (servidor)

// CONFIGURAÇÃO DO BODYPARSER
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

//CONFIGURAÇÃO DO HANDLEBARS
var handlebars = require('express-handlebars');
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//ROTAS
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/html/main.handlebars")
});

app.post('/add', function(req,res) {
    Post.create({
        nome: req.body.nome,
        email: req.body.email
    }).then(function(){
        res.send("Post Criado com sucesso "+req.body.nome)
    }).catch(function(erro) {
        res.send("Houve um erro: " + erro)
    })
});



app.listen(process.env.PORT, function(){
    console.log("Servidor rodando na url http://localhost:8082/")
});

