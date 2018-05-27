import { Usuario } from "./usuario.model";
import { Post } from "./post.model";

export class Station{
    _id: string;
    name: string;
    users: Usuario [];
    posts: Post [];
    constructor(_id, name, users, posts){
        this._id = _id;
        this.name = name;
        this.users = users;
        this.posts = posts;
    }
}