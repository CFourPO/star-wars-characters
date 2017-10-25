import { Component, OnInit } from '@angular/core';
import { CharacterDetails } from "./shared/character";
import { CharacterService } from "./character.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedCharacter: CharacterDetails;
  title = 'app works!';
  constructor(private cs: CharacterService) {}

  ngOnInit() {
    this.cs.selectedCharacter.subscribe(data => {
      this.selectedCharacter = data;
    })
  }
}
