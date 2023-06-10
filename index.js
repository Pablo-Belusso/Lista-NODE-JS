const express = require('express'); // puxa o framework EXPRESS
const path = require('path'); // módulo nativo do NODE

const app = express();

// -- Para usar o arquivo HTML 
app.engine('html',require('ejs').renderFile); // renderiza a engine pra html utilizando ejs
app.set('view engine','html'); // seta a view engine para html
app.use('/public', express.static(path.join(__dirname,'public'))); // diz que o diretório estático seja na pasta "public"
app.set('views', path.join(__dirname,'/views')); // aponta para a pasta "views"


var tarefas = ['Arrumar o quarto','Comprar no mercado'];

// -- CONEXÃO
app.get('/',(req,res) => { 
    
    res.render('index',{tarefasList:tarefas}); 

    //res.render('index',{nome:'Pablo Belusso'});
    //res.send('A página foi carregado corretamente!')
});


// -- PORTA DO SERVIDOR
app.listen(5000,() => {
    console.log('servidor rodando OK!');
})