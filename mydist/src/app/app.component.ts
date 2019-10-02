import { Component } from '@angular/core';
import { MessagesService } from './messages.service';
import { Messages } from './models/messages';
import { Message } from './models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  text : string;

  messages:Message[]=[];
  title = 'mydist';
  playerName: string;
  constructor(private ms:MessagesService){
    ms.appendmes();
    this.messages = ms.getmess();
  }
  submit(){
    //let text = newmess.value;

    var currentDate = new Date();
    var times = currentDate.toString();
    var newmess = new Message(times, this.text);
    this.messages.push(newmess);
  }

}
