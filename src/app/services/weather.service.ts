import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  

  constructor(private http:HttpClient) { 
     }
  

  getWeather(latitude:number,longitude:number):Observable<any> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=8cde5c0d0075230cae2833a1f07fe325`);
     }

  





}
