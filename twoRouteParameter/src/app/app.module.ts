import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRecordsComponent } from './user-records/user-records.component';
import { UserRecordsDetailsComponent } from './user-records-details/user-records-details.component';
import { UserServicesService } from './services/user-services.service';

@NgModule({
  declarations: [
    AppComponent,
    UserRecordsComponent,
    UserRecordsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
