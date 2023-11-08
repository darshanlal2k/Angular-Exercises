import { Component } from "@angular/core";

@Component({
  selector: 'app-success-alert',
  template: `<p>This is success alert</p>`,
  styles: [`
    p {
      padding: 20px;
      background-color: lightgreen;
      border : 2px solid green;
    }
  `],
})
export class successAlertComponent {

}
