import { Component } from '@angular/core';



// import { Component } from '@angular/core';
@Component({
  selector: 'app-apple-books',
  templateUrl: './appleBooks.component.html',
  styleUrls: ['./appleBooks.component.css']
})
export class AppleBooksComponent {
  constructor() { }
  ngOnInit() { }
  name: string = 'John Doe';

  // imageUrl = './assets/images/the-seo-guide-to-angular-1892400705.png';
  imageUrl = 'assets/images/the-seo-guide-to-angular-1892400705.png';
  handleClick() {
    console.log('Button clicked!');
  }
  username: string = 'JohnDoe';
}

