import { animate, style, state, transition, trigger, keyframes } from '@angular/animations';
import { Component, ViewChild, OnInit } from '@angular/core';
import animalData from '../../../assets/animals.json';

@Component({
  selector: 'app-pet-viewer',
  templateUrl: './pet-viewer.component.html',
  styleUrls: ['./pet-viewer.component.css'],
  animations: [
    trigger('tinder', [
      state('hidden', style({
        opacity: 0,
        transform: "translateX(200px) scale(0.1)",
      })),
      state('viewing', style({
        opacity: 1,
        transform: "scale(1) translateX(-50%)"
      })),
      state('accepted', style({
        opacity: 0,
        transform: "translateX(-400px) scale(0.1)",
      })),
      state('denied', style({
        opacity: 0,
        transform: "translateY(-300px) translateX(-200px) scale(0.1)",
      })),
      transition('denied => *',[
        animate('0s')
      ]),
      transition('accepted => *',[
        animate('0s')
      ]),
      transition('viewing => accepted',[
        animate('0.4s ease-in-out'),
      ]),
      transition('* => hidden',[
        animate('0s')
      ]),
      transition('* => *',[
        animate('0.4s ease-in-out')
      ])
    ])
  ]
})
export class PetViewerComponent implements OnInit {
  imageOne: string = 'viewing';
  imageTwo: string = 'hidden';
  imageThree: string = 'hidden';
  tileOneData: Object = {};
  tileTwoData: Object = {};
  tileThreeData: Object = {};
  currentIndex: number = 1;

  @ViewChild("container") container!: HTMLElement;

  ngOnInit(){
    console.log("Initializing");
    this.tileOneData = {
      "name": animalData.pets.dogs[0].name,
      "age": animalData.pets.dogs[0].age,
      "breed": animalData.pets.dogs[0].breed,
      "worms": animalData.pets.dogs[0].worms,
      "shots": animalData.pets.dogs[0].shots,
      "imgsrc": animalData.pets.dogs[0].imgsrc,
      "state": "viewing"
    };
  }

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
    console.log("current index: " + this.currentIndex);
    console.log("next dog: ");
    console.log(animalData.pets.dogs[this.currentIndex]);
    if(this.currentIndex-1 < animalData.numberOfPets.dogs){
      if(this.imageOne == "hidden"){
        this.tileOneData = animalData.pets.dogs[this.currentIndex];
      }else if(this.imageTwo == "hidden"){
        this.tileTwoData = animalData.pets.dogs[this.currentIndex];
      }else if(this.imageThree == "hidden"){
        this.tileThreeData = animalData.pets.dogs[this.currentIndex];
      }
      this.currentIndex++;
    }
  }
}
