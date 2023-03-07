import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterLayoutsComponent } from './router-layouts/router-layouts.component';
import { NavigationComponent } from './navigation/navigation.component';

import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ShelterInfoPageComponent } from './shelter-info-page/shelter-info-page.component';
import { NavbarComponent } from './main-page/navbar/navbar.component';
import { PetViewerComponent } from './main-page/pet-viewer/pet-viewer.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PetInfoComponent } from './router-layouts/pet-info/pet-info.component';

@NgModule({
  declarations: [
    AppComponent,
    RouterLayoutsComponent,
    NavigationComponent,
    LoginPageComponent,
    SignupPageComponent,
    MainPageComponent,
    ShelterInfoPageComponent,
    NavbarComponent,
    PetViewerComponent,
    PetInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
