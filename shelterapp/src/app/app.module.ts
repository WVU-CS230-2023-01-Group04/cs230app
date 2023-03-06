import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterLayoutsComponent } from './router-layouts/router-layouts.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PetInfoComponent } from './router-layouts/pet-info/pet-info.component';

@NgModule({
  declarations: [
    AppComponent,
    RouterLayoutsComponent,
    NavigationComponent,
    PetInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
