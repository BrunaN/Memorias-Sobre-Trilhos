import { Station } from './station.model';
import { Usuario } from "./usuario.model";
import { Comment } from './comment.model';

export class Post {
    user: Usuario;
    station: Station;
    content: string;
    description: string;
    comments: Comment [];
    constructor(user, station, content, description, comments){
        this.user = user;
        this.station = station;
        this.content = content;
        this.description = description;
        this.comments = comments;
    }
}