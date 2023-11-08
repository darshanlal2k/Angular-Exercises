import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  title: string = 'Child Counter : ';
  @Output() private testingChild: any = new EventEmitter;
  counter: number = 0;
  timing: any;
  ngOnInit() {
    this.timing = setInterval(() => { this.counter++ }, 1000);
  }
  stopTimer() {
    console.log(this.timing);
    clearInterval(this.timing);
    this.testingChild.emit(this.timing);
  }
}
