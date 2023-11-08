import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  @Input() popValue: object = {};

  parentViewchildUsing: string = 'this value pass in parent'

  getValueParent: any;
  color: string = '';
  ngAfterContentChecked() {
    // this.getValueParent = JSON.parse(this.popValue);
    this.getValueParent = this.popValue;
    console.log(this.popValue);
    // console.log(this.getValueParent);

  }

  outButtonClose() {
    const openPop = document.getElementById('PopModal');
    if (openPop != null) {
      openPop.style.display = 'none';
    }
  }

}
