import { Component, OnInit } from '@angular/core';
import { CharacterDetails } from './shared/character';
import { CharacterService } from './character.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'star wars characters';
    selectedChar: CharacterDetails;

    hasError = false;
    error: any;

    constructor(private cs: CharacterService) {}

    ngOnInit() {
    }

    getCharacterDetails(event) {
        this.hasError = false;
        this.error = null;

        this.cs.getCharacterDetails(event).subscribe(
            data => {
                this.selectedChar = data;
            }, error => {
                this.selectedChar = null;
                this.hasError = true;
                this.error = error;
            });
    }
}
