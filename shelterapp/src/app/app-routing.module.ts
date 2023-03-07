import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { PetInfoComponent } from './router-layouts/pet-info/pet-info.component';

const routes: Routes = [
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
