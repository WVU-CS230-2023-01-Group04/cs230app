import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { PetInfoComponent } from './router-layouts/pet-info/pet-info.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ShelterInfoPageComponent } from './shelter-info-page/shelter-info-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  { 
    path:'appointments',
    component:AppComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'signup',
    component: SignupPageComponent
  },
  { 
    path: 'shelter-info', 
    component: ShelterInfoPageComponent
  },
  {
  path:'petinfo',
  component:PetInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
