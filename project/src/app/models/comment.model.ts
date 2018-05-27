import { Usuario } from "./usuario.model";
import { Post } from "./post.model";

export class Comment{
    user: Usuario;
    post: Post;
    text: string;
    constructor(user, post, text){
        this.user = user;
        this.post = post;
        this.text = text;
    }
}