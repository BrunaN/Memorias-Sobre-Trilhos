import { Usuario } from "./usuario.model";
import { Post } from "./post.model";

export class Comment{
    _id: string;
    user: Usuario;
    post: string;
    text: string;
    date;
    likes;
    constructor(_id, user, post, text, date, likes){
        this._id = _id;
        this.user = user;
        this.post = post;
        this.text = text;
        this.date = date;
        this.likes = likes;
    }
}
