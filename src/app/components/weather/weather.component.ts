import { Component, OnInit } from '@angular/core';
import { WeatherService} from '../../services/weather.service'
import { Detail} from '../../modules/Detail'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  details:Detail[];

  lat: number;
  long :number;
  iconId:string;

  placeformated:string;
  main:string;
  description:string;
  humidity:string;
  temp:number;
  speed:number;
  icon:string;



  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    this.details = [
      {
       title: "Wind",
       value:"TBD"
  
       },
     {
       title: "Temperature",
       value:"TBD"
  
       },
     {
       title: "Humidity",
       value:"TBD"
  
       }
     ]
  }



   handleAddressChange(place) {

    // console.log(place)
    this.placeformated = place['formatted_address'];
    // console.log(this.placeformated) 
    this.lat = place.geometry.location.lat()
    this.long = place.geometry.location.lng()
    // console.log(this.lat)
    // console.log(this.long)


    //  ** Requesting weather details from the weatherService ** //

    this.weatherService.getWeather(this.lat,this.long).subscribe(details => {
  
      // console.log(details)
      this.iconId = details.weather[0].icon;
      this.icon = `http://openweathermap.org/img/wn/${this.iconId}@2x.png`
      this.main = details.weather[0].main;
      this.description = details.weather[0].description;
      this.humidity = details.main.humidity;
      this.temp = details.main.temp;
      this.speed = details.wind.speed
      this.details[0].value = this.speed
      this.details[1].value = this.temp
      this.details[2].value = this.humidity
      
    })

    }

    
}

