import { Injectable } from '@angular/core';

//import message,messages, and user classes to the service
import{ Message } from './models/message';
import{ Messages } from './models/messages';
import{ User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  timestamp:string;
  text:string;
  mess = new Messages;

  constructor() { }

  //Create some messages  
  mes = new Message("Mon Sep 20 2019 17:45:00", "How is your day going?");
  mes1 = new Message("Mon Sep 20 2019 17:49:47", "Quite busy. I'm doing my homework and it is due in three days.");
  mes2 = new Message("Mon Sep 20 2019 17:55:32", "You must feel stressed out now!");
  mes3 = new Message("Mon Sep 20 2019 18:01:01", "Yes! I need to take a break after I finish this homework.");
  mes4 = new Message("Mon Sep 20 2019 18:03:00", "Do you have any questions about your homework?");
  mes5 = new Message("Mon Sep 20 2019 18:05:12", "I'm good, Thanks for asking!");
  mes6 = new Message("Mon Sep 20 2019 18:07:01", "Okay, good lock! See you soon!");
  mes7 = new Message("Mon Sep 20 2019 18:07:40", "See you!");

  //Add message to the Messages array.
  appendmes(){
    this.mess.appendMessage(this.mes);
    this.mess.appendMessage(this.mes1);
    this.mess.appendMessage(this.mes2);
    this.mess.appendMessage(this.mes3);
    this.mess.appendMessage(this.mes4);
    this.mess.appendMessage(this.mes5);
    this.mess.appendMessage(this.mes6);
    this.mess.appendMessage(this.mes7);
  }

  


}
