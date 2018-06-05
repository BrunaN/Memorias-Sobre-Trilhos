import { Usuario } from "./usuario.model";

export class Post {
    _id: string;
    user;
    station;
    content: string;
    description: string;
    date;
    likes: Usuario [];
    constructor(_id, user, station, content, description, date, likes){
        this._id = _id
        this.user = user;
        this.station = station;
        this.content = content;
        this.description = description;
        this.date = date;
        this.likes = likes;
    }
}
