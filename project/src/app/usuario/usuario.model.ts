export class Usuario{
    id : string;
    nome : string;
    email : string;
    senha : string;
    estado: string;
    cidade: string;
    constructor(id, nome, email, senha, estado, cidade){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.estado = estado;
        this.cidade = cidade;
    }
}