import { Component, OnInit } from '@angular/core';
import { WeatherService} from '../../services/weather.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  // types:Type[];

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
  }
    
  public handleAddressChange(place: object) {

    // console.log(place)
    const placeformated = place['formatted_address'];
    console.log(placeformated) 
    const latitude = place.geometry.location.lat()
    const longitude = place.geometry.location.lng()
    console.log(latitude)
    console.log(longitude)
    }

}

