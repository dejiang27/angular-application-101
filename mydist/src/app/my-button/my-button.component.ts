import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  constructor(private myservice:MyServiceService) { }

  ngOnInit() {
  }

  likeImage:boolean = false;

  clicked(){
    this.likeImage = this.myservice.likeImage(this.likeImage);
    console.log(this.likeImage);
    return this.likeImage;
  }



}
