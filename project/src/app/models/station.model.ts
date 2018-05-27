import { Usuario } from "./usuario.model";
import { Post } from "./post.model";

export class Station{
    name: String;
    users: Usuario [];
    posts: Post [];
    constructor(name, users, posts){
        this.name = name;
        this.users = users;
        this.posts = posts;
    }
}