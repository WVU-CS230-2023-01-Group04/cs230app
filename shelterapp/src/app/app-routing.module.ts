import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ShelterInfoPageComponent } from './shelter-info-page/shelter-info-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'shelter-info', component: ShelterInfoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
