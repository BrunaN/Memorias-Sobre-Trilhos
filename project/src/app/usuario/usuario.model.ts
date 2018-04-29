export class Usuario{
    id : string;
    nome : string;
    email : string;
    senha : string;
    cidade: string;
    constructor(id, nome, email, senha, cidade){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cidade = cidade;
    }
}