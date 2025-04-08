function conversorDollar() {
    const perguntaUsuario = Number(prompt("Digite em Reais")).toFixed(2);
    const converterReais = perguntaUsuario * 6;
    const valorFinal = converterReais.toFixed(2);
    alert(`Resultado em Dollar é: R$ ${valorFinal}`);
}

function conversorReais() {
    const perguntaUsuario = Number(prompt("Digite em Dollar")).toFixed(2);
    const converterReais = perguntaUsuario * 0.20;
    const valorFinal = converterReais.toFixed(2);
    alert(`Resultado em Reais é: R$ ${valorFinal}`);
}

function conversorEuro() {
    const perguntaUsuario = Number(prompt("Digite em Reais")).toFixed(2);
    const converterReais = perguntaUsuario * 6.50;
    const valorFinal = converterReais.toFixed(2);
    alert(`Resultado em Euro é: R$ ${valorFinal}`);
}

function conversorIene() {
    const perguntaUsuario = Number(prompt("Digite em Reais")).toFixed(2);
    const converterReais = perguntaUsuario * 25;
    const valorFinal = converterReais.toFixed(2);
    alert(`Resultado em Iene é: R$ ${valorFinal}`);
}