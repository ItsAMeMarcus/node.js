const express = require('express')
const req = require('express/lib/request')
const server = express()

server.use(express.json())

const teste = [
    {
        "userId": 0,
        "id": 1, 
        "title": "teste",
        "body": "exemplo" 
    }
    ,{
        "userId": 1,
        "id": 2,
        "title": "teeeqwste",
        "body": "eexemplo"
    },
    {
        "userId": 2,
        "id": 3,
        "title": "teste",
        "body": "exewermplo"
    },
    {
        "userId": 3,
        "id": 4,
        "title": "tewereeste",
        "body": "eexeasdmplo"
    }
]

//retornar só um "teste"

server.get('/teste', (req, res) => {
    return res.json(teste)
})

server.get('/teste/uc', (req, res) => {
    return res.send('<h1>Olá mundo</h1><p>Testando HTML pelo backend</p>')
})

//retornar todos os "teste"

server.get('/teste/:id', (req,res) => {
    return res.json(teste[req.params.id])
})

//insere um "teste"

server.post('/teste', (req, res) => {
    const { userId, id, title, body } = req.body
    teste.push({userId, id, title,body});
    return res.json(teste)
})

//edita uma posicao "teste"

server.put('/teste/:index', (req, res) => {
    const { index } = req.params
    const { userId, id, title, body } = req.body

    teste[index] = {userId, id, title,body};

    return res.json(teste)
})

//deleta um "teste"


server.delete('/teste/:id', (req, res) => {
    
    const { id } = req.params

    teste.splice(id,1)

    return res.send()
})

server.use((req,res,next) => {
    console.time('Request')
    console.log(`Método: ${req.method}; URL: ${req.url};`)

    next()

    console.log('Finalizou')

    console.timeEnd('Request')
})

function checkTesteExist(req, res, next) {
    if(!noq.body.name) {
        return res.status(400).json({ error: 'teste name is required'})
    }

    return next()

}

function checkTesteInArray(req, res, next){
    const teste = testes[req.params.index]
    if (!geek){
        return res.status(400).json({ error: 'teste does not exists'})
    }

    req.teste = teste

    return next()
}

server.post('/teste', checkTesteExist, (req, res) => {
    const { name } = req.body
    teste.push(name);
    return res.json(teste)
})

server.put('/teste/:index',checkTesteInArray,checkTesteExist,(req,res) => {
    const { index } = req.params
    const { name } = req.body

    teste[index] = name

    return res.json(teste)
})

server.listen(8000, function(){
    console.log('Servidor funcionando localmente :) ')
});