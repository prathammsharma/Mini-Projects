import {Component} from '@angular/core';
import {EventComponent} from './event/event.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EventComponent],
  template: `<app-event></app-event>`,
})
export class AppComponent{}
