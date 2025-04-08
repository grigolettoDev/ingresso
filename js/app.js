
//Variáveis globais
let elementoQtdInferior = document.getElementById("qtd-inferior");
let elementoQtdSuperior = document.getElementById("qtd-superior");
let elementoQtdPista = document.getElementById("qtd-pista");

let qtdInferior = parseInt(elementoQtdInferior.textContent);
let qtdSuperior = parseInt(elementoQtdSuperior.textContent);
let qtdPista = parseInt(elementoQtdPista.textContent);



function comprar (){

    //Pegar valores
    let tipoIngresso = pegaValores("tipo-ingresso");
    let qtdIngresso = parseInt(pegaValores("qtd"));
    console.log(tipoIngresso);
    console.log(qtdIngresso);
    //Subtrair valores
    //Verificar se foram esgotados

}

function pegaValores(id){

    let elementoHtml = document.getElementById(id);
    let valor = elementoHtml.value;
    return valor;
}