import { animate, style, state, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pet-viewer',
  templateUrl: './pet-viewer.component.html',
  styleUrls: ['./pet-viewer.component.css'],
  animations: [
    trigger('accepted', [
      state('hidden', style({
        opacity: 0.2,
        left: '400px',
      })),
      state('viewing', style({
        opacity: 1,
        left: '200px'
      })),
      state('accepted', style({
        opacity: 0.2,
        left: '100px'
      })),
      state('denied', style({
        opacity: 0.2,
        left: '0px'
      })),
      transition('* => *',[
        animate('0.4s')
      ]) 
    ])
  ]
})
export class PetViewerComponent {
  data: string[] = ["dog1.jpg", "dog2.jpg", "dog3.jpg"];

  denyPet(){
    console.log("Denied Pet");
  }

  acceptPet(){
    console.log("Accepted Pet");
  }
}
