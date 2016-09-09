import { Component, ViewChild } from '@angular/core';
import {ionicBootstrap, Platform, Nav, IONIC_DIRECTIVES} from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import {HomePage} from "./pages/home/home";
import {MissionsPage} from "./pages/missions/missions";
import {SettingsPage} from "./pages/settings/settings";
import {PlayersPage} from "./pages/players/players";
import {FIREBASE_PROVIDERS, defaultFirebase} from "angularfire2";
import {firebaseConfig} from "./app-config";

import * as firebase from "firebase";

@Component({
  templateUrl: 'build/app.html'

})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string, protected: boolean}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home', protected:  false},
      { title: 'Missions', component: MissionsPage, icon: 'flag', protected:  false},
      { title: 'Players', component: PlayersPage, icon: 'people', protected:  false},
      { title: 'Settings', component: SettingsPage, icon: 'cog', protected:  false}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp, [
  FIREBASE_PROVIDERS,
  defaultFirebase(firebaseConfig),
]);
