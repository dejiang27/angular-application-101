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
  messages:Message[]=[];
  title = 'mydist';

  constructor(private ms:MessagesService){
    ms.appendmes();
    this.messages = ms.getmess();
  }
}
