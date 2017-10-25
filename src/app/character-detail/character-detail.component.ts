import { Component, OnInit, Input } from '@angular/core';
import { CharacterDetails } from "../shared/character";
import { CharacterService } from "../character.service";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  @Input() selectedCharacter: CharacterDetails;

  constructor(private cs: CharacterService) { }

  ngOnInit() {

  }

}
