import { Component, OnInit } from '@angular/core';
import { WeatherService} from '../../services/weather.service'
// import { WeatherDetails} from '../../modules/WeatherDetails'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {


  lat: number;
  long :number;
  iconId:string="01d";

  placeformated:string;
  main:string;
  description:string;
  humidity:string;
  temp:number;
  speed:number;
  icon:string="http://openweathermap.org/img/wn/02d@2x.png";



  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
  }


  public handleAddressChange(place) {

    // console.log(place)
    this.placeformated = place['formatted_address'];
    console.log(this.placeformated) 
    this.lat = place.geometry.location.lat()
    this.long = place.geometry.location.lng()
    console.log(this.lat)
    console.log(this.long)

    // requesting weather details from the weatherService:

    this.weatherService.getWeather(this.lat,this.long).subscribe(details => {
      

      // console.log(details)
      this.iconId = details.weather[0].icon;
      this.icon = `http://openweathermap.org/img/wn/${this.iconId}@2x.png`
      console.log(this.icon);

      console.log(details.weather[0].main)
      console.log(details.weather[0].description);
      console.log(details.main.humidity)
      console.log(details.main.temp)
      console.log(details.wind.speed)
      this.main = details.weather[0].main;
      this.description = details.weather[0].description;
      this.humidity = details.main.humidity;
      this.temp = details.main.temp;
      this.speed = details.wind.speed



    })

    }
    
}

