import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventService } from './services/event.service';
import { EventDetailsActivatorService } from './services/event-details-activator.service';

@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventService,EventDetailsActivatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
