import { Station } from './station.model';
import { Usuario } from "./usuario.model";
import { Comment } from './comment.model';

export class Post {
    _id: string;
    user;
    station;
    content: string;
    description: string;
    date;
    constructor(_id, user, station, content, description, date){
        this._id = _id
        this.user = user;
        this.station = station;
        this.content = content;
        this.description = description;
        this.date = date;
    }
}
