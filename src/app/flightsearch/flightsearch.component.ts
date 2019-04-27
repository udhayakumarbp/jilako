import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-flightsearch',
  templateUrl: './flightsearch.component.html',
  styleUrls: ['./flightsearch.component.css']
})
export class FlightsearchComponent implements OnInit {
  searchInputs
  constructor(private searchSer: FlightService) {
    // this.searchSer.flightSerach(this.searchInputs)
    //   .subscribe((success:any) => {
    //     console.log(success)

    //   }, (error) => {
    //     console.warn(error);

    //   })
    console.log(this.searchDetails);
  }

  get serachInput(){
    const data = JSON.parse(localStorage.getItem('user'));
    return data;

  }

  ngOnInit() {
  }
  searchDetails = JSON.parse(localStorage.getItem('user'))
  

}
