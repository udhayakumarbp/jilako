import { Component } from '@angular/core';
import { FlightService } from './services/flight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jillako-via';
  constructor(private loginSer:FlightService){
    // if(localStorage.getItem('token')){
    //   this.loginSer.subject.next(true)
    // }
  }
}
