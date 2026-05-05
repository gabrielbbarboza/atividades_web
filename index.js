const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Rota Principal: Carrega o formulário
app.get('/', (req, res) => {
    res.render('index', { erros: null, dados: {} });
});

// Rota de Agendamento: Processa os dados
app.post('/agendamento', (req, res) => {
    const dados = req.body;
    let erros = [];

    // Validação de campos vazios (exceto observação)
    for (let campo in dados) {
        if (campo !== 'observacao' && !dados[campo].trim()) {
            erros.push(`O campo ${campo} é obrigatório.`);
        }
    }

    // Validação da Data (deve ser posterior à data atual)
    const dataAgendamento = new Date(`${dados.data}T${dados.hora}`);
    const agora = new Date();

    if (dataAgendamento <= agora) {
        erros.push("A data do agendamento deve ser superior à data atual.");
    }

    if (erros.length > 0) {
        res.render('index', { erros, dados });
    } else {
        res.render('agendamento', { dados });
    }
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));