import { Component, OnInit, Input } from '@angular/core';
import { Detail } from 'src/app/modules/Detail';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() detail: Detail;

  constructor() { }

  ngOnInit() {
  }

}
