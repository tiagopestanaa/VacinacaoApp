export const VacinacaoCovid19 = { // Declarar uma constante e atribuir-lhe valores iniciais, p.ex. um nome
    nome: "Plano Vacinação Covid-19"
}; // Ao ser mais do que um simples string constante, posteriormente pode-se acrescentar campos, construindo assim o "Object Tree" da Vacinação Covid-19

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
        return `${this.InformacaoUtente}`;
    }
    get InformacaoUtente () { // Propriedade (método "getter") que reproduz a informação completa do Utente
        return `${this.nome} nº ${this.numero}`; // String template syntax (alternativa a "adição" de strings com o operador '+')
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
        return `${this.nome} - ${this.tipo} - ${this.eficacia} - ${this.nrAdministracoes} doses - ${this.intervaloEntreDoses} semanas de intervalo`; // String template syntax (alternativa a "adição" de strings com o operador '+')
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
        return `${this.nome} - ${this.morada} - ${this.distrito}`;
    }

}

class Vacinacao {
    utente;
    vacina;
    centro_vacinacao;
    data;
    hora;
    dose;/*1ª,2ª,3ª...*/

    constructor(utente, vacina, centro_vacinacao, data, hora, dose) { // Ao adicionar construtores, já não é necessário definir campos em instruções separadas
        this.utente = utente; // Declaração de campos que identificarão as vacinações
        this.vacina = vacina; 
        this.centro_vacinacao = centro_vacinacao;
        this.data = data; 
        this.hora = hora;
        this.dose = dose; 
    }

    toString() { 
        return `${this.utente} - ${this.vacina} - ${this.centro_vacinacao} - ${this.data} - ${this.hora} - ${this.dose} dose`;
    }

}

// Simular a existência de muitos utentes, vacinas, alguns centros de vacinação e simular o registo de vacinações

const ricardo = new Utente("Ricardo Oliveira", "123456", "M",); // Instanciações da classe Paciente; na constante guardamos a referência ao novo objeto na memória
const joana = new Utente("Joana Silva", "654321", "F"); // "new" invocará o construtor ao qual passamos argumentos, que serão guardados nos campos do objeto
const hugo = new Utente("Hugo Vieira", "963258", "M");
const patricia = new Utente("Patrícia Ferraz", "741258", "F");
ricardo.nascimento = "14/5/1989"; // Não obrigado pelos parâmetros do construtor, acrescentará-se a data de nascimento posteriormente, quando conhecida
joana.nascimento = "26/9/2011";

const pfizer = new Vacina("Pfizer", "mRNA", "95%", 2, 12);
const moderna = new Vacina("Moderna", "mRNA", "94%", 2, 12);
const astrazeneca = new Vacina("Astrazeneca", "Vetor Viral", "90%", 2, 14);
const johnson = new Vacina("Johnson&Johnson", "Vetor Viral", "92%", 1, 0);

const centro1 = new CentroVacinacao("ADC Mafra", "Av. Dr. Francisco Sá Carneiro – 2640-486 Mafra", "Lisboa");
const centro2 = new CentroVacinacao("AL-Vita – UC", "Av. Miguel Bombarda 9, 8500-299 Portimão, Portugal", "Faro");
const centro3 = new CentroVacinacao("CENTRO DE VACINAÇÃO – ÁGUEDA", "Avenida Dom Manuel de Almeida Trindade 3810-164 Aveiro", "Aveiro");
const centro4 = new CentroVacinacao("CENTRO DE VACINAÇÃO – AMORA", "Rua Manuel Teixeira Gomes, n  1 – 2845-360 AMORA", "Setúbal");

const vacinacao1 = new Vacinacao(ricardo, pfizer, centro1, new Date(2021, 11, 1), "08:00:00","2ª dose");
const vacinacao2 = new Vacinacao(joana, moderna, centro2,new Date(2021, 11, 6), "10:30:00","2ª dose");
const vacinacao3 = new Vacinacao(hugo, johnson, centro3, new Date(2021, 11, 12), "15:25:00","1ª dose");
const vacinacao4 = new Vacinacao(patricia, astrazeneca, centro4, new Date(2021, 11, 25), "18:00:00","1ª dose");

// Agregar os objetos em coleções, para facilitar a sua gestão como unidade e para facilitar a procura de certos objetos (baseado em critérios de procura)

const vacinas = []  // Instanciação de um Array (conhecido como "List" em outras linguagens), alternativa a "new Array()"
const utentes = new Map(); // Uma coleção que facilita a obtenção dos seus elementos, conhecendo o valor de primeiria coluna
const vacinacoes = new Set(); // Uma coleção que garante unicidade, p.ex. se, por engano, uma vacinação for adicionada 2 vezes, será ignorada
const centrosvacinacao = new Set();

vacinas.push(pfizer);
vacinas.push(moderna);
vacinas.push(astrazeneca);
vacinas.push(johnson);

utentes.set(ricardo.numero, ricardo); // Para colecionar pessoas, o Map é muito útil, porque o número de Utente, que é único para cada pessoa, pdoe servir de "Key" no Map
utentes.set(joana.numero, joana);
utentes.set(hugo.numero, hugo);
utentes.set(patricia.numero, patricia);

vacinacoes.add(vacinacao1);
vacinacoes.add(vacinacao2);
vacinacoes.add(vacinacao3);
vacinacoes.add(vacinacao4);

centrosvacinacao.add(centro1);
centrosvacinacao.add(centro2);
centrosvacinacao.add(centro3);
centrosvacinacao.add(centro4);

// Agregar todo no objeto inicial, para finalizar o "object tree"

Object.defineProperties(VacinacaoCovid19, { // Método estático para redefinir objetos existentes
    utentes: { value: utentes, writable: false }, // Evitar a alteração deste campo (o que não impede a alteração dos campos do campo)
    vacinas: { value: vacinas, writable: false },
    centrosvacinacao: { value: centrosvacinacao, writable: false },
    vacinacoes: { value: vacinacoes, writable: false }
});
