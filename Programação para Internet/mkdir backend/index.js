const express = require('express')

const app = express()

const PORT = 4000
app.use(express.json()) // Denfinimos que o backend fará o parse do JSON

// Definindo a primeira rota
app.get('/', (req, res) =>{
    res.json({
        mensagem: 'API 100% funcionando!',
        versao: '1.0.0'
    })
})

// Carregando o servidor web
app.listen(PORT, (req, res) =>{
    console.log(`Servidor web roando na porta ${PORT}`)
})