import { Usuario } from "./usuario.model";

export class Post {
    _id: string;
    user;
    station;
    content;
    video: string;
    description: string;
    date;
    likes;
    constructor(_id, user, station, content, video, description, date, likes){
        this._id = _id
        this.user = user;
        this.station = station;
        this.content = content;
        this.video = video;
        this.description = description;
        this.date = date;
        this.likes = likes;
    }
}
