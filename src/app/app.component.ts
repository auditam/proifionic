import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {News} from '../providers/News';
import { NewsPage } from '../pages/NewsPage/NewsPage';
import { FixturesResultPage } from '../pages/FixturesResultPage/FixturesResultPage';
import { TeammatesPhotosPage } from '../pages/TeammatesPhotosPage/TeammatesPhotosPage';
import { Rugby101Page } from '../pages/Rugby101Page/Rugby101Page';
import { ClubsPage } from '../pages/ClubsPage/ClubsPage';


@Component({
  templateUrl: 'app.html',
  providers: [News]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = NewsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'News', component: NewsPage },
      { title: 'Fixtures & Result', component: FixturesResultPage },
      { title: 'Teammate Photos', component: TeammatesPhotosPage },
      { title: 'Rugby 101', component: Rugby101Page },
      { title: 'Rugby Clubs', component: ClubsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
