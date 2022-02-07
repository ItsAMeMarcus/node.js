const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://0.0.0.0:27017"
const dbName = 'mongodbcomcrud'

//criando conexão com o banco de dados
MongoClient.connect(uri, (err, client) => {
    if (err) return console.log(err);
    db = client.db('mongodbcomcrud');

    app.listen(3000, () => {
        console.log('server rodando na porta 3000 :o');
    })

    

})

//obtendo valores de entrada e jogando em req.body
app.use(bodyParser.urlencoded({ extended: true}));

//engine pra usar HTML 
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index.ejs');
})

app.get('/', (req,res) => {
    let cursor = db.collection('data').find();
})

app.get('/show', (req,res) => {
    db.collection('data').find().toArray((err,results) => {
        if(err) return console.log(err);
        res.render('show.ejs', { data: results });
    })
})

//jogando valores de entrada em req.body
app.post('/show', (req,res) => {
    db.collection('data').insertOne(req.body, (err, results) => {
        if(err) return console.log(err);

        console.log('Salvo no Banco de Dados :)');
        res.redirect('/show');
        db.collection('data').find().toArray((err,results) => {
            console.log(results);
        })

    })
})


app.route('/edit/:id') //pegando os dados a serem atualizados
.get((req,res) => {
    var id = req.params.id
    db.collection('data').find(ObjectId(id)).toArray((err,result) =>{
        if(err) return res.send(err)
        res.render('edit.ejs', { data: result})
    })
}) //atualizando os dados pegos em req.body
.post((req,res) => {
    var id = req.params.id
    var name = req.body.name
    var surname = req.body.surname

    db.collection('data').updateOne({_id: ObjectId(id)}, {
        $set: {
            name: name,
            surname: surname
        }
    }, (err,result) => {
        if(err) return res.send(err);
        res.redirect('/show');
        console.log('Banco de Dados atualizado com sucesso :D ')
    })
})

app.route('/delete/:id')
.get((req,res) => {
    var id = req.params.id

    db.collection('data').deleteOne({_id: ObjectId(id)}, (err,result) => {
        if (err) return res.send(500, err)
        console.log('Deletado do Banco de Dados com sucesso >:)')
        res.redirect('/show')
    })
})