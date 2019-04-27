import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  islogin
  constructor(private flightSer: FlightService) {
    this.flightSer.subject.subscribe(
      (islogin) => {
        this.islogin = islogin
        console.log(islogin)

      })
  }
  Logout(){
    localStorage.clear();
    this.flightSer.subject.next(false)
  }

  ngOnInit() {
  }

}
