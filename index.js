const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4001;

let contacts = require('./data/contacts') //pegando de cada data fornecida NAO COLOCAR ENTRE {} QDO ESTIVER CMOM MAIS PASTAS
let vehicles = require('./data/vehicles')
let comments = require('./data/comments')
let products = require('./data/products')

app.use(bodyParser.json()) //adiconado de acordo com o readme
app.use(express.static('public')) //serve enviar arquivos css e js


app.get("/contacts", function(req, res){
    console.log("GET /contacts")
    res.json(contacts)


})


app.get("/vehicles", function(req, res){
    console.log("GET /vehicles")
    res.json(vehicles)
})


app.get("/comments", function(req, res){
    console.log("GET /comments")
    res.json(comments)
})


app.get("/products", function(req, res){
    console.log("GET /products")
    res.json(products)
    
})



app.get("/contacts/:id", function(req, res){
    console.log("/GET /contacts/:id", req.params.id)

    let found = contacts.find(objeto => objeto._id == req.params.id) //como eh um find, por isso esta voltando algo (find retorna o primeiro abjto encontrado)
        res.json(found)

})

app.get("/vehicles/:id", function(req, res){
    console.log("/GET /vehicles/:id", req.params.id)
    let found = vehicles.find(objeto => objeto._id == req.params.id) 
    res.json(found)
})
app.get("/comments/:id", function(req, res){
    console.log("/GET /comments/:id", req.params.id)
    let found = contacts.find(objeto => objeto._id == req.params.id) 
    res.json(found)
})
app.get("/products/:id", function(req, res){ //nesse exemplo eu usei o if ao invez das outras opcoes resumidas  
    console.log("/GET /products/:id", req.params.id)
    let found = products.find(function(x){
        if(x._id == req.params.id){
        return true
        }
    })
    res.json(found)
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
