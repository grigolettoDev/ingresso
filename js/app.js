
//Variáveis globais
const elementoQtdInferior = document.getElementById("qtd-inferior");
const elementoQtdSuperior = document.getElementById("qtd-superior");
const elementoQtdPista = document.getElementById("qtd-pista");

let qtdInferior = parseInt(elementoQtdInferior.textContent);
let qtdSuperior = parseInt(elementoQtdSuperior.textContent);
let qtdPista = parseInt(elementoQtdPista.textContent);

const tipoInferior = "inferior";
const tipoSuperior = "superior";
const tipoPista = "pista";

function comprar (){

    let tipoIngresso = pegaValores("tipo-ingresso");
    let qtdIngresso = parseInt(pegaValores("qtd"));
    console.log(tipoIngresso);
    console.log(qtdIngresso);
    subtraindoTotal(tipoIngresso,qtdIngresso);
    let verificacaoEsgotou = esgotou();

    if (verificacaoEsgotou=="Sim"){
        console.log("Esgotou");
    }else{
        adicionaValores();
    }
}

function pegaValores(id){

    let elementoHtml = document.getElementById(id);
    let valor = elementoHtml.value;
    return valor;
}

function subtraindoTotal(tipo,qtd){

    if(tipo==tipoInferior){
        qtdInferior = qtdInferior - qtd;
    } else if (tipo==tipoSuperior){
        qtdSuperior = qtdSuperior - qtd;
    } else if (tipo==tipoPista){
        qtdPista = qtdPista - qtd;
    } else{
        console.log("erro");
    }
}

function adicionaValores(){

    elementoQtdInferior.textContent = qtdInferior;
    elementoQtdPista.textContent = qtdPista;
    elementoQtdSuperior.textContent = qtdSuperior;

}

function esgotou(){
    let elementoSegundoTitulo = document.querySelector("h2");
    let esgotouLimite = "Não";
    if(qtdInferior<0){
        elementoSegundoTitulo.textContent = `Esgotou limite ${tipoInferior}`;
        esgotouLimite = "Sim";
        qtdInferior = 0;
    } else if (qtdSuperior<0){
        elementoSegundoTitulo.textContent = `Esgotou limite ${tipoSuperior}`;
        esgotouLimite = "Sim";
        qtdSuperior=0;
    } else if (qtdPista<0){
        elementoSegundoTitulo.textContent = `Esgotou limite ${tipoPista}`;
        esgotouLimite = "Sim";
        qtdPista = 0;
    } else {
        esgotouLimite = "Não";
    }

    return esgotouLimite;
}