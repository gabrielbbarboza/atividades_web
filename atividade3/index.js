const express = require('express');
const app = express();
const PORT = 3000;

// Nosso "banco de dados" temporário em memória
let estoque = [];

// Rota: Adicionar um novo produto
// Exemplo: /adicionar/1/teclado/10
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    const novoProduto = { 
        id: id, 
        nome: nome, 
        quantidade: parseInt(qtd) 
    };
    estoque.push(novoProduto);
    res.send(`Produto ${nome} adicionado com sucesso!`);
});

// Rota: Listar todos os produtos
app.get('/listar', (req, res) => {
    res.json(estoque);
});

// Rota: Remover um produto pelo ID
app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    estoque = estoque.filter(p => p.id !== id);
    res.send(`Produto com ID ${id} removido.`);
});

// Rota: Editar a quantidade de um produto
// Exemplo: /editar/1/50
app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    const produto = estoque.find(p => p.id === id);
    
    if (produto) {
        produto.quantidade = parseInt(qtd);
        res.send(`Quantidade do produto ${produto.nome} atualizada para ${qtd}.`);
    } else {
        res.status(404).send('Produto não encontrado.');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
