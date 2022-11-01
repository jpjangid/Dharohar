import { Component } from '@angular/core';
import { AppUtility } from './utility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dharohar';
  constructor(public utility : AppUtility) {}
}
