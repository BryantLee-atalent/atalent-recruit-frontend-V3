import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {RequestApiService} from '../service/request_service';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Postion } from '../pages/postion/postion';
import { DetailPage } from '../pages/detail/detail';
import { ApplyPage } from '../pages/apply/apply';
import { CreatePage } from '../pages/creat/create';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Postion,
    DetailPage,
    ApplyPage,
    CreatePage
  ],
  imports: [
    BrowserModule,

    IonicModule.forRoot(MyApp, {
      // locationStrategy: 'path'
    }, {
      links: [
        {component: HomePage, name: 'Home', segment: 'home'},
        {component: Postion, name: 'Position', segment: 'position'},
        {component: DetailPage, name: 'Detail', segment: 'detail'},
        {component: ApplyPage, name: 'Apply', segment: 'apply'},
        {component: CreatePage, name: 'Create', segment: 'create'}
      ]
    }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Postion,
    DetailPage,
    ApplyPage,
    CreatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RequestApiService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
