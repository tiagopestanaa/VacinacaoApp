// NOTA INICIAL: este ficheiro fonte define a interação com a interface gráfica (GUI) da app; o "business object" da app está em vacinacaoapp.js

import { VacinacaoCovid19, Utente } from "./vacinacaoapp.js"; // Refereri a um objeto declarado como exportado naquele outro ficheiro

const vacinacoes = document.getElementById("vacinacoes"); // Uma <table> no HTML

let tr; // Referirão a novos elementos HTML a inserir na página
let td;

for (const vacinacao of VacinacaoCovid19.vacinacoes.values()) { // Criar uma iteração para obter todas as consultas
    tr = document.createElement("tr"); // Criar um <tr> a inserir na <table>
    vacinacoes.appendChild(tr);
    for (const campo of Object.values(vacinacao)) { // Iterar em todos os campos de cada consulta
        td = document.createElement("td"); // E criar uma celula <td> para a linha <tr> acima criada
        td.textContent = campo instanceof Date ? `${campo.toLocaleString()}` : `${campo}`; // Converter em string e inserir na celula
        tr.appendChild(td);
    }
}

let option;
let select = document.getElementById("vacinacao").utente; // Um <select> no formulário com id="vacinacao"

for (const utente of VacinacaoCovid19.utentes.keys()) { // Criar uma iteração para visualizar todos os numeros dos utentes
    option = document.createElement("option");
    option.setAttribute("value", utente);
    option.textContent = utente;
    select.appendChild(option);
}

select = document.getElementById("vacinacao").vacina; // Um <select> no formulário com id="vacina"

for (const vacina of VacinacaoCovid19.vacinas) {
    option = document.createElement("option");
    option.setAttribute("value", vacina.nome);
    option.textContent = vacina.nome;
    select.appendChild(option);
}

select = document.getElementById("vacinacao").centro; // Um <select> no formulário com id="centro"

for (const centro of VacinacaoCovid19.centrosvacinacao) {
    option = document.createElement("option");
    option.setAttribute("value", centro.nome);
    option.textContent = centro.nome;
    select.appendChild(option);
}

let formulário = document.getElementById("utente");
formulário.addEventListener("submit", criarUtente); // Aquando de registo de "listeners" (também chamados "handlers" ou "delegates"), é preciso nomear o evento e fornecer o nome da função a invocar

function criarUtente(submissão) { // Este é um método "callback, isto é, será invocado pelo navegador (e não pelo nosso código fonte)
    const formulário = submissão.target;
    submissão.preventDefault(); // Evitar que o página recarregue, o comportamento padrão aquando de submissão de formulários
    // Opcionalmente validar se os valores são conforme o que a app requer
    const utente = new Utente(formulário.nome.value, formulário.apelido.value, formulário.email.value);
    if (formulário.nascimento.value.length > 0)
        utente.nascimento = formulário.nascimento.value;
        VacinacaoCovid19.utentes.set(utente.numero, utente);
}

formulário = document.getElementById("vacinacao");
formulário.addEventListener("submit", criarVacinacao);

function criarVacinacao(submissão) {
    const formulário = submissão.target;
    submissão.preventDefault();
    VacinacaoCovid19.registarVacinacao(formulário.utente.value, formulário.vacina.value, formulário.centro.value, formulário.dose.value, new Date(formulário.data.value)); // A avaliação dos dados recebidos será feito no método invocado (porque os dados do formulário são apenas strings)
}

VacinacaoCovid19.addEventListener("Novo Utente", refrescarUtentes);
VacinacaoCovid19.addEventListener("Novo Utente", informar);
VacinacaoCovid19.addEventListener("Nova Vacinação", refrescarVacinacoes);
VacinacaoCovid19.addEventListener("Nova Vacinação", informar);

function refrescarUtentes() {
    const select = document.getElementById("vacinacao").utente; // Um <select> no formulário com id="vacinacao"
    while (select.firstChild)
        select.removeChild(select.firstChild); // Remover para poder reencher
    let option;
    for (const utente of VacinacaoCovid19.utentes.keys()) { // Criar uma iteração para visualizar todos os numeros dos utentes
        option = document.createElement("option");
        option.setAttribute("value", utente);
        option.textContent = utente;
        select.appendChild(option);
    }
}

function refrescarVacinacoes() {
    const vacinacoes = document.getElementById("vacinacoes"); // Uma <table> no HTML
    while (vacinacoes.firstChild)
        vacinacoes.removeChild(vacinacoes.firstChild); // Limpar antes de encher de novo
    let tr; // Referirão a novos elementos HTML a inserir na página
    let td;
    for (const vacinacao of VacinacaoCovid19.vacinacoes.values()) { // Criar uma iteração para obter todas as vacinações
        tr = document.createElement("tr"); // Criar um <tr> a inserir na <table>
        vacinacoes.appendChild(tr);
        for (const campo of Object.values(vacinacao)) { // Iterar em todos os campos de cada vacinação
            td = document.createElement("td"); // E criar uma celula <td> para a linha <tr> acima criada
            td.textContent = campo instanceof Date ? `${campo.toLocaleString()}` : `${campo}`; // Converter em string e inserir na celula
            tr.appendChild(td);
        }
    }

}

function informar(evento) {
    const resultado = document.getElementById("resultado");
    resultado.innerText = evento;
    resultado.parentNode.classList.toggle("resultado");
    setTimeout(() => {
        resultado.parentNode.classList.toggle("resultado");
    }, 5000);
    formulário = document.getElementById("vacinacao");
    formulário.utente.selectedIndex = formulário.utente.length - 1;
}

refrescarUtentes(); // Encher a lista de utentes existentes inicialmente
refrescarVacinacoes(); // Encher a tabela das vacinações existentes inicialmente

class Evento {
    mensagem;
}