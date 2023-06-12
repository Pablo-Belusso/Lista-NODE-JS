const express = require('express'); // puxa o framework EXPRESS
const path = require('path'); // módulo nativo do NODE
var bodyParser = require('body-parser'); // dependência instalada do NODE

const app = express();

// BODY-PARSER
app.use( bodyParser.json() );     //suporta arquivos "json"
app.use( bodyParser.urlencoded({    // suporta URL codificada
    extended:true
}));

// -- Para usar o arquivo HTML 
app.engine('html',require('ejs').renderFile); // renderiza a engine pra html utilizando ejs
app.set('view engine','html'); // seta a view engine para html
app.use('/public', express.static(path.join(__dirname, 'public'))); // O diretório estático será na pasta "public"
app.set('views', path.join(__dirname,'/views')); // aponta para a pasta "views"


// ARRAY
var tarefas = ['Arrumar o quarto','Comprar no mercado agora'];

// -- CONEXÃO e mostra as tarefas do ARRAY "tarefas"
app.get('/',(req,res) => { 
    
    res.render('index',{tarefasList:tarefas}); 

});


// INSERIR Tarefa
app.post('/', (req,res) =>{
    tarefas.push(req.body.tarefaInput);
    res.render('index',{tarefasList:tarefas}); 
});


// -- DELETA as "tarefas"
app.get('/deletar/:id',(req,res) => { 
    tarefas = tarefas.filter(function(val,index){
        if (index != req.params.id){
            return val;
        }
    })
    
    res.render('index',{tarefasList:tarefas}); 

});


// -- PORTA DO SERVIDOR
app.listen(5000,() => {
    console.log('servidor rodando OK!');
})