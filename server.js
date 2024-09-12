// Importando o framework express 
import express from 'express'

// Criando uma instância do express
const app = express();

// Possibilita o uso do JSON
app.use(express.json())

const users = [];

app.get('/users', (req, res) => {
    // Verifica se existe usuários cadastrados
    if (users.length === 0) {
        console.log('Nenhum usuário encontrado');
        return res.status(404).json({message: "Nenhum usuário encontrado"});
    }

    res.status(200).json(users);
})

app.post('/users', (req, res) => {
    users.push(req.body); // => adiciona um novo usuário ao array de users

    // Envia um status de criação, e retorna o usuário criado
    res.status(201).json(req.body);
})


// Inicia a aplicação na porta 3000, essa informação sempre deve está no final
app.listen(3000);