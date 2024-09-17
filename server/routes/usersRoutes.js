// Importando o framework express 
import express from 'express';
// Importando o prisma 
import { PrismaClient } from '@prisma/client';
import cors from 'cors'

// Criando uma instância do express router
const router = express.Router();

// Crianod uma instância do prisma
const prisma = new PrismaClient();

// Possibilita o uso do JSON
router.use(express.json());
router.use(cors());

router.get('/users', async (req, res) => {

    let users = [];

    // desestruturando o obj req.query
    const { name, email, age } = req.query;

    const query = {}; // iniciando um obj vazio para criar a consulta

    if (name) query.name = name;
    if (email) query.email = email;
    if (age) {
        const parsedAge = parseInt(age);
        if (isNaN(parsedAge)) {
            return res.status(400).json({ erro: "Idade inválida fornecuda." });
        }
        query.age = parsedAge;
    }

    users = await prisma.user.findMany({
        where: query
    });

    res.status(200).json(users);
})

router.post('/users', async (req, res) => {
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

router.put('/users/:id', async (req, res) => {
    // atualizando os dados do user
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            password: req.body.password
        }
    })

    res.status(200).json(req.body);
})

router.delete('/users/:id', async (req, res) => {
    // excluindo um user do db
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ messege: 'Usuário deletado com sucesso.' });
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
                password: password
            }
        });

        if (!user) {
            return res.status(401).json({ success: false, error: 'Email ou senha inválida' });
        }

        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erro interno' });
    }
});

export default router;