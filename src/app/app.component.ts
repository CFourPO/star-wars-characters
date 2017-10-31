import { Component, OnInit } from '@angular/core';
import { CharacterDetails } from "./shared/character";
import { CharacterService } from "./character.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'star wars characters';
    selectedChar: CharacterDetails;
    pristine: boolean = true;

    constructor(private cs: CharacterService) {}

    ngOnInit() {

    }

    getCharacterDetails(event) {
        this.pristine = false;
        this.cs.getCharacterDetails(event).subscribe(data => {
            this.selectedChar = data;
        })
    }
}
