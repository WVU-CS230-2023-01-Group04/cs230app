import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pet-tile',
  templateUrl: './pet-tile.component.html',
  styleUrls: ['./pet-tile.component.css']
})
export class PetTileComponent {
  @Input() petData: any = {
    name: "",
    age: "",
    breed: "",
    worms: "",
    shots: "",
    imgsrc: ""
  }
}
