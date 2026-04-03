function transporMatriz(A) {
    console.log("Matriz Original:");
    imprimirMatriz(A);

    // Se a matriz estiver vazia, retorna ela mesma
    if (A.length === 0) return;

    let numLinhas = A.length;
    let numColunas = A[0].length;
    let transposta = [];

    // Construindo a matriz transposta
    for (let j = 0; j < numColunas; j++) {
        transposta[j] = [];
        for (let i = 0; i < numLinhas; i++) {
            transposta[j][i] = A[i][j];
        }
    }

    console.log("\nMatriz Transposta:");
    imprimirMatriz(transposta);
}

// Função auxiliar para imprimir a matriz de forma legível
function imprimirMatriz(M) {
    for (let linha of M) {
        console.log(`[ ${linha.join(' ')} ]`);
    }
}

// Exemplo de teste baseado na imagem enviada
const matrizA = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matrizA);