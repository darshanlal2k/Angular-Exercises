import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from './services/book.service';
import { BooksComponent } from './books/books.component';
import { DarshanLalComponent } from './darshan-lal/darshan-lal.component';
import { FormsModule } from '@angular/forms';
import { AppleBooksComponent } from './appleBooks/appleBooks.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AppleBooksComponent,
    DarshanLalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
