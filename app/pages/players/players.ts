import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AppHeader} from "../../components/app-header/app-header";

/*
  Generated class for the PlayersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/players/players.html',
  directives: [AppHeader]
})
export class PlayersPage {

  constructor(private nav: NavController) {

  }

}
