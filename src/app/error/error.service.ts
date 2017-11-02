import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";

@Injectable()
export class ErrorService implements ErrorHandler {


  //_hasError: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  //$hasError: Observable<boolean> = this._hasError.asObservable();
  //
  //_error: BehaviorSubject<Error> = new BehaviorSubject<Error>(null);
  //$error: Observable<Error> = this._error.asObservable();

  constructor(private injector: Injector) { }

  handleError(error) {
    console.log("ERRRRRRRRRRRRRROOOOOORRRRRRRRRRRRR", error);
    //this._hasError.next(true);
    //this._error.next(error);

    throw error;
  }

  clearError() {
    //this._hasError.next(false);
  }


}
