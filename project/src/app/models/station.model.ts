import { Usuario } from "./usuario.model";
import { Post } from "./post.model";

export class Station{
    _id: string;
    id: string;
    name: string;
    users: Usuario [];
    posts: Post [];
    photo: string;
    constructor(_id, name, users, posts, photo, id){
        this._id = _id;
        this.name = name;
        this.users = users;
        this.posts = posts;
        this.id = id;
        this.photo = photo;
    }
}
