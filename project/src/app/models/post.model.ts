import { Station } from './station.model';
import { Usuario } from "./usuario.model";
import { Comment } from './comment.model';

export class Post {
    user: Usuario;
    station: Station;
    content: string;
    comments: Comment [];
    constructor(user, station, content, comments){
        this.user = user;
        this.station = station;
        this.content = content;
        this.comments = comments;
    }
}