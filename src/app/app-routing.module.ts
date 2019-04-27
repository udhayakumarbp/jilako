import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FlightsComponent } from './flights/flights.component';
import { LogoutComponent } from './logout/logout.component';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';

const routes: Routes = [{
  path:'',
  component:LoginComponent
},{
  path:'flights',
  component:FlightsComponent
},{
  path:'logout',
  component:LogoutComponent
},{
  path:'flightsearch',
  component:FlightsearchComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
