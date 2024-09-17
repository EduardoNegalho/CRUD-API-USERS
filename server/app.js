import express from 'express';
import cors from 'cors';

// importando o arquivo de rotas
import usersRoutes from './routes/usersRoutes.js';

// criando uma instância do express
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', usersRoutes);

app.listen(3000)