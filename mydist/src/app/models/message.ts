//message class
export class Message {
    timestamp:string;
    text:string;
    constructor(timestamp:string, text:string){
        this.timestamp = timestamp;
        this.text = text;
    }
}
