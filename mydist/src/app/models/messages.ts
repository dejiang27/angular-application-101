//messages class
import { Message } from './message';

export class Messages {
    messages:Array<Message>;

    constructor(){}
    
    //Add message to the messages array.
    appendMessage(message:Message){
        this.messages.push(message);
    }
}
