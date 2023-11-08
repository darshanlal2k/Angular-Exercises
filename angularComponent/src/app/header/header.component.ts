import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  slogan:string = 'flipkart Big Billion Sales'

  source : string = "/assets/flipart_Img.jpeg"
  getslogan(){
    return 'This is new slogan for web '
  }
}
