// Importando o framework express 
import express from 'express'

// Criando uma instância do express
const app = express();

// Possibilita o uso do JSON
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Está ok!')
})




// Inicia a aplicação na porta 3000, essa informação sempre deve está no final
app.listen(3000);