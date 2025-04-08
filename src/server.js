function conversor() {
    const perguntaUsuario = Number(prompt("Digite em Dolar")).toFixed(2);
    const converterReais = perguntaUsuario * 6;
    const valorFinal = converterReais.toFixed(2);
    alert(`Resultado em Reais é: R$ ${valorFinal}`);
}
