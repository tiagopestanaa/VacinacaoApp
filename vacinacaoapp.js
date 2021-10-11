const nome = "VacinacaoCovid19"; // Declarar uma constante e atribuir-lhe o valor "VacinacaoCovid-19" (um 'string', uma cadeia de carateres)

 // Definir tipos (classes) de objetos que a app gerirá ("type of objects")
class Utente {
    Nome;
    NrUtente;
    Genero;
    #Nascimento;

    constructor(Nome, NrUtente, Genero) { // Ao adicionar construtores, já não é necessário definir campos em instruções separadas
        this.Nome = Nome; // Declaração de campos que identificarão os utentes
        this.NrUtente = NrUtente; 
        this.Genero = Genero;
    /*toString() { 
        return `${this.InformacaoUtente} (° ${this.#Nascimento})`;*/
    }
    get InformacaoUtente () { // Propriedade (método "getter") que reproduz a informação completa do Utente
        return `${this.Nome} ${this.NrUtente} ${this.Genero}`; // String template syntax (alternativa a "adição" de strings com o operador '+')
    }
    set Nascimento(data) { // Propriedade (método "setter") que coloca um valor no campo privado (o que não foi feito no construtor)
        this.#Nascimento = data; // Este campo é privado, isto é, invisível para outros objetos
    }
}

class Vacina {
    Nome;
    EDoseUnica;
    IntervaloEntreDoses;

}

class Centro_Vacinacao {
    Nome;
    Morada;
    Distrito;
}

class Vacinacao {
    Utente;
    Vacina;
    Centro_Vacinacao;
    Data;
    NrDose;

}
