import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlightService } from '../services/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flightForms: FormGroup
  adultsCounts = 1;
  childrenCounts = 0;
  infantsCount = 0;

  constructor(
    private fb: FormBuilder,
    private flightSer: FlightService,
    private router :Router
  ) {
    this.flightForms = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      departure: ['', Validators.required],

    })
  }

  ngOnInit() {
  }
  // AdultsCounts
  plus() {
    if (this.adultsCounts + this.childrenCounts < 9)
      this.adultsCounts++;
  }
  minus() {
    this.adultsCounts--
    if (this.adultsCounts == 0)
      this.adultsCounts = 1;
  }

  // ChildrenCounts
  secondPlus() {
    if (this.adultsCounts + this.childrenCounts < 9)
      this.childrenCounts++;
  }

  secondMinus() {
    if (this.childrenCounts !== 0)
      this.childrenCounts--;
  }
  // Infants

  infantsPlus() {
    if (this.adultsCounts > this.infantsCount) {
      this.infantsCount++;
    }
  }

  infantsMinus() {
    if (this.infantsCount !== 0) {
      this.infantsCount--;
    }
  }

  viaFlights() {

    const {
      from,
      to,
      departure
    } = this.flightForms.value;
    console.log(departure)
    const data = {
      AdultCount: this.adultsCounts,
      ChildCount: this.childrenCounts,
      InfantCount: this.infantsCount,
      TripType: 1,
      IsDirect: false,
      IsRefundable: false,
      SearchTripDetail:
        [
          {
            Origin: from,
            Destination: to,
            Depaturedatetime: departure
          }
        ]
    };

    console.log(data)
    localStorage.setItem('user', JSON.stringify(data))
    this.router.navigate(['/flightsearch'])
    this.flightSer.flightSerach(data)
      .subscribe((success) => {
        console.log(success)

      }, (error) => {
        console.warn(error);

      })
  }
}
