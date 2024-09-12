// Importando o framework express 
import express from 'express';
// Importando o prisma 
import { PrismaClient } from '@prisma/client';

// Criando uma instância do express
const app = express();

// Crianod uma instância do prisma
const prisma = new PrismaClient();

// Possibilita o uso do JSON
app.use(express.json())

app.get('/users', async (req, res) => {
    // busca todos os usuários do db
    const users = await prisma.user.findMany();

    res.status(200).json(users);
})

app.post('/users', async (req, res) => {
    // criando um novo usuário no db
    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            password: req.body.password
        }
    })

    // enviando uma resposta
    res.status(201).json(req.body);
})


// Inicia a aplicação na porta 3000, essa informação sempre deve está no final
app.listen(3000);