import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AppHeader} from "../../components/app-header/app-header";

/*
  Generated class for the SettingsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/settings/settings.html',
  directives: [AppHeader]
})
export class SettingsPage {

  constructor(private nav: NavController) {

  }

}
