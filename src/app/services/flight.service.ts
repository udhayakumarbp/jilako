import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FlightService {
  subject = new BehaviorSubject(this.isLoggedin());
  constructor(private http: HttpClient) {   
  }

  isLoggedin() {
    return !!localStorage.getItem('token');
  }

  flightLogin(data){
    return this.http.post('https://jillako-dev.azurewebsites.net/api/login', data)
  }

  flightSerach(data){
    console.log(data)
    const token = localStorage.getItem('token');
    return this.http.post('https://jillako-dev.azurewebsites.net/api/flights', data
     , {
    headers: {
      Authorization: `Bearer ${token}`
    }
    })
  }
}
