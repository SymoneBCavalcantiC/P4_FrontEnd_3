class Pessoa {
    constructor (nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }


exibirInfo() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
    console.log(`Profissão: ${this.profissao}`);
}

}

const sobrinha = new Pessoa("Pilar", 3, "Engenheira de Software"); 
sobrinha.exibirInfo();



