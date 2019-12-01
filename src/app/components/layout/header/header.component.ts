import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  icon:string="http://openweathermap.org/img/wn/02d@2x.png";

  constructor() { }

  ngOnInit() {
  }

}
