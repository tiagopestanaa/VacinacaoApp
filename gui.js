// NOTA INICIAL: este ficheiro fonte define a interação com a interface gráfica (GUI) da app; o "business object" da app está em vacinacaoapp.js

import { VacinacaoCovid19 } from "./vacinacaoapp.js"; // Refereri a um objeto declarado como exportado naquele outro ficheiro

const vacinacoes = document.getElementById("vacinacoes"); // Uma <table> no HTML

let tr; // Referirão a novos elementos HTML a inserir na página
let td;

for (const vacinacao of VacinacaoCovid19.vacinacoes.values()) { // Criar uma iteração para obter todas as consultas
    tr = document.createElement("tr"); // Criar um <tr> a inserir na <table>
    consultas.appendChild(tr);
    for (const campo of Object.values(vacinacao)) { // Iterar em todos os campos de cada consulta
        td = document.createElement("td"); // E criar uma celula <td> para a linha <tr> acima criada
        td.textContent = campo instanceof Date ? `${campo.toLocaleString()}` : `${campo}`; // Converter em string e inserir na celula
        tr.appendChild(td);
    }
}