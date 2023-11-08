import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() private numberGenerated1 = new EventEmitter;
  counter: number = 0;
  counterNumber() {
    this.numberGenerated1.emit(this.counter);
  }
  ngOnInit() {
    setInterval(() => { this.counter++ }, 1000)
  }

}
