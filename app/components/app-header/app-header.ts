import {Component, Input} from '@angular/core';

/*
  Generated class for the AppHeader component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'app-header',
  templateUrl: 'build/components/app-header/app-header.html'
})
export class AppHeader {

  @Input() title: string = null;

  constructor() {
  }
}


