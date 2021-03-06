import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NewsPage } from '../pages/NewsPage/NewsPage';
import { FixturesResultPage } from '../pages/FixturesResultPage/FixturesResultPage';
import { TeammatesPhotosPage } from '../pages/TeammatesPhotosPage/TeammatesPhotosPage';
import { Rugby101Page } from '../pages/Rugby101Page/Rugby101Page';
import { ClubsPage } from '../pages/ClubsPage/ClubsPage';
import { PhotoEditor } from '../pages/PhotoEditor/PhotoEditor';

@NgModule({
  declarations: [
    MyApp,
    NewsPage,
    FixturesResultPage,
    TeammatesPhotosPage,
    Rugby101Page,
    ClubsPage,
    PhotoEditor

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsPage,
    FixturesResultPage,
    TeammatesPhotosPage,
    Rugby101Page,
    ClubsPage,
    PhotoEditor
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
