import { Component, OnInit } from '@angular/core';
import { CharacterService } from "../character.service";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: any[];

  constructor(private cs: CharacterService) { }

  ngOnInit() {
    this.cs.getJSON().subscribe(
        data => {
          console.log(data);
          this.characters = data.characters;
        }
    )
  }

  getCharacterDetails(url) {
      this.cs.getCharacterDetails(url).subscribe(data => {
          this.cs.changeCharSelection(data);
      });
  }

}
