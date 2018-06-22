export class Usuario{
    _id: string
    name : string;
    email : string;
    password : string;
    avatar;
    estado: string;
    cidade: string;
    constructor(_id, name, email, password, avatar, estado, cidade){
        this._id = _id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.estado = estado;
        this.cidade = cidade;
    }
}
