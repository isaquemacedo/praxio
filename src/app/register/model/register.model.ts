export class RegisterModel {
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    cep: string;
    logradouro: string;
    numero: string;
    bairro: string;
    telefone: string;

    constructor(nome: string, cpf:string, email: string, senha: string,
        cep: string, logradouro: string, numero: string, bairro: string, telefone: string) {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.senha = senha
        this.cep = cep
        this.logradouro = logradouro
        this.numero = numero
        this.bairro = bairro
        this.telefone = telefone
    }
}
