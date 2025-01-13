import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Nguyen's First Angular App";
  firstName = "Tan";
  lastName = "Nguyen";
}
