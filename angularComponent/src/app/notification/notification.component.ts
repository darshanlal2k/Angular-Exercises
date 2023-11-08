import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="bg-warning text-center " [ngClass]="{fadeOut : displayNotification}">
    <p>this website uses cookies for products </p>
    <div class="close"> 
      <button class="btn" (click)="closeNotification()">X</button>
    </div>
  </div>`,
  styles: ["div{ margin:10px 0px; padding: 10px 20px; text-align:center;}","p{font-size:15px;}",
  ".close{ float:right; margin-top: -50px; }", 
  ".fadeOut{ visibility : hidden; opacity : 0; transition : visibility 0s 2s, opacity 2s linear;}"

]})

  export class NotificationComponent {

    displayNotification: boolean = false

    closeNotification(){
      this.displayNotification = true;
    }

}
