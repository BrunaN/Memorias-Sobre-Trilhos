export class Usuario{
    _id: string
    name : string;
    email : string;
    password : string;
    // estado: string;
    // cidade: string;
    constructor(_id, name, email, password){
        this._id = _id;
        this.name = name;
        this.email = email;
        this.password = password;
        // this.estado = estado;
        // this.cidade = cidade;
    }
}