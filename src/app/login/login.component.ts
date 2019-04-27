import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightService } from '../services/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForms: FormGroup
  constructor(
    private fb: FormBuilder,
    private loginSer:FlightService,
    private router: Router
    ) {
    this.loginForms = this.fb.group({
      email:['superadmin@example.com', Validators.required],
      password:['WLf2O9DE', Validators.required]

    });
  }

  ngOnInit() {
  }

  viaLogin(data){
    console.log(data.value)
    this.loginSer.flightLogin(data.value)
    .subscribe((success: any)=>{
      localStorage.setItem('token', success.data);
      this.loginSer.subject.next(true)
      this.router.navigate(['/flights'])
      console.log(success.data)

    },(error)=>{
      console.error(error);
      
    })
  }

}
