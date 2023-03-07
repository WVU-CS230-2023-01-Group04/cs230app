import { animate, style, state, transition, trigger } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pet-viewer',
  templateUrl: './pet-viewer.component.html',
  styleUrls: ['./pet-viewer.component.css'],
  animations: [
    trigger('tinder', [
      state('hidden', style({
        opacity: 0,
        transform: "translateX(500px)",
      })),
      state('viewing', style({
        opacity: 1,
      })),
      state('accepted', style({
        opacity: 0,
        transform: "translateX(-500px)",
      })),
      state('denied', style({
        opacity: 0,
        transform: "translateY(-500px)",
      })),
      transition('* => *',[
        animate('0.4s')
      ]) 
    ])
  ]
})
export class PetViewerComponent {
  data: string[] = ["dog1.jpg", "dog2.jpg", "dog3.jpg"];
  imageOne: string = 'viewing';
  imageTwo: string = 'hidden';
  imageThree: string = 'hidden';
  @ViewChild("container") container!: HTMLElement;

  denyPet(){
    console.log("Denied Pet");
    if(this.imageOne == "viewing"){
      this.imageOne = "denied";
      this.imageTwo = "viewing";
      this.imageThree = "hidden";
    }else if(this.imageTwo == "viewing"){
      this.imageTwo = "denied";
      this.imageThree = "viewing";
      this.imageOne = "hidden";
    }else if(this.imageThree == "viewing"){
      this.imageThree = "denied";
      this.imageOne = "viewing";
      this.imageTwo = "hidden";
    }
  }

  acceptPet(){
    console.log("Accepted Pet");
    if(this.imageOne == "viewing"){
      this.imageOne = "accepted";
      this.imageTwo = "viewing";
      this.imageThree = "hidden";
    }else if(this.imageTwo == "viewing"){
      this.imageTwo = "accepted";
      this.imageThree = "viewing";
      this.imageOne = "hidden";
    }else if(this.imageThree == "viewing"){
      this.imageThree = "accepted";
      this.imageOne = "viewing";
      this.imageTwo = "hidden";
    }
  }

  reset(){
    console.log("Animation Done");
  }
}
