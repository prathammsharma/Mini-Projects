import {Injectable} from '@angular/core';

export interface Event{
  name: string;
  date: Date;
}

@Injectable({
  providedIn: 'root',
})
export class EventService{
  private events: Event[] = [];

  constructor(){}

  addEvent(event: Event){
    this.events.push(event);
  }

  getEvents(): Event[]{
    return this.events;
  }

  getTimeLeft(eventDate: Date): string{
    const now = new Date();
    const timeDifference = eventDate.getTime() - now.getTime();

    if (timeDifference <= 0){
      return 'Event has already passed';
    }

    const days = Math.floor(timeDifference / (1000 * 3600 * 24));
    const hours = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));

    return `${days} days, ${hours} hours, ${minutes} minutes left`;
  }
}