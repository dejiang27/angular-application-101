import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  likeImage:boolean;
  constructor(private myservice:MyServiceService) { }

  ngOnInit() {
    this.likeImage = false;
  }

  clicked(){
    this.likeImage = this.myservice.likeImage(this.likeImage);
    //Test the like button. Show the result in the console.
    console.log(this.likeImage);
    return this.likeImage;
  }

}
