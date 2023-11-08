import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsActivatorService implements CanActivate {

  constructor(public eventService: EventService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    let event = this.eventService.getEvent(+route.params['eventId'])

    return !!event
  }
}
