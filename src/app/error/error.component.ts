import { Component, OnInit, Input } from '@angular/core';
import { ErrorService } from "./error.service";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input() hasError: boolean;
  @Input() error: any;

  constructor() { }

  ngOnInit() {
    //this.errorService.$hasError.subscribe(data => this.hasError = data);
    //this.errorService.$error.subscribe(err => this.error = err);
  }

  clearError() {
    //this.errorService.clearError();
  }

}
