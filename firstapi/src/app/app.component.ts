import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'firstapi';
  events: any;
  constructor(private bookService: BookService) {

  }
  ngOnInit(): void {
    this.events = this.bookService.username;
    this.bookService.getSampleData()
      .subscribe((response): any => {
        console.log(response);
      },
      (error) =>{
        console.log(error);
      }
      )
  }
}
