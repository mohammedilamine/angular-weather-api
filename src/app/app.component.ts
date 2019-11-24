import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Lamine';

  constructor() {
    console.log(123)
    this.name = "Ted"

  }


}
