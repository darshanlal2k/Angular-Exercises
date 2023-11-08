import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes: Routes = [
  { path: '', redirectTo:'/events', pathMatch: 'full' , component: EventListComponent },
  { path: 'events/:event.id', component: EventDetailsComponent, canActivate: [EventDetailsActivatorService] },
  { path: 'events', component: EventListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
