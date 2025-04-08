
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

let elementoSegundoTitulo = document.querySelector("h2");

function comprar (){

    let tipoIngresso = pegaValores("tipo-ingresso");
    let qtdIngresso = parseInt(pegaValores("qtd"));
    console.log(tipoIngresso);
    console.log(qtdIngresso);
    subtraindoTotal(tipoIngresso,qtdIngresso);
}

function pegaValores(id){

    let elementoHtml = document.getElementById(id);
    let valor = elementoHtml.value;
    return valor;
}

function subtraindoTotal(tipo,qtd){

    if(tipo==tipoInferior){
        if ((qtdInferior - qtd)>=0){
        qtdInferior = qtdInferior - qtd;
        adicionaValores();
         }  else{
            esgotou();
         }
    } else if (tipo==tipoSuperior){
        if ((qtdSuperior - qtd)>=0){
        qtdSuperior = qtdSuperior - qtd;
        adicionaValores();
         } else{
            esgotou();
         }
    } else if (tipo==tipoPista){
        if ((qtdPista-qtd)>=0){
        qtdPista = qtdPista - qtd;
        adicionaValores();
         } else{
            esgotou();
         }
    } else{
        console.log("erro");
    }
}

function adicionaValores(){

    elementoQtdInferior.textContent = qtdInferior;
    elementoQtdPista.textContent = qtdPista;
    elementoQtdSuperior.textContent = qtdSuperior;
    elementoSegundoTitulo.textContent = "Compra realizada com sucesso";

}

function esgotou(){
   
     elementoSegundoTitulo.textContent = `Não é possível essa Qtde`;
}