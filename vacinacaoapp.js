const nome = "VacinacaoCovid19"; // Declarar uma constante e atribuir-lhe o valor "VacinacaoCovid-19" (um 'string', uma cadeia de carateres)

 // Definir tipos (classes) de objetos que a app gerirá ("type of objects")
class Utente {
    nome;
    numero;
    genero;
    #nascimento;

    constructor(nome, numero, genero) { // Ao adicionar construtores, já não é necessário definir campos em instruções separadas
        this.nome = nome; // Declaração de campos que identificarão os utentes
        this.numero = numero; 
        this.genero = genero;
    }
    toString() { 
        return `${this.InformacaoUtente} (° ${this.#nascimento})`;
    }
    get InformacaoUtente () { // Propriedade (método "getter") que reproduz a informação completa do Utente
        return `${this.nome} ${this.nrUtente} ${this.genero}`; // String template syntax (alternativa a "adição" de strings com o operador '+')
    }
    set Nascimento(data) { // Propriedade (método "setter") que coloca um valor no campo privado (o que não foi feito no construtor)
        this.#nascimento = data; // Este campo é privado, isto é, invisível para outros objetos
    }
}

class Vacina {
    nome;
    tipo;
    eficacia;
    nrAdministracoes; 
    intervaloEntreDoses; /*Número de semanas*/

    constructor(nome,tipo,eficacia, nrAdministracoes, intervaloEntreDoses) { // Ao adicionar construtores, já não é necessário definir campos em instruções separadas
        this.nome = nome; // Declaração de campos que identificarão as vacinas
        this.tipo = tipo; 
        this.eficacia = eficacia;
        this.nrAdministracoes = nrAdministracoes;
        this.intervaloEntreDoses = intervaloEntreDoses;
    }
    
    toString() { 
        return `${this.InformacaoVacina}`;
    }
    get InformacaoVacina () { // Propriedade (método "getter") que reproduz a informação completa da Vacina
        return `${this.nome} ${this.tipo} ${this.eficacia} ${this.nrAdministracoes} ${this.intervaloEntreDoses}`; // String template syntax (alternativa a "adição" de strings com o operador '+')
    }
    
}

class CentroVacinacao {
    nome;
    morada;
    distrito;

    constructor(nome, morada, distrito) { // Ao adicionar construtores, já não é necessário definir campos em instruções separadas
        this.nome = nome; // Declaração de campos que identificarão os centros de vacinação
        this.morada = morada; 
        this.distrito = distrito;
    }

    toString() { 
        return `${this.InformacaoCentroVacinacao}`;
    }
    get InformacaoCentroVacinacao () { // Propriedade (método "getter") que reproduz a informação completa do Utente
        return `${this.Nome} ${this.Morada} ${this.Distrito}`; // String template syntax (alternativa a "adição" de strings com o operador '+')
    }
    set Nascimento(data) { // Propriedade (método "setter") que coloca um valor no campo privado (o que não foi feito no construtor)
        this.#Nascimento = data; // Este campo é privado, isto é, invisível para outros objetos
    }
}

class Vacinacao {
    Utente;
    Vacina;
    Centro_Vacinacao;
    Data;
    NrDose;/*1ª,2ª,3ª...*/

}
