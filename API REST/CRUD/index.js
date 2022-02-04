const express = require('express')
const req = require('express/lib/request')
const server = express()

server.use(express.json())
const teste = ['teste01', 'teste02', 'teste03']

//retornar só um "teste"

server.get('/teste', (req, res) => {
    return res.json(teste)
})

//retornar todos os "teste"

server.get('/teste/:index', (req,res) => {
    return res.json(teste[req.user])
})

//insere um "teste"

server.post('/teste', (req, res) => {
    const { name } = req.body
    teste.push(name);
    return res.json(teste)
})

//edita uma posicao "teste"

server.put('/teste/:index', (req, res) => {
    const { index } = req.params
    const {name} = req.body

    teste[index] = name;

    return res.json(teste)
})

//deleta um "teste"

server.delete('/teste/:index', (req, res) => {
    const { index } = req.params

    teste.splice(index,1)

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

server.listen(3000);