import { Component, OnInit, Input } from '@angular/core';
import { CharacterDetails } from "../shared/character";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  @Input() selectedChar: CharacterDetails;

  constructor() { }

  ngOnInit() {
  }

}
